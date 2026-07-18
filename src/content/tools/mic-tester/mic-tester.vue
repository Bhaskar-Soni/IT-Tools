<script setup lang="ts">

import { useMessage } from 'naive-ui';
import { useMicrophoneService } from './mic-tester.service';

const message = useMessage();
const { startMicReplay, stopMicReplay, loudnessLevel, isPlaying } = useMicrophoneService(message);
</script>

<template>
  <div>
    <c-card>
      <div class="control-buttons">
        <c-button :disabled="isPlaying" @click="startMicReplay">
          Start replaying microphone
        </c-button>
        <c-button :disabled="!isPlaying" @click="stopMicReplay">
          Stop replaying microphone
        </c-button>
      </div>

      <!-- Loudness Meter -->
      <div id="loudnessMeter">
        <div id="loudnessBar" :style="{ width: `${loudnessLevel}%` }" />
      </div>
    </c-card>
  </div>
</template>

<style scoped>
#loudnessMeter {
width: 100%;
height: 30px;
background-color: rgba(46, 51, 56, 0.05);
margin-top: 20px;
position: relative;
}
#loudnessBar {
height: 100%;
background: linear-gradient(48deg, rgba(37, 99, 108, 1) 0%, rgba(59, 149, 111, 1) 60%, rgba(20, 160, 88, 1) 100%);
}
.control-buttons {
display: flex;
gap: 10px;
margin-bottom: 20px;
justify-content: space-between;
}
</style>
