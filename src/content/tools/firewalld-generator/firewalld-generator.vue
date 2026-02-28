<script setup lang="ts">

const zone = ref<string>('public');
const action = ref<string>('add');
const ruleType = ref<string>('service');
const value = ref<string>('http');
const permanent = ref<boolean>(true);

const ruleTypes = [
  { label: "Service", value: 'service' },
  { label: "Port", value: 'port' },
  { label: "Protocol", value: 'protocol' },
  { label: "Rich Rule", value: 'rich-rule' },
];

const actions = [
  { label: "Add", value: 'add' },
  { label: "Remove", value: 'remove' },
];

const command = computed(() => {
  let result = `firewall-cmd --zone=${zone.value} --${action.value}-${ruleType.value}=${value.value}`;
  if (permanent.value) {
    result += ' --permanent';
  }
  result += ' && firewall-cmd --reload';
  return result;
});
</script>

<template>
  <div>
    <NForm label-width="120px" label-placement="left">
      <NFormItem label="Zone:">
        <NSelect v-model:value="zone" :options="[{ label: 'Public', value: 'public' }, { label: 'Home', value: 'home' }, { label: 'Work', value: 'work' }]" />
      </NFormItem>

      <NFormItem label="Action:">
        <NSelect v-model:value="action" :options="actions" />
      </NFormItem>

      <NFormItem label="Rule Type:">
        <NSelect v-model:value="ruleType" :options="ruleTypes" />
      </NFormItem>

      <NFormItem label="Value:">
        <NInput v-model:value="value" placeholder="Enter the service/port/protocol" />
      </NFormItem>

      <NFormItem label="Permanent">
        <NCheckbox v-model:checked="permanent">
          Keep after reload
        </NCheckbox>
      </NFormItem>
    </NForm>

    <c-card title="Generated fw command:" mt-2>
      <textarea-copyable :value="command" />
    </c-card>
  </div>
</template>
