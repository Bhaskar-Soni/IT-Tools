<script setup lang="ts">

import type { TraefikComposeOptions } from './traefik-compose-maker.service';
import { generateCompose } from './traefik-compose-maker.service';

const formModel = ref<TraefikComposeOptions>({
  logDebug: false,
  certResolverName: '',
  postmasterEmail: '',
  letEncryptTest: false,
  dashboard: false,
  traefikDashboardHostName: '',
  dashboardUserAndPass: '',
  proxiedServiceName: '',
  proxiedServiceImage: '',
  proxiedServiceLoadBalancePort: 80,
  proxiedServiceHostName: '',
  loadBalance: false,
});

const dockerComposeEntry = computed<string>(() => generateCompose(formModel.value));
</script>

<template>
  <n-card title="Traefik Docker Compose Generator">
    <n-form :model="formModel" label-placement="left">
      <n-form-item label="Proxied Service Name:">
        <n-input v-model:value="formModel.proxiedServiceName" placeholder="Enter service name" />
      </n-form-item>

      <n-form-item label="Proxied Service Image:">
        <n-input v-model:value="formModel.proxiedServiceImage" placeholder="Enter image name" />
      </n-form-item>

      <n-form-item label="Proxied Service Host Name:">
        <n-input v-model:value="formModel.proxiedServiceHostName" placeholder="Enter service hostname" />
      </n-form-item>

      <n-space>
        <n-form-item label="Proxied Service Load Balancer Port:">
          <NInputNumber v-model:value="formModel.proxiedServiceLoadBalancePort" placeholder="Enter port" />
        </n-form-item>

        <n-form-item label="Enable Load Balancer">
          <n-switch v-model:value="formModel.loadBalance" />
        </n-form-item>
      </n-space>

      <n-form-item label="Cert Resolver Name:">
        <n-input v-model:value="formModel.certResolverName" placeholder="Enter cert resolver name" />
      </n-form-item>

      <n-form-item label="Postmaster Email:">
        <n-input v-model:value="formModel.postmasterEmail" placeholder="Enter email" />
      </n-form-item>

      <n-space>
        <n-form-item label="Let's Encrypt Test Mode">
          <n-switch v-model:value="formModel.letEncryptTest" />
        </n-form-item>

        <n-form-item label="Enable Dashboard">
          <n-switch v-model:value="formModel.dashboard" />
        </n-form-item>

        <n-form-item label="Log Level (DEBUG)">
          <n-switch v-model:value="formModel.logDebug" />
        </n-form-item>
      </n-space>

      <n-form-item label="Traefik Dashboard Host Name:">
        <n-input v-model:value="formModel.traefikDashboardHostName" placeholder="Enter dashboard host name" />
      </n-form-item>

      <n-form-item label="Dashboard User and Password:">
        <n-input v-model:value="formModel.dashboardUserAndPass" placeholder="User:Password" />
      </n-form-item>

      <n-card v-if="dockerComposeEntry" title="Generated Compose Entry">
        <textarea-copyable :value="dockerComposeEntry" language="yaml" />
      </n-card>
    </n-form>
  </n-card>
</template>

