<script setup lang="ts">

import JSON5 from 'json5';
import { decrypt, encrypt, generateKeys } from 'paseto-ts/v4';
import { useValidation } from '@/composable/validation';

const payload = ref(`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": "${(new Date()).toISOString()}"
}`);
const footer = ref('{}');

const localKey = ref('');
const addExp = ref(true);
const addIat = ref(true);
const validatePayload = ref(true);

function generateLocalKey() {
  localKey.value = generateKeys('local');
}
generateLocalKey();

const encryptedToken = computedAsync(async () => {
  const localKeyValue = localKey.value;
  const payloadValue = payload.value;
  const addExpValue = addExp.value;
  const addIatValue = addIat.value;
  const footerValue = footer.value;
  const validatePayloadValue = validatePayload.value;
  try {
    const token = await encrypt(
      localKeyValue,
      payloadValue,
      {
        addExp: addExpValue,
        addIat: addIatValue,
        footer: footerValue,
        validatePayload: validatePayloadValue,
      },
    );
    return {
      token,
      error: '',
    };
  }
  catch (e: any) {
    return { error: e.toString(), token: '' };
  }
});

const jsonInputValidation = useValidation({
  source: payload,
  rules: [
    {
      message: "Invalid JSON string",
      validator: value => JSON5.parse(value),
    },
  ],
});
const jsonFooterValidation = useValidation({
  source: footer,
  rules: [
    {
      message: "Invalid JSON string",
      validator: value => JSON5.parse(value),
    },
  ],
});

const token = ref('');
const decryptedToken = computedAsync(async () => {
  const localKeyValue = localKey.value;
  const tokenValue = token.value;
  const validatePayloadValue = validatePayload.value;
  try {
    // generic type parameter is optional but will give you type safety on the payload
    const { payload, footer } = await decrypt<any>(
      localKeyValue,
      tokenValue,
      {
        validatePayload: validatePayloadValue,
      },
    );
    return {
      payload,
      footer,
      error: '',
    };
  }
  catch (e: any) {
    return { error: e.toString(), payload: '', footer: '' };
  }
});

// no truncation for local key; show as single-line input
</script>


<template>
  <div class="tool-container">
    <c-card title="Local Key" mb-2>
      <c-input-text
        v-model:value="localKey"
        label="Local Key:"
        placeholder="k4.local..."
        readonly
      />
      <div style="display:flex;justify-content:center;margin-top:10px;">
        <n-button @click="generateLocalKey()">Refresh Key</n-button>
      </div>
    </c-card>

    <c-card title="Encryption" mb-2>
      <c-input-text
        v-model:value="payload"
        label="Payload:"
        multiline
        rows="5"
        autosize
        placeholder="JSON payload"
        :validation="jsonInputValidation"
      />
      <n-space justify="center">
        <n-form-item label="Validate Payload" label-placement="left">
          <n-switch v-model:value="validatePayload" />
        </n-form-item>
        <n-form-item label="Add Exp" label-placement="left">
          <n-switch v-model:value="addExp" />
        </n-form-item>
        <n-form-item label="Add IAT" label-placement="left">
          <n-switch v-model:value="addIat" />
        </n-form-item>
      </n-space>

      <c-input-text
        v-model:value="footer"
        label="Footer:"
        multiline
        rows="2"
        autosize
        placeholder="JSON footer"
        :validation="jsonFooterValidation"
        mb-2
      />

    </c-card>

    <c-card v-if="encryptedToken" title="Generated PASERK Token:" mb-2>
      <textarea-copyable v-if="encryptedToken.token" :value="encryptedToken.token" word-wrap />
      <c-alert v-if="encryptedToken.error">
        {{ encryptedToken.error }}
      </c-alert>
    </c-card>
    <c-card title="Decryption" mb-2>
      <c-input-text
        v-model:value="token"
        label="Token:"
        multiline
        rows="5"
        autosize
        placeholder="PASERK token"
      />
      <n-space justify="center">
        <n-form-item label="Validate Payload" label-placement="left">
          <n-checkbox v-model:checked="validatePayload" />
        </n-form-item>
      </n-space>

      <c-card v-if="decryptedToken" title="Decoded PASERK:" mb-2>
        <n-form-item v-if="decryptedToken.payload" label="Payload:">
          <textarea-copyable :value="JSON.stringify(decryptedToken.payload, null, 2)" word-wrap />
        </n-form-item>
        <n-form-item v-if="decryptedToken.footer" label="Footer:">
          <textarea-copyable :value="JSON.stringify(decryptedToken.footer, null, 2)" word-wrap />
        </n-form-item>
        <c-alert v-if="decryptedToken.error">
          {{ decryptedToken.error }}
        </c-alert>
      </c-card>
    </c-card>
  </div>
</template>

<style scoped>
.tool-container {
  max-width: 980px;
  margin: 0 auto;
  padding: 12px 20px;
}
.tool-container c-card {
  margin-bottom: 14px;
}
.tool-container textarea,
.tool-container input,
.tool-container .n-input {
  font-size: 14px;
}
.tool-container textarea {
  max-height: 220px;
  overflow: auto;
}
.tool-container .refresh-btn {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}
</style>
