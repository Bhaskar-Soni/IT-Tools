<script setup lang="ts">

import { getSecretKey } from './django-secret-generator.service';
import { useCopy } from '@/composable/copy';
import { computedRefreshable } from '@/composable/computedRefreshable';

const [tokens, refreshTokens] = computedRefreshable(() =>
  getSecretKey(),
);

const { copy } = useCopy({ source: tokens, text: "Django secret key copied to clipboard" });
</script>

<template>
  <div>
    <c-card>
      <c-input-text
        v-model:value="tokens"
        label="Django secret key:"
        label-position="left"
        readonly
        class="token-display"
      />

      <div mt-5 flex justify-center gap-3>
        <c-button @click="copy()">
          Copy
        </c-button>
        <c-button @click="refreshTokens">
          Regenerate
        </c-button>
      </div>
    </c-card>
  </div>
</template>
