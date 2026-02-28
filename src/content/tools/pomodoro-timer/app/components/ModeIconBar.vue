<script setup>
import { computed } from 'vue';
import store from '../store/index.js';

const progress = computed({
  get() {
    return store.state.progress.length;
  },
  set() {
    //
  },
});
</script>

<template>
  <div class="icon-bar-root">
    <div class="icons-container">
      <template v-for="(shortBreakIndex) in Array.from({ length: store.state.shortBreakCount }, (_, i) => i)" :key="shortBreakIndex">
        <span class="mode-icon" :class="{ active: progress === shortBreakIndex * 2 + 1, completed: progress > shortBreakIndex * 2 + 1 }">💻</span>
        <span class="mode-icon" :class="{ active: progress === shortBreakIndex * 2 + 2, completed: progress > shortBreakIndex * 2 + 2 }">☕</span>
      </template>
      <span class="mode-icon" :class="{ active: progress === store.state.shortBreakCount * 2 + 1, completed: progress > store.state.shortBreakCount * 2 + 1 }">💻</span>
      <span class="mode-icon" :class="{ active: progress === store.state.shortBreakCount * 2 + 2, completed: progress > store.state.shortBreakCount * 2 + 2 }">🚶</span>
    </div>
  </div>
</template>

<style scoped>
.icon-bar-root{
    width: 90%;
}
.icons-container {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1.875rem;
}
.mode-icon {
    line-height: 28px;
    padding: 0.1875rem 0.3125rem;
    margin: 0 0.3125rem;
    color: lightgray;
    font-size: 1.375rem;
    border-radius: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.active {
    color: var(--pomodoro-app-accent-color);
    box-shadow: orange 0 0 4px 5px;
}
.completed {
    color: var(--pomodoro-app-accent-color);
}
@media only screen and (min-width: 900px) {
    .mode-icon {
        line-height: 2.5rem;
        font-size: 2.125rem;
    }
}
</style>
