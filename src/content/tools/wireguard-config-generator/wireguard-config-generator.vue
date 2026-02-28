<script setup lang="ts">

import { parseCidr } from 'cidr-tools';
import { stringifyIp } from 'ip-bigint';
import QRCodeVue3 from 'qrcode-vue3';
import { WgConfig } from './lib/WgConfig';
import { generateConfigString } from './lib/utils/configParser';

const inputConfig = ref('');
const inputConfigError = ref('');
const config = ref(new WgConfig({
  wgInterface: {
    listenPort: 51820,
    dns: [],
    postUp: ['iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE'],
    postDown: ['iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE'],
    address: ['10.0.0.1/24'],
  },
  clientsAllowedIps: ['0.0.0.0/0', '::/0'],
}));

watchEffect(() => {
  if (inputConfig.value) {
    inputConfigError.value = '';
    try {
      config.value.parse(inputConfig.value);
    }
    catch (e: any) {
      inputConfigError.value = e.toString();
    }
  }
});

const cidr = computed<string>({
  get() {
    if (!config.value.wgInterface?.address) {
      return '';
    }
    return config.value.wgInterface.address.join(',') ?? '';
  },
  set(newValue) {
    if (config.value.wgInterface) {
      config.value.wgInterface.address = newValue.split(',').map(s => s.trim());
    }
  },
});
const startIP = ref(2);
const server = computed<string>({
  get() {
    return config.value.wgInterface?.name ?? '';
  },
  set(newValue) {
    if (config.value.wgInterface) {
      config.value.wgInterface.name = newValue;
    }
  },
});
const serverPort = computed<number>({
  get() {
    return config.value.wgInterface?.listenPort ?? 51820;
  },
  set(newValue) {
    if (config.value.wgInterface) {
      config.value.wgInterface.listenPort = newValue;
    }
  },
});
const clientAllowedIPs = computed<string>({
  get() {
    if (!config.value.clientsAllowedIps) {
      return '';
    }
    return config.value.clientsAllowedIps.join(',') ?? '';
  },
  set(newValue) {
    if (config.value) {
      config.value.clientsAllowedIps = newValue.split(',').map(s => s.trim());
    }
  },
});
const endpoint = computed<string>({
  get() {
    return config.value.endpoint ?? '';
  },
  set(newValue) {
    config.value.endpoint = newValue;
  },
});
const dns = computed<string>({
  get() {
    if (!config.value.wgInterface?.dns) {
      return '';
    }
    return config.value.wgInterface.dns.join(',') ?? '';
  },
  set(newValue) {
    if (config.value.wgInterface) {
      config.value.wgInterface.dns = newValue.split(',').map(s => s.trim());
    }
  },
});
const postUpRule = computed<string>({
  get() {
    if (!config.value.wgInterface?.postUp) {
      return '';
    }
    return config.value.wgInterface.postUp.join('\n') ?? '';
  },
  set(newValue) {
    if (config.value.wgInterface) {
      config.value.wgInterface.postUp = newValue.split('\n').map(s => s.trim());
    }
  },
});
const postDownRule = computed<string>({
  get() {
    if (!config.value.wgInterface?.postDown) {
      return '';
    }
    return config.value.wgInterface.postDown.join('\n') ?? '';
  },
  set(newValue) {
    if (config.value.wgInterface) {
      config.value.wgInterface.postDown = newValue.split('\n').map(s => s.trim());
    }
  },
});

const usePreSharedKeys = ref(true);
const numberOfClients = ref(3);

const generatedConfigs = ref<{ server: string; peers: Array<{ name: string; config: string }> } | null>(null);

function generatePeers() {
  config.value.clearPeers();
  config.value.generateKeys({
    preSharedKey: usePreSharedKeys.value,
  });
  const { start: cidrStartIP } = parseCidr(cidr.value);

  for (let i = 0; i < numberOfClients.value; i++) {
    const peer = config.value.createPeer({
      name: `Client ${i + 1}`,
      clientAssignedIP: stringifyIp({
        version: 4,
        number: BigInt(cidrStartIP) + BigInt(startIP.value) + BigInt(i),
      }),
    });
    config.value.addPeer(peer);
  }

  generatedConfigs.value = generateConfigString(config.value);
}
</script>

<template>
  <div>
    <details mb-1>
      <summary>Input server configuration</summary>
      <c-input-text
        v-model:value="inputConfig"
        placeholder="Put your input configuration here..."
        rows="5"
        multiline
        mb-2
      />
      <c-alert v-if="inputConfigError">
        {{ inputConfigError }}
      </c-alert>
    </details>
    <c-card title="Configuration" mb-1>
      <n-space>
        <c-input-text
          v-model:value="server"
          label="Server Name:"
          placeholder="Server Name or FQDN"
          label-position="left"
          style="min-width: 400px"
          mb-2
        />
        <n-form-item label="Server Port:" label-placement="left">
          <n-input-number v-model:value="serverPort" min="0" max="65535" />
        </n-form-item>
      </n-space>
      <c-input-text
        v-model:value="cidr"
        label="Server CIDR:"
        placeholder="Server CIDR"
        label-position="left"
        mb-2
      />
      <n-space>
        <n-form-item label="Start IP number:" label-placement="left">
          <n-input-number v-model:value="startIP" min="2" />
        </n-form-item>
        <n-form-item label="Number of clients:" label-placement="left">
          <n-input-number v-model:value="numberOfClients" min="1" />
        </n-form-item>
      </n-space>
      <n-form-item label="Use Pre Shared Keys" label-placement="left">
        <n-checkbox v-model:checked="usePreSharedKeys" />
      </n-form-item>
      <c-input-text
        v-model:value="clientAllowedIPs"
        label="Client Allowed IPs:"
        placeholder="Client Allowed IPs"
        label-position="left"
        mb-2
      />
      <c-input-text
        v-model:value="endpoint"
        label="Endpoint (optional):"
        placeholder="Endpoint"
        label-position="left"
        mb-2
      />
      <c-input-text
        v-model:value="dns"
        label="DNS"
        placeholder="DNS servers:"
        label-position="left"
        mb-2
      />
      <c-input-text
        v-model:value="postUpRule"
        label="Post-Up rule:"
        placeholder="Post-Up rule"
        mb-2
      />
      <c-input-text
        v-model:value="postDownRule"
        label="Post-Down rule:"
        placeholder="Post-Down rule"
        mb-2
      />
    </c-card>

    <n-space justify="center" mb-2 mt-1>
      <n-button @click="generatePeers">
        Generate Configurations
      </n-button>
    </n-space>

    <div v-if="generatedConfigs">
      <n-card title="Generated Server Config file:">
        <textarea-copyable :value="generatedConfigs.server" />
      </n-card>

      <n-card v-for="(peer, index) in generatedConfigs.peers" :key="index" :label="`${peer.name} - Configuration`">
        <n-space>
          <textarea-copyable :value="peer.config" />
          <QRCodeVue3
            :value="peer.config" file-ext="png" :download="true"
            :download-options="{ name: peer.name, extension: 'png' }"
          />
        </n-space>
      </n-card>
    </div>
  </div>
</template>
