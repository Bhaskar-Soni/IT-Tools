import { useDark, useMediaQuery, useStorage, useToggle } from '@vueuse/core';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useStyleStore = defineStore('style', {
  state: () => {
    const isDarkTheme = useDark();
    const toggleDark = useToggle(isDarkTheme);
    const isSmallScreen = useMediaQuery('(max-width: 700px)');
    const isMenuCollapsed = useStorage('isMenuCollapsed', false);
    const expandedCategories = useStorage('expandedCategories', [] as string[], undefined, {
      deep: true,
      serializer: {
        read: (v: string) => v ? JSON.parse(v) : [],
        write: (v: string[]) => JSON.stringify(v),
      },
    });

    // Auto-collapse menu on small screens
    watch(isSmallScreen, (newVal) => {
      if (newVal) {
        isMenuCollapsed.value = true;
      }
    }, { immediate: true });

    return {
      isDarkTheme,
      toggleDark,
      isMenuCollapsed,
      isSmallScreen,
      expandedCategories,
    };
  },
});
