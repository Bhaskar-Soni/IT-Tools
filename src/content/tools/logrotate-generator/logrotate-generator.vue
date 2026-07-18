<script setup lang="ts">

import { useITStorage } from '@/composable/queryParams';

const config = useITStorage('logrotate:config', {
  path: '/var/log/apache2/*.log',
  rotateCount: 1,
  frequency: 'weekly',
  minSize: '10M',
  size: '10M',
  createFile: true,
  copy: false,
  copyTruncate: false,
  startNumber: 1,
  extension: '.log',
  dateExt: false,
  dateFormat: '-%Y%m%d',
  missingOk: true,
  compress: true,
  delayCompress: false,
  compressExt: '.gz',
  compressCmd: 'gzip',
  compressOptions: '-9',
  uncompressCmd: 'gunzip',
  oldDir: '/path/foo/',
  mail: '',
  mailFirst: false,
  mailLast: false,
  shred: false,
  shredCycles: 1,
  firstAction: '',
  preRotate: '',
  postRotate: '',
  lastAction: '',
});

const frequencyOptions = ['daily', 'weekly', 'monthly', 'yearly'];

const tooltips = {
  path: "Glob pattern for log files to rotate.",
  rotateCount: "Number of rotated log files to keep.",
  frequency: "How often to rotate logs.",
  minSize: "Minimum size before rotation is triggered.",
  size: "Maximum size before rotation is triggered.",
  createFile: "Create a new log file after rotation.",
  copy: "Copy the log file instead of moving.",
  copyTruncate: "Copy and truncate the original log file.",
  startNumber: "Starting number for rotated files.",
  extension: "File extension for rotated logs.",
  dateExt: "Append date to rotated log filenames.",
  dateFormat: "Format for the date extension.",
  missingOk: "Ignore missing log files.",
  compress: "Compress rotated logs.",
  delayCompress: "Delay compression until next rotation.",
  compressExt: "Extension for compressed files.",
  compressCmd: "Command used to compress files.",
  compressOptions: "Options passed to the compression command.",
  uncompressCmd: "Command used to uncompress files.",
  oldDir: "Directory to move old log files to.",
  mail: "Email address to send rotated logs to.",
  mailFirst: "Mail the first rotated file.",
  mailLast: "Mail the last rotated file.",
  shred: "Securely shred log files after rotation.",
  shredCycles: "Number of shred cycles.",
  firstAction: "Script to run before rotation begins.",
  preRotate: "Script to run before rotating each file.",
  postRotate: "Script to run after rotating each file.",
  lastAction: "Script to run after rotation ends.",
};

const generatedConfig = computed(() => {
  return `
${config.value.path} {
  rotate ${config.value.rotateCount}
  ${config.value.frequency}
  ${config.value.minSize ? `minsize ${config.value.minSize}` : ''}
  ${config.value.size ? `size ${config.value.size}` : ''}
  ${config.value.createFile ? 'create' : 'nocreate'}
  ${config.value.copy ? 'copy' : 'nocopy'}
  ${config.value.copyTruncate ? 'copytruncate' : 'nocopytruncate'}
  start ${config.value.startNumber}
  ${config.value.extension ? `extension ${config.value.extension}` : ''}
  ${config.value.dateExt ? 'dateext' : 'nodateext'}
  ${config.value.dateExt ? `dateformat ${config.value.dateFormat}` : ''}
  ${config.value.missingOk ? 'missingok' : 'nomissingok'}
  ${config.value.compress ? 'compress' : 'nocompress'}
  ${config.value.delayCompress ? 'delaycompress' : ''}
  ${config.value.compressExt ? `compressext ${config.value.compressExt}` : ''}
  ${config.value.compressCmd ? `compresscmd ${config.value.compressCmd}` : ''}
  ${config.value.compressOptions ? `compressoptions ${config.value.compressOptions}` : ''}
  ${config.value.uncompressCmd ? `uncompresscmd ${config.value.uncompressCmd}` : ''}
  ${config.value.oldDir ? `olddir ${config.value.oldDir}` : ''}
  ${config.value.mail ? `mail ${config.value.mail}` : ''}
  ${config.value.mailFirst ? 'mailfirst' : ''}
  ${config.value.mailLast ? 'maillast' : ''}
  ${config.value.shred ? 'shred' : 'noshred'}
  ${config.value.shredCycles ? `shredcycles ${config.value.shredCycles}` : ''}
  ${config.value.firstAction ? `firstaction\n${config.value.firstAction}\nendscript` : ''}
  ${config.value.preRotate ? `prerotate\n${config.value.preRotate}\nendscript` : ''}
  ${config.value.postRotate ? `postrotate\n${config.value.postRotate}\nendscript` : ''}
  ${config.value.lastAction ? `lastaction\n${config.value.lastAction}\nendscript` : ''}
}
  `.trim().replace(/^\s*\n/mg, '');
});
</script>

