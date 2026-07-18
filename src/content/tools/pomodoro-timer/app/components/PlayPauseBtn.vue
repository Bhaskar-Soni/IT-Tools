<script setup>
import store from '../store/index.js';
</script>

<template>
  <div class="pp-btn-container">
    <button
      v-show="!store.state.isTimerRunning"
      class="pp-icon"
      type="button"
      aria-label="Start timer"
      @click="store.commit('toggleTimer')"
    >
      ▶
    </button>
    <button
      v-show="store.state.isTimerRunning"
      class="pp-icon"
      type="button"
      aria-label="Pause timer"
      @click="store.commit('toggleTimer')"
    >
      ⏸
    </button>
  </div>
</template>

<style scoped>
.pp-btn-container {
    display: inline;
    padding: 1.25rem 0rem 1.25rem 1.25rem;
    text-align: center;
}

.pp-icon {
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
    font-size: 3.25rem;
    line-height: 1;
    cursor: pointer;
    color: var(--pomodoro-app-accent-color);
    border-radius: 50%;
    background: transparent;
    border: none;
    padding: 0.25rem 0.5rem;
}

@media only screen and (max-width: 430px) {
    .pp-btn-container {
        display: block;
        padding: 1.25rem;
    }
}
</style>
