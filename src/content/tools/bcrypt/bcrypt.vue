<script setup lang="ts">
import { useCssVars } from 'vue';
import { useI18n } from 'vue-i18n';
import { useThemeVars } from 'naive-ui';
import { type BcryptFn, bcryptWithProgressUpdates } from './bcrypt.models';
import { useCopy } from '@/composable/copy';

const { t, locale } = useI18n();

// Lazy-load bcryptjs to avoid pulling Node's `crypto` into the client bundle
let bcryptModule: any = null;
async function ensureBcrypt() {
  if (bcryptModule) return bcryptModule;
  bcryptModule = await import('bcryptjs');
  return bcryptModule;
}

const themeVars = useThemeVars();

/* 👇 expose needed theme colors as CSS vars */
useCssVars(() => ({
  '--bcrypt-error-color': themeVars.value.errorColor,
  '--bcrypt-success-color': themeVars.value.successColor,
}));

interface ExecutionState<T> {
  result: T | null
  percentage: number
  error: string | null
  timeTakenMs: number | null
}

const blankState = () => ({
  result: null,
  percentage: 0,
  error: null,
  timeTakenMs: null,
});

async function exec<Param, Result>(
  fn: BcryptFn<Param, Result>,
  args: [string | null, Param | null],
  signal: AbortSignal,
  state: ExecutionState<Result>,
) {
  const [arg0, arg1] = args;
  if (arg0 == null || arg1 == null) return;

  for await (const update of bcryptWithProgressUpdates(
    fn,
    [arg0, arg1],
    { signal, timeoutMs: 10_000 },
  )) {
    switch (update.kind) {
      case 'progress':
        state.percentage = Math.round(update.progress * 100);
        break;
      case 'success':
        state.result = update.value;
        state.timeTakenMs = update.timeTakenMs;
        break;
      case 'error':
        state.error = update.message;
        break;
    }
  }
}

function initWatcher<Param, Result>(
  fnName: 'hash' | 'compare',
  inputs: [Ref<string | null>, Ref<Param | null>],
  state: Ref<ExecutionState<Result>>,
) {
  let controller = new AbortController();
  watch(inputs, async (inputs) => {
    controller.abort();
    controller = new AbortController();
    state.value = blankState();
    try {
      const mod = await ensureBcrypt();
      const fn = fnName === 'hash' ? (mod.hash as any) : (mod.compare as any);
      await exec(fn, inputs as any, controller.signal, state.value as any);
    } catch (e: any) {
      state.value.error = e?.toString?.() ?? String(e);
    }
  });
}

const hashState = ref<ExecutionState<string>>(blankState());
const input = ref('');
const saltCount = ref(10);
initWatcher('hash', [input, saltCount], hashState);

const source = computed(() => hashState.value.result ?? '');
const { copy } = useCopy({ source, text: 'Hashed string copied to the clipboard' });

const compareState = ref<ExecutionState<boolean>>(blankState());
const compareString = ref('');
const compareHash = ref('');
initWatcher('compare', [compareString, compareHash], compareState);
</script>

<template>
  <div>
    <c-card title="Hash" mt-4>
      <NForm label-width="140" label-placement="left">
        <NFormItem label="Your string:">
          <c-input-text v-model:value="input" placeholder="Enter string to hash" raw-text />
        </NFormItem>

        <NFormItem label="Salt count:">
          <NInputNumber v-model:value="saltCount" :min="1" style="width: 120px" />
        </NFormItem>
      </NForm>

      <div class="hash-progress-wrap" v-if="hashState.percentage >= 0">
        <div class="hash-progress-bar" :style="{ width: Math.max(2, hashState.percentage) + '%' }"></div>
      </div>

      <div class="hash-result-box" v-if="source">
        <textarea-copyable :value="source" readonly />
        <div class="hash-time">Hashed in {{ hashState.timeTakenMs ?? 0 }} milliseconds</div>
        <div class="hash-copy">
          <c-button @click="copy()">Copy hash</c-button>
        </div>
      </div>
    </c-card>

    <c-card title="Compare" mt-4>
      <c-input-text v-model:value="compareString" label="String to compare" raw-text />
      <c-input-text v-model:value="compareHash" label="Hash to compare" raw-text />

      <n-divider />

      <div class="compare-result-box">
        <div class="compare-progress" v-if="compareState.percentage > 0">
          <div class="compare-progress-bar" :style="{ width: compareState.percentage + '%' }" />
        </div>
        <div class="compare-message" :class="compareState.result === true ? 'positive' : compareState.result === false ? 'negative' : ''">
          {{ compareState.result === true ? 'Matched' : compareState.result === false ? 'Not matched' : (compareState.error || '') }}
        </div>
        <div class="compare-time" v-if="compareState.timeTakenMs">
          Compared in {{ compareState.timeTakenMs }} milliseconds
        </div>
      </div>
    </c-card>
  </div>
</template>

<style lang="less">
.compare-result {
  &.negative {
    input#bcrypt-compare-result {
      color: var(--bcrypt-error-color);
    }
  }
  &.positive {
    input#bcrypt-compare-result {
      color: var(--bcrypt-success-color);
    }
  }
}

.compare-result-box {
  margin-top: 12px;
}
.compare-progress {
  background: rgba(255,255,255,0.04);
  border-radius: 6px;
  height: 12px;
  overflow: hidden;
  margin-bottom: 8px;
}
.compare-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #66d9ff, #3fb0ff);
  transition: width 160ms linear;
}
.compare-message {
  padding: 12px;
  background: rgba(255,255,255,0.03);
  border-radius: 6px;
  color: #cfcfcf;
}
.compare-message.positive {
  color: var(--bcrypt-success-color);
}
.compare-message.negative {
  color: var(--bcrypt-error-color);
}
.compare-time {
  margin-top: 8px;
  color: rgba(255,255,255,0.6);
  font-size: 13px;
}

.hash-progress-wrap {
  margin-top: 16px;
  height: 14px;
  background: rgba(255,255,255,0.03);
  border-radius: 8px;
  overflow: hidden;
}
.hash-progress-bar {
  height: 100%;
  background: linear-gradient(90deg,#66d9ff,#3fb0ff);
  border-radius: 8px;
  transition: width 160ms linear;
}
.hash-result-box {
  margin-top: 12px;
}
.hash-time {
  margin-top: 8px;
  color: rgba(255,255,255,0.6);
}
.hash-copy {
  margin-top: 12px;
  display: flex;
  justify-content: center;
}
</style>

