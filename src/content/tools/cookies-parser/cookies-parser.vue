<script lang="ts" setup>
import { useQueryParam } from '@/composable/queryParams';

const cookieHeader = useQueryParam({ tool: 'cookies-parser', name: 'cookies', defaultValue: '' });

const parsedCookies = computed(() => {
  return (cookieHeader.value || '').replace(/^Cookie:\s*/, '').split('; ').map((cookie) => {
    const [name, ...values] = cookie.split('=');
    return { name, value: decodeURIComponent(values?.join('=') || '') };
  });
});
</script>

<template>
  <n-card title="Cookies Parser">
    <n-space vertical>
      <n-input v-model:value="cookieHeader" placeholder="Enter cookie header" type="text" />
    </n-space>
    <n-p>
      Tip: Navigate to a website to test, open F12 Console and run <n-tag :bordered="false">
        <code>window.copy(document.cookie)</code>
      </n-tag> This will copy the cookie string to your clipboard. Note: This will only copy cookies available to javascript (HTTP only and secure cookies will be omitted)
    </n-p>
    <n-table v-if="parsedCookies.length">
      <thead><tr><th>Name</th><th>Value</th></tr></thead>
      <tbody>
        <tr v-for="cookie in parsedCookies" :key="cookie.name">
          <td>
            <n-a :href="`https://cookiedatabase.org/?s=${cookie.name}`" target="_blank">
              {{ cookie.name }}
            </n-a>
          </td>
          <td>{{ cookie.value }}</td>
        </tr>
      </tbody>
    </n-table>
    <n-alert v-else type="warning">
      No cookies found
    </n-alert>
  </n-card>
</template>
