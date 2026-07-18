<script setup lang="ts">
import { IconBrandGithub, IconBrandLinkedin, IconInfoCircle } from '@tabler/icons-vue';
import { markRaw } from 'vue';
import { useRouter } from 'vue-router';

// Mark icons as raw to prevent Vue reactivity checks
const githubIcon = markRaw(IconBrandGithub);
const linkedinIcon = markRaw(IconBrandLinkedin);
const infoIcon = markRaw(IconInfoCircle);
const router = useRouter();

function goToAbout() {
  router.push('/about');
}
</script>

<template>
  <c-tooltip :tooltip="'GitHub repository'" position="bottom">
    <c-button
      circle
      variant="text"
      href="https://github.com/Bhaskar-Soni"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="'IT-Tools GitHub repository'"
    >
      <n-icon size="25" :component="githubIcon" />
    </c-button>
  </c-tooltip>

  <c-tooltip :tooltip="'X account'" position="bottom">
    <c-button
      circle
      variant="text"
      href="https://linkedin.com/in/sonibhaskar"
      rel="noopener"
      target="_blank"
      :aria-label="'IT-Tools X account'"
    >
      <n-icon size="25" :component="linkedinIcon" />
    </c-button>
  </c-tooltip>

  <c-tooltip :tooltip="'About IT-Tools'" position="bottom">
    <c-button circle variant="text" :aria-label="'About'" @click="goToAbout">
      <n-icon size="25" :component="infoIcon" />
    </c-button>
  </c-tooltip>
</template>

<style lang="less" scoped>
:deep(.c-button) {
  &:not(:last-child) {
    margin-right: 5px;
  }

  &:nth-child(1),
  &:nth-child(2) {
    color: #ffffff !important;

    &:hover {
      background-color: rgba(59, 130, 246, 0.3) !important;
    }

    &:active {
      background-color: rgba(59, 130, 246, 0.5) !important;
      border: 2px solid #3b82f6 !important;
    }

    &:focus {
      background-color: transparent !important;
      border: none !important;
      outline: none !important;
    }
  }
}
</style>


