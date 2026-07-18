<script setup lang="ts">
const actionOptions = [
  { label: "ACCEPT", value: 'ACCEPT' },
  { label: "DROP", value: 'DROP' },
  { label: "REJECT", value: 'REJECT' },
];

const protocolOptions = [
  { label: "TCP", value: 'tcp' },
  { label: "UDP", value: 'udp' },
  { label: "ICMP", value: 'icmp' },
  { label: "IP", value: 'ip' },
];

const chainOptions = [
  { label: "INPUT", value: 'INPUT' },
  { label: "OUTPUT", value: 'OUTPUT' },
  { label: "FORWARD", value: 'FORWARD' },
  { label: "PREROUTING", value: 'PREROUTING' },
];

const action = ref('ACCEPT');
const protocol = ref('tcp');
const sourceIP = ref('');
const destinationIP = ref('');
const sourcePort = ref<number | null>(null);
const destinationPort = ref<number | null>(null);
const ruleOrder = ref<number | null>(null);
const chain = ref('INPUT');
const command = computed(() => {
  let cmd = `iptables -A ${chain.value}`;
  if (ruleOrder.value) {
    cmd += ` ${ruleOrder.value}`;
  }
  if (protocol.value) {
    cmd += ` -p ${protocol.value}`;
  }
  if (sourceIP.value) {
    cmd += ` -s ${sourceIP.value}`;
  }
  if (destinationIP.value) {
    cmd += ` -d ${destinationIP.value}`;
  }
  if (sourcePort.value !== null) {
    cmd += ` --sport ${sourcePort.value}`;
  }
  if (destinationPort.value !== null) {
    cmd += ` --dport ${destinationPort.value}`;
  }
  cmd += ` -j ${action.value}`;
  return cmd;
});
</script>

<template>
  <NForm label-placement="left" label-width="140px">
    <NFormItem label="Action:">
      <NSelect v-model:value="action" :options="actionOptions" />
    </NFormItem>
    <NFormItem label="Protocol:">
      <NSelect v-model:value="protocol" :options="protocolOptions" />
    </NFormItem>
    <NFormItem label="Source IP:">
      <NInput v-model:value="sourceIP" />
    </NFormItem>
    <NFormItem label="Destination IP:">
      <NInput v-model:value="destinationIP" />
    </NFormItem>
    <NFormItem label="Source Port:">
      <NInputNumber v-model:value="sourcePort" />
    </NFormItem>
    <NFormItem label="Destination Port:">
      <NInputNumber v-model:value="destinationPort" />
    </NFormItem>
    <NFormItem label="Chain:">
      <NSelect v-model:value="chain" :options="chainOptions" />
    </NFormItem>
    <NFormItem label="Rule Order:">
      <NInputNumber v-model:value="ruleOrder" />
    </NFormItem>
  </NForm>

  <c-card title="Generated iptables command">
    <textarea-copyable :value="command" />
  </c-card>

  <n-divider />

  <table border="1" class="w-full border-collapse text-left text-sm text-gray-500 dark:text-gray-400">
    <thead>
      <tr>
        <td><strong>Expression</strong></td>
        <td><strong>Meaning</strong></td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>iptables -L</td>
        <td>List all rules in the selected chain</td>
      </tr>
      <tr>
        <td>iptables -t nat -n -L</td>
        <td>List all NAT rules</td>
      </tr>
      <tr>
        <td>iptables -L -n --line-numbers</td>
        <td>List all rules including their line number</td>
      </tr>
      <tr>
        <td>iptables -F</td>
        <td>Delete existing rules</td>
      </tr>
      <tr>
        <td>iptables -D INPUT 2</td>
        <td>Delete the second rule in the INPUT chain</td>
      </tr>
      <tr>
        <td>iptables -t nat -D PREROUTING 2</td>
        <td>Delete the second rule in the NAT table</td>
      </tr>
      <tr>
        <td>{{ "iptables -A INPUT -s \"&lt;ip address&gt;\" -j DROP" }}</td>
        <td>Block a specific IP address</td>
      </tr>
      <tr>
        <td>>-</td>
        <td>>-</td>
      </tr>
      <tr>
        <td>iptables -N MYCHAIN</td>
        <td>{{ "Create a new chain called \"MYCHAIN\"" }}</td>
      </tr>
    </tbody>
  </table>
</template>
