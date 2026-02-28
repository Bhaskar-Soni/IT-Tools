<script setup lang="ts">
import { ref, computed } from 'vue';
import EmailBounceParse from 'email-bounce-parser-browser';
import { NCard, NInput, NSpace, NText } from 'naive-ui';
import InputCopyable from '@/components/InputCopyable.vue';

const emailContent = ref('');

const parsedBounce = computed(() => {
  try {
    return { email: new EmailBounceParse().read(emailContent.value) };
  }
  catch (e: any) {
    return { parsingError: e.toString() };
  }
});
</script>

<template>
  <div>
    <n-card title="Input" size="small" mb-4>
      <n-input
        v-model:value="emailContent"
        type="textarea"
        placeholder="Put your email text content here"
        :rows="15"
        mb-4
      />
    </n-card>

    <n-card v-if="parsedBounce && emailContent" title="Output" size="small" mb-4>
      <n-space vertical>
        <n-text v-if="parsedBounce.email?.email?.error" type="success">
          ✓ This mail is a bounce email
        </n-text>
        <n-text v-if="!parsedBounce.email?.email?.error" type="error">
          ✗ This mail is not a bounce email
        </n-text>
        <div v-if="parsedBounce.parsingError">
          <n-text type="error">{{ parsedBounce.parsingError }}</n-text>
        </div>
        <input-copyable v-if="parsedBounce.email?.data?.recipient" label="Recipient" :value="parsedBounce.email?.data?.recipient" />
        <div v-if= 'parsedBounce.email?.email?.error'>
          <n-card title= 'Error Details' size= 'small'>
            <n-space vertical>
              <input-copyable v-if= 'parsedBounce.email?.data?.command' label= 'Command' :value="parsedBounce.email?.data?.command" />
              <input-copyable v-if="parsedBounce.email?.data?.error?.code?.basic || parsedBounce.email?.data?.error?.code?.enhanced" label="Code" :value="`${parsedBounce.email?.data?.error?.code?.basic}/${parsedBounce.email?.data?.error?.code?.enhanced}`" />
              <input-copyable v-if= 'parsedBounce.email?.data?.error?.label' label= 'Label' :value="parsedBounce.email?.data?.error?.label" />
              <input-copyable v-if="parsedBounce.email?.data?.error?.type" label="Type" :value="parsedBounce.email?.data?.error?.type" />
              <input-copyable v-if= 'parsedBounce.email?.data?.error?.temporary' label= 'Temporary' :value="parsedBounce.email?.data?.error?.temporary" />
              <input-copyable v-if="parsedBounce.email?.data?.error?.permanent" label="Permanent" :value="parsedBounce.email?.data?.error?.permanent" />
            </n-space>
          </n-card>
        </div>
      </n-space>
    </n-card>
  </div>
</template>