<template>
  <NForm label-placement="left" label-width="180px">
    <n-form-item label="Path:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.path" placeholder="Enter log path or pattern..." />
        </template>
        {{ tooltips.path }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Rotate Count:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <NInputNumber v-model:value="config.rotateCount" />
        </template>
        {{ tooltips.rotateCount }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Frequency:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-select v-model:value="config.frequency" :options="frequencyOptions.map(f => ({ label: f, value: f }))" />
        </template>
        {{ tooltips.frequency }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Min Size:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.minSize" placeholder="Enter min size and unit..." />
        </template>
        {{ tooltips.minSize }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Size:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.size" placeholder="Enter size and unit..." />
        </template>
        {{ tooltips.size }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Create File:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.createFile" />
        </template>
        {{ tooltips.createFile }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Copy:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.copy" />
        </template>
        {{ tooltips.copy }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Copy Truncate:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.copyTruncate" />
        </template>
        {{ tooltips.copyTruncate }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Start Number:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <NInputNumber v-model:value="config.startNumber" />
        </template>
        {{ tooltips.startNumber }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Extension:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.extension" placeholder="Enter extension..." />
        </template>
        {{ tooltips.extension }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Date Ext:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.dateExt" />
        </template>
        {{ tooltips.dateExt }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Date Format:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.dateFormat" placeholder="Enter date format..." />
        </template>
        {{ tooltips.dateFormat }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Missing OK:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.missingOk" />
        </template>
        {{ tooltips.missingOk }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Compress:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.compress" />
        </template>
        {{ tooltips.compress }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Delay Compress:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.delayCompress" />
        </template>
        {{ tooltips.delayCompress }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Compress Ext:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.compressExt" placeholder="Enter compression extension..." />
        </template>
        {{ tooltips.compressExt }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Compress Cmd:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.compressCmd" placeholder="Enter command..." />
        </template>
        {{ tooltips.compressCmd }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Compress Options:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.compressOptions" placeholder="Enter compression options..." />
        </template>
        {{ tooltips.compressOptions }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Uncompress Cmd:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.uncompressCmd" placeholder="Enter command..." />
        </template>
        {{ tooltips.uncompressCmd }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Old Dir:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.oldDir" placeholder="Enter old directory..." />
        </template>
        {{ tooltips.oldDir }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Mail:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.mail" placeholder="Enter email..." />
        </template>
        {{ tooltips.mail }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Mail First:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.mailFirst" />
        </template>
        {{ tooltips.mailFirst }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Mail Last:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.mailLast" />
        </template>
        {{ tooltips.mailLast }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Shred:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-switch v-model:value="config.shred" />
        </template>
        {{ tooltips.shred }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Shred Cycles:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <NInputNumber v-model:value="config.shredCycles" />
        </template>
        {{ tooltips.shredCycles }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="First Action:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.firstAction" placeholder="Enter command..." />
        </template>
        {{ tooltips.firstAction }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Pre Rotate:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.preRotate" placeholder="Enter command..." />
        </template>
        {{ tooltips.preRotate }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Post Rotate:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.postRotate" placeholder="Enter command..." />
        </template>
        {{ tooltips.postRotate }}
      </n-tooltip>
    </n-form-item>

    <n-form-item label="Last Action:">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-input v-model:value="config.lastAction" placeholder="Enter command..." />
        </template>
        {{ tooltips.lastAction }}
      </n-tooltip>
    </n-form-item>

    <NDivider />

    <NCard title="Generated Config">
      <textarea-copyable :value="generatedConfig" />
    </NCard>
  </NForm>
</template>
