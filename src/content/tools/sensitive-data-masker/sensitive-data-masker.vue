<script setup lang="ts">

import { type MatcherNames, maskSensitiveData } from './sensitive-data-masker.service';
import { withDefaultOnError } from '@/utils/defaults';
import { useITStorage } from '@/composable/queryParams';

const defaultValue = `{
  email: 'john.doe@example.com',
  creditCard: '1234 5678 9000 9876',
  id: '3f8a43fd-6489-4ec7-bd55-7a1ba172d77b',
  name: 'John',
  surname: 'Doe',
  phone: '+358 40 1234567',
  url: 'truc.google.com',
  ip4: '83.24.45.56',
  ip6: '2001:db8:0:85a3:0:0:ac1f:8001',
  mac: '3D:F2:C9:A6:B3:4F',
  token: 'eyJhbGciOiJIUzI1NiJ9.ew0KICAic3ViIjogIjEyMzQ1Njc4OTAiLA0KICAibmFtZSI6ICJBbGV4IEtvemxvdiIsDQogICJpYXQiOiAxNTE2MjM5MDIyDQp9.PNKysYFTCenU5bekHCmwIxCUXoYG41H_xc3uN3ZF_b8',
}`;

const customRegex = useITStorage('sensitive-data:regex', '');
const excludedMatchers = useITStorage('sensitive-data:exclude', [] as string[]);
const allMatchers = [
  'uuid', 'creditCard', 'ssn', 'url', 'ipv4', 'email',
  'passwordInUri', 'mac', 'ipv6', 'urlWithOrWithoutPrefix',
  'jwt', 'phone'];

function transformer(value: string) {
  return withDefaultOnError(() => maskSensitiveData({
    value,
    customRegex: customRegex.value,
    excludedMatchers: excludedMatchers.value as MatcherNames[],
  }), '');
}
</script>



<template>
  <div class="sd-masker-container">
    <div class="sd-masker-section">
      <c-input-text
        v-model:value="customRegex"
        label="Your custom cleaning regex(es) (case insensitive):"
        placeholder="Your custom cleaning regex(es)"
        raw-text
        multiline
        rows="4"
        mb-2
      />
    </div>
    <div class="sd-masker-section">
      <n-select
        v-model:value="excludedMatchers"
        placeholder="No Fallback"
        multiple
        :fallback-option="false"
        :options="allMatchers.map(v => ({ label: v, value: v }))"
        mb-2
      />
    </div>
    <div class="sd-masker-section">
      <format-transformer
        input-label="Your log/textual data:"
        :input-default="defaultValue"
        input-placeholder="Paste your log/textual data here..."
        output-label="Cleaned version:"
        :transformer="transformer"
      />
    </div>
  </div>
</template>

<style scoped>
.sd-masker-container {
  max-width: 700px;
  margin: 32px auto;
  padding: 24px;
  background: var(--background, #23272e);
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
}
.sd-masker-section {
  margin-bottom: 24px;
}
@media (max-width: 800px) {
  .sd-masker-container {
    padding: 8px;
    max-width: 98vw;
  }
}
</style>

