<script setup lang="ts">

import { useQueryParam } from '@/composable/queryParams';

const domain = useQueryParam({ tool: 'whois-checker', name: 'domain', defaultValue: '' });

function launchWhois() {
  if (!domain.value.trim()) {
    return;
  }
  // Construct WHOIS URL
  const url = `https://www.iana.org/whois?q=${encodeURIComponent(domain.value)}`;
  window.open(url, '_blank');
}
</script>

<template>
  <div style="max-width: 600px">
    <c-input-text
      v-model:value="domain"
      label="Domain to check:"
      label-position="left"
      placeholder="Enter a domain (e.g. example.com)"
      mb-2
    />
    <n-space justify="center">
      <n-button type="primary" @click="launchWhois">
        Lookup WHOIS
      </n-button>
    </n-space>
  </div>
</template>
