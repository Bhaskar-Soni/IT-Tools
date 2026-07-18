<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import type { HeadObject } from '@vueuse/head';

import CategoryLayout from './category.layout.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import type { Tool } from '@/core/tool.types';

const route = useRoute();

const head = computed<HeadObject>(() => ({
  title: `${route.meta.name} - IT-Tools`,
  meta: [
    {
      name: 'description',
      content: route.meta?.description as string,
    },
    {
      name: 'keywords',
      content: ((route.meta.keywords ?? []) as string[]).join(','),
    },
  ],
}));
useHead(head);

const toolTitle = computed<string>(() => String(route.meta.name));
const toolDescription = computed<string>(() => String(route.meta.description));
const isWide = computed(() => route.meta.layoutMode === 'wide');
</script>

<template>
  <CategoryLayout>
    <div class="tool-layout" :class="{ wide: isWide }">
      <div class="tool-header" :class="{ wide: isWide }">
        <div flex flex-nowrap items-center justify-between>
          <n-h1>
            {{ toolTitle }}
          </n-h1>

          <div>
            <FavoriteButton :tool="{ name: route.meta.name, path: route.path } as Tool" />
          </div>
        </div>

        <div class="separator" />

        <div class="description">
          {{ toolDescription }}
        </div>
      </div>
    </div>

    <div class="tool-content" :class="{ wide: isWide }">
      <slot />
    </div>
  </CategoryLayout>
</template>

<style lang="less" scoped>
.tool-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  ::v-deep(& > *) {
    flex: 0 1 600px;
  }

  &.wide {
    justify-content: flex-start;

    ::v-deep(& > *) {
      flex: 1 1 100%;
      max-width: 100%;
    }
  }
}

.tool-layout {
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  .tool-header {
    padding: 40px 0;
    width: 100%;
    text-align: center;

    .n-h1 {
      opacity: 0.9;
      font-size: 40px;
      font-weight: 400;
      margin: 0;
      line-height: 1;
    }

    .separator {
      width: 200px;
      height: 2px;
      background: rgb(161, 161, 161);
      opacity: 0.2;

      margin: 10px auto;
    }

    .description {
      margin: 0;

      opacity: 0.7;
    }
  }

  &.wide {
    max-width: none;
    margin: 0;

    .tool-header {
      text-align: left;

      .separator {
        margin: 10px 0;
      }
    }
  }
}
</style>


