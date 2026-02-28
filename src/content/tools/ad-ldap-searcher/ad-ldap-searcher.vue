<script setup lang="ts">
import { ref, onMounted } from 'vue';
import mappingData from './ad-mapping.json';
import { useFlexSearch } from '@/composable/flexSearch';
import { NTable, NInput } from 'naive-ui';
import InputCopyable from '@/components/InputCopyable.vue';

const data = mappingData;
const search = ref('');
const isLoaded = ref(false);

const { searchResult } = useFlexSearch({
  search,
  data,
  options: {
    keys: ['TAB', 'ActiveDirectoryField', 'LDAPAttribute'],
    filterEmpty: false,
  },
});

onMounted(() => {
  isLoaded.value = true;
});
</script>

<style scoped>
:deep(.blue-border-input .n-input__border) {
  border: 2px solid #4a7ba7 !important;
}

:deep(.blue-border-input.n-input) {
  border: 2px solid #4a7ba7 !important;
}
</style>

<template>
  <div v-if="isLoaded" mx-auto max-w-2400px important:flex-1 px-6>
    <div flex justify-center mb-6>
      <n-input
        v-model:value="search"
        type="text"
        placeholder="Search Active Directory / LDAP mapping"
        clearable
        size="large"
        w-full
        max-w-600px
        class="blue-border-input"
      />
    </div>

    <div>
      <div
        v-if="searchResult.length === 0"
        mt-4 text-center text-20px font-bold
      >
        No results found
      </div>

      <div v-else>
        <div mt-4 text-20px font-bold>
          Search Results ({{ searchResult.length }})
        </div>

        <n-table striped mt-4>
          <thead>
            <th>TAB</th>
            <th>Active Directory Field</th>
            <th>LDAP Attribute</th>
          </thead>
          <tbody>
            <tr v-for="(result, ix) in searchResult" :key="ix">
              <td>
                <input-copyable :value="result.TAB" />
              </td>
              <td>
                <input-copyable :value="result.ActiveDirectoryField" />
              </td>
              <td>
                <input-copyable :value="result.LDAPAttribute" />
              </td>
            </tr>
          </tbody>
        </n-table>
      </div>
    </div>
  </div>
</template>
