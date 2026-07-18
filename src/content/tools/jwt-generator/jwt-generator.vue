<script setup lang="ts">

import * as jose from 'jose';
import { type KeyLike } from 'jose';
import JSON5 from 'json5';
import hexArray from 'hex-array';
import { Base64 } from 'js-base64';
import { type JwtPayload, jwtDecode } from 'jwt-decode';
import { getJwtAlgorithm } from '../jwt-parser/jwt-parser.service';
import { jwsAlgorithms } from './jwt-generator.constants';

import { useI18n } from 'vue-i18n';

import { useValidation } from '@/composable/validation';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const { t } = useI18n({ useScope: 'global' });

const payload = ref(`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`);

const alg = useQueryParamOrStorage({ name: 'alg', storageName: 'jwt-gen:alg', defaultValue: 'HS512' });
const algInfo = computed(() => jwsAlgorithms.find(a => a.alg === alg.value) || { alg: 'UNK', keyDesc: '', key: 'secret', verify: '' });
const isSecret = computed(() => algInfo.value.key === 'secret');

const inputToken = ref('');
const inputTokenError = ref('');
watch(inputToken, (value) => {
  inputTokenError.value = '';
  try {
    payload.value = JSON.stringify(jwtDecode<JwtPayload>(value), null, 2);
    alg.value = getJwtAlgorithm({ jwt: value }) || 'HS512';
  }
  catch (e: any) {
    inputTokenError.value = e.toString();
  }
});

const secret = ref('');
const secretEncoding = ref<'text' | 'base64' | 'hex'>('text');
const encodings = [
  { label: "Raw Text", value: 'text' },
  { label: "Hex Array", value: 'hex' },
  { label: 'Base64', value: 'base64' },
];

const publicKeyPEM = ref('');
const publicKeyJWK = ref('');
const privateKeyJWK = ref('');
const privateKeyPEM = ref('');

watch(publicKeyPEM, async (newValue) => {
  try {
    publicKeyJWK.value = JSON.stringify(await jose.exportJWK(await jose.importSPKI(newValue, alg.value, { extractable: true })), null, 2);
  }
  catch {
  }
}, { immediate: true });
watch(privateKeyPEM, async (newValue) => {
  try {
    privateKeyJWK.value = JSON.stringify(await jose.exportJWK(await jose.importPKCS8(newValue, alg.value, { extractable: true })), null, 2);
  }
  catch {
  }
}, { immediate: true });
watch(publicKeyJWK, async (newValue) => {
  try {
    publicKeyPEM.value = await jose.exportSPKI(await jose.importJWK({ ...JSON.parse(newValue), ...{ ext: true } }, alg.value) as KeyLike);
  }
  catch {
  }
}, { immediate: true });
watch(privateKeyJWK, async (newValue) => {
  try {
    privateKeyPEM.value = await jose.exportPKCS8(await jose.importJWK({ ...JSON.parse(newValue), ...{ ext: true } }, alg.value) as KeyLike);
  }
  catch {
  }
}, { immediate: true });

watchEffect(async () => {
  if (isSecret.value) {
    secret.value = 'your-secret';
    privateKeyJWK.value = '';
    publicKeyJWK.value = '';
    privateKeyPEM.value = '';
    publicKeyPEM.value = '';
  }
  else {
    const { publicKey, privateKey } = await jose.generateKeyPair(alg.value, { extractable: true });
    privateKeyJWK.value = JSON.stringify(await jose.exportJWK(privateKey), null, 2);
    publicKeyJWK.value = JSON.stringify(await jose.exportJWK(publicKey), null, 2);
    privateKeyPEM.value = await jose.exportPKCS8(privateKey);
    publicKeyPEM.value = await jose.exportSPKI(publicKey);
  }
});

