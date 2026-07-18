<script setup lang="ts">

import JSON5 from 'json5';
import { generateKeys, sign, verify } from 'paseto-ts/v4';
import { useValidation } from '@/composable/validation';

const payload = ref(`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": "${(new Date()).toISOString()}"
}`);
const footer = ref('{}');

const secretKey = ref('');
const publicKey = ref('');
const addExp = ref(true);
const addIat = ref(true);
const validatePayload = ref(true);

function generateKeyPairs() {
  const keys = generateKeys('public');
  secretKey.value = keys.secretKey;
  publicKey.value = keys.publicKey;
}
generateKeyPairs();

const signedToken = computedAsync(async () => {
  const secretKeyValue = secretKey.value;
  const payloadValue = payload.value;
  const addExpValue = addExp.value;
  const addIatValue = addIat.value;
  const footerValue = footer.value;
  const validatePayloadValue = validatePayload.value;
  try {
    const token = await sign(
      secretKeyValue,
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
const verifiedToken = computedAsync(async () => {
  const publicKeyValue = publicKey.value;
  const tokenValue = token.value;
  const validatePayloadValue = validatePayload.value;
  try {
    // generic type parameter is optional but will give you type safety on the payload
    const { payload, footer } = await verify<any>(
      publicKeyValue,
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
</script>

<template>
  <div class="tool-container">
    <c-card title="Key Pairs" mb-2>
      <c-input-text
        v-model:value="secretKey"
        label="Secret Key:"
        label-position="left"
        placeholder="PASERK secret key k4.secret.xxxx"
        mb-1
        readonly
      />
      <c-input-text
        v-model:value="publicKey"
        label="Public Key:"
        label-position="left"
        placeholder="PASERK public key k4.public.xxxx"
        mb-1
        readonly
      />
      <div class="refresh-btn">
        <n-button @click="generateKeyPairs()">Refresh Key</n-button>
      </div>
    </c-card>

    <c-card title="Signing" mb-2>
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
      />
    </c-card>

    <c-card title="Verifying" mb-2>
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
          <n-switch v-model:value="validatePayload" />
        </n-form-item>
      </n-space>

      <c-card v-if="verifiedToken" title="Verification result:" mb-2>
        <n-form-item v-if="verifiedToken.payload" label="Payload:">
          <textarea-copyable :value="JSON.stringify(verifiedToken.payload, null, 2)" word-wrap />
        </n-form-item>
        <n-form-item v-if="verifiedToken.footer" label="Footer:">
          <textarea-copyable :value="JSON.stringify(verifiedToken.footer, null, 2)" word-wrap />
        </n-form-item>
        <c-alert v-if="verifiedToken.error">
          {{ verifiedToken.error }}
        </c-alert>
      </c-card>
    </c-card>
    
    <c-card v-if="signedToken" title="Signed PASERK Token:" mb-2>
      <textarea-copyable v-if="signedToken.token" :value="signedToken.token" word-wrap />
      <c-alert v-if="signedToken.error">
        {{ signedToken.error }}
      </c-alert>
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
