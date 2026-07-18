<script setup lang="ts">
import { createToken } from '../token-generator/token-generator.service';
import { useCopy } from '@/composable/copy';
import { useQueryParamOrStorage } from '@/composable/queryParams';
import { computedRefreshable } from '@/composable/computedRefreshable';

const count = useQueryParamOrStorage({ name: 'count', storageName: 'rnd-nums-gen:count', defaultValue: 1 });
const length = useQueryParamOrStorage({ name: 'length', storageName: 'rnd-nums-gen:length', defaultValue: 64 });
const toUpper = useQueryParamOrStorage({ name: 'uppercase', storageName: 'rnd-nums-gen:uppercase', defaultValue: false });
const deniedChars = useQueryParamOrStorage({ name: 'deny', storageName: 'rnd-nums-gen:deny', defaultValue: '' });
const numberMode = useQueryParamOrStorage<'hexa' | 'dec'>({ name: 'mode', storageName: 'rnd-nums-gen:mode', defaultValue: 'hexa' });

function transformCase(s: string) {
  return toUpper.value ? s.toUpperCase() : s.toLowerCase();
}

const [numbers, refreshnumbers] = computedRefreshable(() =>
  transformCase(Array.from({ length: count.value < 1 ? 1 : count.value },
    () => createToken({
      length: length.value,
      withUppercase: false,
      withLowercase: false,
      withNumbers: numberMode.value === 'dec',
      withHexaNumbers: numberMode.value === 'hexa',
      withSymbols: false,
      deniedChars: deniedChars.value,
    })).join('\n')),
);

const { copy } = useCopy({ source: numbers, text: "Numbers copied to clipboard!" });
</script>

<template>
  <div>
    <c-card>
      <n-form label-placement="left" label-width="140">
        <n-space justify="center">
          <n-form-item label-placement="left">
            <n-radio-group v-model:value="numberMode">
              <n-radio value="hexa">
                Hexadecimal
              </n-radio>
              <n-radio value="dec">
                Decimal
              </n-radio>
            </n-radio-group>
          </n-form-item>
          <n-form-item label="To uppercase digits">
            <n-switch v-model:value="toUpper" />
          </n-form-item>
        </n-space>
      </n-form>

      <n-form-item label="Denied characters:" label-placement="top">
        <c-input-text
          v-model:value="deniedChars"
          placeholder="Put denied characters here..."
        />
      </n-form-item>

      <n-form-item :label="`Length (${length})`" label-placement="left">
        <n-slider v-model:value="length" :step="1" :min="1" :max="512" mr-2 />
        <NInputNumber v-model:value="length" :min="1" :max="512" size="small" />
      </n-form-item>

      <n-form-item label="Number of number to generate:" label-placement="left">
        <n-slider v-model:value="count" :step="1" :min="1" mr-2 />
        <NInputNumber v-model:value="count" :min="1" size="small" />
      </n-form-item>

      <c-input-text
        v-model:value="numbers"
        multiline
        placeholder="Generated random numbers..."
        readonly
        rows="3"
        autosize
        class="number-display"
        word-wrap
      />

      <div mt-5 flex justify-center gap-3>
        <c-button @click="copy()">
          Copy
        </c-button>
        <c-button @click="refreshnumbers">
          Refresh
        </c-button>
      </div>
    </c-card>
  </div>
</template>

<style scoped lang="less">
::v-deep(.number-display) {
  textarea {
    text-align: center;
  }
}
</style>
