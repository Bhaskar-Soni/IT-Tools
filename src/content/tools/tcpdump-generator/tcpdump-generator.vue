<script lang="ts" setup>


import { ref } from 'vue';
import { NCheckbox, NForm, NFormItem, NInput, NSelect, NTooltip } from 'naive-ui';

const specificInterface = ref('');
const srcHost = ref('');
const dstHost = ref('');
const srcPort = ref('');
const dstPort = ref('');
const limit = ref('');
const disableDNS = ref(false);
const printLinkLevelHeader = ref(false);
const quickPrint = ref(false);
const verbosity = ref('');
const timeFormat = ref('');
const writeFile = ref('');
const expression = ref('');

const verbosityLevels = [
  { label: "Normal", value: '', description: 'Basic packet information.' },
  { label: "Minimal verbosity (-v)", value: '-v', description: 'Basic packet information.' },
  { label: "Increased verbosity (-vv)", value: '-vv', description: 'More packet details.' },
  { label: "Maximum verbosity (-vvv)", value: '-vvv', description: 'Full packet decoding.' },
];

const timeFormats = [
  { label: "Current time (HH:MM:SS.microsecond)", value: '' },
  { label: "No timestamp (-t)", value: '-tt' },
  { label: "Timestamp as seconds since Jan 1, 1970 (-tt)", value: '-tt' },
  { label: "Delta (micro-second resolution) between current and previous line (-ttt)", value: '-ttt' },
  { label: "Current time with date (YYYY-MM-DD HH:MM:SS.microsecond) (-tttt)", value: '-tttt' },
  { label: "Delta (micro-second resolution) between current and first line (-ttttt)", value: '-ttttt' },
];

const tcpDumpCommand = computed(() => {
  let command = 'tcpdump';
  if (specificInterface.value) {
    command += ` -i ${specificInterface.value}`;
  }
  if (srcHost.value) {
    command += ` src host ${srcHost.value}`;
  }
  if (dstHost.value) {
    command += ` dst host ${dstHost.value}`;
  }
  if (srcPort.value) {
    command += ` src port ${srcPort.value}`;
  }
  if (dstPort.value) {
    command += ` dst port ${dstPort.value}`;
  }
  if (limit.value) {
    command += ` -c ${limit.value}`;
  }
  if (disableDNS.value) {
    command += ' -n';
  }
  if (printLinkLevelHeader.value) {
    command += ' -e';
  }
  if (quickPrint.value) {
    command += ' -q';
  }
  if (verbosity.value) {
    command += ` ${verbosity.value}`;
  }
  if (timeFormat.value) {
    command += ` ${timeFormat.value}`;
  }
  if (writeFile.value) {
    command += ` -w ${writeFile.value}`;
  }
  if (expression.value) {
    command += ` ${expression.value}`;
  }

  return command;
});
</script>

<template>
  <div>
    <n-p>tcpdump is a utility commonly installed / available to many Linux distributions to quickly gather a network trace / packet capture. In short, it's the wireshark of linux to gathering packet captures. tcpdump is very versatile with many switches to granularly capture what you need to dubug network traffic; with options to output results via console, file, or wireshark pcap.</n-p>
    <n-p>
  This utility is to help generate a tcpdump command using some of the more common switches / filters offered by the tcpdump.
  A complete list of options can be found via its manual:
  <n-a href="https://www.tcpdump.org/manpages/tcpdump.1.html" target="_blank">
    tcpdump manual
  </n-a>
</n-p>
	<n-p>
      <strong>Note 1:</strong>Host, Source Host, and Destination Host can take multiple entries. Separate your entries with a comma, space, or semicolon.
    </n-p>
    <n-p>
      <strong>Note 2:</strong>When you specify a source (src) or destination (dst) flags, tcpdump will only filter in that direction. If you are looking to capture full TCP handshake, make sure you use "host" vs "src host" or "dst host" to see both request and response flow.
    </n-p>
    <NForm label-placement="left">
      <NFormItem label="Interface:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="specificInterface" placeholder="e.g., eth0" />
          </template>The network interface to capture packets from.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Source Host:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="srcHost" placeholder="e.g., 192.168.1.1" />
          </template>Capture packets originating from this host.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Destination Host:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="dstHost" placeholder="e.g., 192.168.1.2" />
          </template>Capture packets destined for this host.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Source Port:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="srcPort" placeholder="e.g., 443" />
          </template>Filter packets from this source port.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Destination Port:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="dstPort" placeholder="e.g., 80" />
          </template>Filter packets going to this destination port.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Packet Limit:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="limit" type="number" placeholder="e.g., 100" />
          </template>Stop capturing after this number of packets.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Disable DNS Resolution:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NCheckbox v-model:checked="disableDNS">
              -n
            </NCheckbox>
          </template>Prevent resolving IPs to hostnames.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Print Link-Level Header:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NCheckbox v-model:checked="printLinkLevelHeader">
              -e
            </NCheckbox>
          </template>Display link-layer headers in output.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Quick Print:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NCheckbox v-model:checked="quickPrint">
              -q
            </NCheckbox>
          </template>Show less verbose packet information.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Verbosity Level:">
        <NSelect v-model:value="verbosity" :options="verbosityLevels.map(v => ({ label: v.label, value: v.value }))" />
      </NFormItem>
      <NFormItem label="Time Format:">
        <NSelect v-model:value="timeFormat" :options="timeFormats.map(t => ({ label: t.label, value: t.value }))" />
      </NFormItem>
      <NFormItem label="Write to File:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="writeFile" placeholder="e.g., capture.pcap" />
          </template>Save captured packets to a file.
        </NTooltip>
      </NFormItem>
      <NFormItem label="Custom Expression:">
        <NTooltip trigger="hover">
          <template #trigger>
            <NInput v-model:value="expression" placeholder="e.g., src port 443 and dst 10.0.0.1" />
          </template>Advanced filters for packet selection.
        </NTooltip>
      </NFormItem>
    </NForm>
    <c-card title="Generated tcpdump command" mt-3>
      <textarea-copyable :value="tcpDumpCommand" />
    </c-card>
  </div>
</template>
