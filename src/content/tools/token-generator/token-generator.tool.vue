<script setup lang="ts">
import { createToken } from './token-generator.service';
import { useCopy } from '@/composable/copy';
import { useQueryParamOrStorage } from '@/composable/queryParams';
import { computedRefreshable } from '@/composable/computedRefreshable';

const count = useQueryParamOrStorage({ name: 'count', storageName: 'token-generator:count', defaultValue: 1 });
const length = useQueryParamOrStorage({ name: 'length', storageName: 'token-generator:length', defaultValue: 64 });
const withUppercase = useQueryParamOrStorage({ name: 'uppercase', storageName: 'token-generator:uppercase', defaultValue: true });
const withLowercase = useQueryParamOrStorage({ name: 'lowercase', storageName: 'token-generator:lowercase', defaultValue: true });
const withNumbers = useQueryParamOrStorage({ name: 'numbers', storageName: 'token-generator:numbers', defaultValue: true });
const withSymbols = useQueryParamOrStorage({ name: 'symbols', storageName: 'token-generator:symbols', defaultValue: false });
const deniedChars = useQueryParamOrStorage({ name: 'deny', storageName: 'token-generator:deny', defaultValue: '' });

const [tokens, refreshTokens] = computedRefreshable(() =>
  Array.from({ length: count.value < 1 ? 1 : count.value },
    () => createToken({
      length: length.value,
      withUppercase: withUppercase.value,
      withLowercase: withLowercase.value,
      withNumbers: withNumbers.value,
      withSymbols: withSymbols.value,
      deniedChars: deniedChars.value,
    })).join('\n'),
);

const { copy } = useCopy({ source: tokens, text: "Token copied to the clipboard" });
</script>

<template>
  <div>
    <c-card>
      <n-form label-placement="left" label-width="140">
        <n-space justify="center">
          <n-form-item label="Uppercase (ABC...)">
            <n-switch v-model:value="withUppercase" />
          </n-form-item>

          <n-form-item label="Lowercase (abc...)">
            <n-switch v-model:value="withLowercase" />
          </n-form-item>
          <n-form-item label="Numbers (123...)">
            <n-switch v-model:value="withNumbers" />
          </n-form-item>

          <n-form-item label="Symbols (!-;...)">
            <n-switch v-model:value="withSymbols" />
          </n-form-item>
        </n-space>
      </n-form>

      <n-form-item label="Denied Characters (ie, visually similar { oO01lI } or punctuations)" label-placement="top">
        <c-input-text
          v-model:value="deniedChars"
          placeholder="Put characters to deny from token"
        />
      </n-form-item>

      <n-form-item :label="`Length (${length})`" label-placement="left">
        <n-slider v-model:value="length" :step="1" :min="1" :max="512" mr-2 />
        <NInputNumber v-model:value="length" :min="1" :max="512" size="small" />
      </n-form-item>

      <n-form-item label="Number of token to generate" label-placement="left">
        <n-slider v-model:value="count" :step="1" :min="1" mr-2 />
        <NInputNumber v-model:value="count" :min="1" size="small" />
      </n-form-item>

      <c-input-text
        v-model:value="tokens"
        multiline
        placeholder="The token..."
        readonly
        rows="3"
        autosize
        class="token-display"
        word-wrap
      />

      <div mt-5 flex justify-center gap-3>
        <c-button @click="copy()">
          Copy
        </c-button>
        <c-button @click="refreshTokens">
          Refresh
        </c-button>
      </div>
    </c-card>
  </div>
</template>

<style scoped lang="less">
::v-deep(.token-display) {
  textarea {
    text-align: center;
  }
}
</style>
