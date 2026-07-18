import { computed } from 'vue';

/**
 * Simple flex search composable that provides basic filtering/searching
 */
export function useFlexSearch({ search, data, options }: {
  search: any;
  data: any[];
  options?: {
    keys?: string[];
    filterEmpty?: boolean;
  };
}) {
  const searchResult = computed(() => {
    if (!search.value) {
      return data;
    }

    const query = search.value.toLowerCase();
    const keys = options?.keys || [];

    return data.filter(item => {
      if (keys.length === 0) {
        return JSON.stringify(item).toLowerCase().includes(query);
      }
      return keys.some(key => {
        const value = item[key];
        return value && String(value).toLowerCase().includes(query);
      });
    });
  });

  return {
    searchResult,
  };
}
