<script setup lang="ts">
import { useToolStore } from '@/stores/tool.store';
import type { Tool } from '@/core/tool.types';

const props = defineProps<{ tool: Tool }>();

const toolStore = useToolStore();

const { tool } = toRefs(props);

const isFavorite = computed(() => toolStore.isToolFavorite({ tool }));

function toggleFavorite(event: MouseEvent) {
  event.preventDefault();

  if (toolStore.isToolFavorite({ tool })) {
    toolStore.removeToolFromFavorites({ tool });
    return;
  }

  toolStore.addToolToFavorites({ tool });
}
</script>

<template>
  <c-tooltip :tooltip="isFavorite ? 'Remove from favorites' : 'Add to favorites'">
    <div class="favorite-button-wrapper">
      <c-button
        class="favorite-button"
        :class="{ 'is-favorite': isFavorite }"
        variant="text"
        circle
        type="default"
        @click="toggleFavorite"
      >
        <span class="heart-icon" aria-hidden="true">♥</span>
      </c-button>
    </div>
  </c-tooltip>
</template>

<style scoped lang="less">
.favorite-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  :deep(.c-button) {
    &.circle {
      border-color: #3a3f47 !important;
      background: transparent !important;
      opacity: 1 !important;
      color: #9aa4b2 !important;
      width: 40px;
      height: 40px;
      min-width: 40px;
      min-height: 40px;
      outline: none !important;

      &:hover {
        border-color: #58a6ff !important;
        color: #58a6ff !important;
        background: rgba(88, 166, 255, 0.15) !important;
        outline: none !important;
      }

      &:focus,
      &:focus-visible,
      &:active {
        border-color: #58a6ff !important;
        outline: 2px solid #58a6ff !important;
        outline-offset: 2px !important;
      }
    }

    &.is-favorite.circle {
      border-color: #58a6ff !important;
      background: rgba(88, 166, 255, 0.25) !important;
      color: #58a6ff !important;
    }
  }

  .heart-icon {
    display: inline-block;
    font-size: 22px;
    font-weight: 800;
    line-height: 1;
  }
}
</style>