const header = computed(() => JSON.stringify({ alg: alg.value, typ: 'JWT' }, null, 2));
const encodedJWT = computedAsync(async () => {
  const isSecretValue = isSecret.value;
  const secretValue = secret.value;
  const secretEncodingValue = secretEncoding.value;
  const privateKeyValue = privateKeyJWK.value;
  const algValue = alg.value;
  const payloadValue = payload.value;
  try {
    let privateKeyOrSecret;
    if (isSecretValue) {
      try {
        switch (secretEncodingValue) {
          case 'text':
            privateKeyOrSecret = new TextEncoder().encode(secretValue);
            break;
          case 'hex':
            privateKeyOrSecret = hexArray.fromString(secretValue);
            break;
          case 'base64':
            if (!Base64.isValid(secretValue)) {
              throw new Error("Invalid Base64 string");
            }
            privateKeyOrSecret = Base64.toUint8Array(secretValue);
            break;
        }
      }
      catch (parseError: any) {
        throw new Error(t('tools.jwt-generator.texts.cannot-parse-secret-as-encoding', [secretValue, secretEncodingValue, parseError]));
      }
    }
    else {
      privateKeyOrSecret = await jose.importJWK(JSON.parse(privateKeyValue), algValue);
    }
    return {
      token: await (new jose.SignJWT(JSON5.parse(payloadValue))
        .setProtectedHeader({ alg: algValue })
        .sign(privateKeyOrSecret)),
      error: '',
    };
  }
  catch (e: any) {
    return { error: e.toString(), token: '' };
  }
});

const showFullHeader = ref(false);
const showFullToken = ref(false);

const jsonInputValidation = useValidation({
  source: payload,
  rules: [
    {
      message: "Invalid JSON string",
      validator: value => JSON5.parse(value),
    },
  ],
});
</script>

<template>
  <div>
    <c-card mb-3>
      <details>
        <summary>
          Click to input a existing JWT token to modify
        </summary>
        <c-input-text
          v-model:value="inputToken"
          placeholder="Paste your JWT token to edit..."
        />
        <c-alert v-if="inputTokenError">
          {{ inputTokenError }}
        </c-alert>
      </details>
    </c-card>

    <c-select
      v-model:value="alg"
      :options="jwsAlgorithms.map(a => ({ value: a.alg, label: `${a.alg}: ${a.verify}` }))"
      placeholder="Algorithms"
      mb-2
    />
    <n-form-item label="Description:" label-placement="left" mb-2>
      {{ t('tools.jwt-generator.texts.verify-description', [algInfo.alg, algInfo.keyDesc, algInfo.verify]) }}
    </n-form-item>

    <c-card title="Token Content" mb-2>
      <n-form-item label="Header:">
        <div flex items-center justify-between>
          <div style="width: 100%">
            <textarea-copyable :value="header" language="json" :word-wrap="true" :max-length="showFullHeader ? 0 : 120" />
          </div>
          <div ml-2>
            <c-button size="small" @click="showFullHeader = !showFullHeader">
              {{ showFullHeader ? 'Show less' : 'Show full' }}
            </c-button>
          </div>
        </div>
      </n-form-item>

      <c-input-text
        v-model:value="payload"
        label="Payload:"
        multiline
        rows="5"
        autosize
        placeholder="JSON payload"
        :validation="jsonInputValidation"
      />
    </c-card>

    <c-card :title="isSecret ? 'Token Secret' : 'Token Keys'" mb-2>
      <div v-if="isSecret">
        <c-select
          v-model:value="secretEncoding"
          label-placement="left"
          label="Secret Encoding:"
          :options="encodings"
          mb-2
        />
        <c-input-text v-model:value="secret" />
      </div>
      <div v-else>
        <n-form-item label="Public Key (PEM):">
          <c-input-text
            v-model:value="publicKeyPEM"
            multiline
            rows="5"
            autosize
          />
        </n-form-item>
        <n-form-item label="Private Key (PEM):">
          <c-input-text
            v-model:value="privateKeyPEM"
            multiline
            rows="5"
            autosize
          />
        </n-form-item>

        <n-divider />

        <n-form-item label="Public Key (JWK):">
          <c-input-text
            v-model:value="publicKeyJWK"
            multiline
            rows="5"
            autosize
          />
        </n-form-item>
        <n-form-item label="Private Key (JWK):">
          <c-input-text
            v-model:value="privateKeyJWK"
            multiline
            rows="5"
            autosize
          />
        </n-form-item>
      </div>
    </c-card>

    <c-card v-if="encodedJWT" title="Generated JWT Token:" mb-2>
      <div v-if="encodedJWT.token" flex items-center justify-between>
        <div style="width: 100%">
          <textarea-copyable :value="encodedJWT.token" :word-wrap="true" :max-length="showFullToken ? 0 : 140" />
        </div>
        <div ml-2>
          <c-button size="small" @click="showFullToken = !showFullToken">
            {{ showFullToken ? 'Show less' : 'Show full' }}
          </c-button>
        </div>
      </div>
      <c-alert v-if="encodedJWT.error">
        {{ encodedJWT.error }}
      </c-alert>
    </c-card>
  </div>
</template>
