<script lang="ts" setup>


import { computed, reactive } from 'vue';
import { NCard, NCheckbox, NCheckboxGroup, NForm, NFormItem, NInput, NRadio, NRadioGroup } from 'naive-ui';

const availableOptions = [
  { label: "Dry Run", value: '--dry-run', description: 'Simulates the sync without making changes' },
  { label: "Archive mode", value: '-a', description: 'Preserves permissions, timestamps, symbolic links, and metadata' },
  { label: "Compress", value: '-z', description: 'Compresses files during transfer to save bandwidth' },
  { label: "Show Progress", value: '--progress', description: 'Displays detailed progress information' },
  { label: "Partial", value: '--partial', description: 'Keeps partially transferred files in case of interruption' },
  { label: "Verbose", value: '-v', description: 'Outputs more information about the transfer process' },
  { label: "Human Readable", value: '-h', description: 'Formats output in a more readable way' },
  { label: "Recursive", value: '-r', description: 'Copies directories recursively' },
  { label: "Copy Symlinks", value: '-L', description: 'Follows symbolic links and copies the target files' },
  { label: "Remove Source", value: '--remove-source-files', description: 'Deletes source files after transfer' },
  { label: "Delete", value: '--delete', description: 'Removes files in destination that no longer exist in the source' },
  { label: "Update", value: '-u', description: 'Copies files only if the source is newer than the destination' },
];

const form = reactive({
  sourceType: 'local',
  source: '',
  sourceHost: '',
  sourceUser: '',
  destinationType: 'local',
  destination: '',
  destinationHost: '',
  destinationUser: '',
  options: [] as string[],
});

function formatRemotePath(user: string, host: string, path: string) {
  return host ? `${user ? `${user}@` : ''}${host}:${path}` : path;
}

const generatedCommand = computed(() => {
  const sourcePath = formatRemotePath(form.sourceUser, form.sourceHost, form.source);
  const destinationPath = formatRemotePath(form.destinationUser, form.destinationHost, form.destination);

  if (!sourcePath || !destinationPath) {
    return '';
  }

  return `rsync ${form.options.join(' ')} ${sourcePath} ${destinationPath}`;
});
</script>

<template>
  <NCard title="Rsync Command Generator">
    <NForm :model="form" label-placement="left">
      <NFormItem label="Source Type:">
        <NRadioGroup v-model:value="form.sourceType">
          <NRadio value="local">
            Local
          </NRadio>
          <NRadio value="remote">
            Remote
          </NRadio>
        </NRadioGroup>
      </NFormItem>
      <NFormItem label="Source:">
        <NInput v-model:value="form.source" placeholder="Enter source directory" />
      </NFormItem>
      <NFormItem v-if="form.sourceType === 'remote'" label="Source SSH Host:">
        <NInput v-model:value="form.sourceHost" placeholder="Enter SSH host" />
      </NFormItem>
      <NFormItem v-if="form.sourceType === 'remote'" label="Source SSH Username:">
        <NInput v-model:value="form.sourceUser" placeholder="Enter SSH username (optional)" />
      </NFormItem>

      <NFormItem label="Destination Type:">
        <NRadioGroup v-model:value="form.destinationType">
          <NRadio value="local">
            Local
          </NRadio>
          <NRadio value="remote">
            Remote
          </NRadio>
        </NRadioGroup>
      </NFormItem>
      <NFormItem label="Destination:">
        <NInput v-model:value="form.destination" placeholder="Enter destination directory" />
      </NFormItem>
      <NFormItem v-if="form.destinationType === 'remote'" label="Destination SSH Host:">
        <NInput v-model:value="form.destinationHost" placeholder="Enter SSH host" />
      </NFormItem>
      <NFormItem v-if="form.destinationType === 'remote'" label="Destination SSH Username:">
        <NInput v-model:value="form.destinationUser" placeholder="Enter SSH username (optional)" />
      </NFormItem>

      <NFormItem label="Options:">
        <NCheckboxGroup v-model:value="form.options">
          <NCheckbox v-for="option in availableOptions" :key="option.value" :value="option.value">
            {{ option.label }} <em>({{ option.description }})</em>
          </NCheckbox>
        </NCheckboxGroup>
      </NFormItem>
    </NForm>
    <c-card title="Generated rsync command" mt-5>
      <textarea-copyable :value="generatedCommand" />
    </c-card>
  </NCard>
</template>
