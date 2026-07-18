<script setup>
import store from '../store/index.js';
</script>

<template>
  <n-modal v-model:show="store.state.isShowFinishedPopup" :mask-closable="false">
    <n-card
      style="width: 600px"
      title="Timer finished"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <p>{{ store.state.finishedMessage }}</p>
      <template #footer>
        <n-button @click="store.commit('prepareNextTimerMode')">
          OK
        </n-button>
      </template>
    </n-card>
  </n-modal>
</template>
