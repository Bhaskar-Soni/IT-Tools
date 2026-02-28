<script setup lang="ts">
import { computed, ref } from 'vue';
import { analyzeEmailHeaders } from './email-header-analyzer.service.ts';

const headers = ref('');

const analysis = computed(() => {
  if (!headers.value.trim()) return null;
  return analyzeEmailHeaders(headers.value);
});
</script>

<template>
  <div flex flex-col gap-3>

    <!-- INPUT -->
    <c-card>
      <div mb-2 font-medium>Email Headers:</div>
      <textarea
        v-model="headers"
        placeholder="Paste full email headers here"
        class="w-full min-h-40 p-3 rounded-lg
               bg-slate-800 border border-slate-700
               text-white placeholder:text-slate-400 text-sm"
      />
    </c-card>

    <!-- AUTH RESULTS -->
    <c-card v-if="analysis">
      <h3 mb-3 font-bold>Authentication Results</h3>

      <div grid grid-cols-3 gap-4>
        <div>
          <div op-70>SPF</div>
          <strong
            :class="analysis.spf === 'PASS' ? 'text-green-500' : 'text-red-500'"
          >
            {{ analysis.spf ?? 'Not found' }}
          </strong>
        </div>

        <div>
          <div op-70>DKIM</div>
          <strong
            :class="analysis.dkim === 'PASS' || analysis.dkim === 'PRESENT'
              ? 'text-green-500'
              : 'text-red-500'"
          >
            {{ analysis.dkim ?? 'Not found' }}
          </strong>
        </div>

        <div>
          <div op-70>DMARC</div>
          <strong
            :class="analysis.dmarc === 'PASS' ? 'text-green-500' : 'text-red-500'"
          >
            {{ analysis.dmarc ?? 'Not found' }}
          </strong>
        </div>
      </div>
    </c-card>

    <!-- ROUTE ANALYSIS -->
    <c-card v-if="analysis">
      <h3 mb-3 font-bold>Mail Routing Path</h3>

      <div v-if="analysis.routes.length">
        <ol pl-4 list-decimal space-y-2>
          <li
            v-for="(route, index) in analysis.routes"
            :key="index"
            class="text-sm break-words"
          >
            {{ route }}
          </li>
        </ol>
      </div>

      <div v-else op-60>
        No routing information found.
      </div>
    </c-card>

    <!-- NOTE -->
    <div op-60 text-sm>
      ⚠️ This analysis is based only on header content. No DNS or external checks are performed.
    </div>

  </div>
</template>

<style scoped>
textarea {
  resize: vertical;
}
</style>
