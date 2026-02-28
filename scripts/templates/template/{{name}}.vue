<template>
  <div class="template-page">
    <div class="template-content">
      <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
        <a class="download-btn" href="/templates/docx/{{name}}.docx" download>
          <n-icon size="16" :component="downloadIcon" />
          Download DOCX
        </a>

        <a class="download-btn" href="/templates/pdf/{{name}}.pdf" download>
          <n-icon size="16" :component="downloadIcon" />
          Download PDF
        </a>
      </div>

      <!-- Add template sections or preview here -->
      <div style="margin-top: 20px;">
        <p>Template preview and sections go here...</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw } from 'vue';
import { NIcon } from 'naive-ui';
import { Download } from '@vicons/tabler';

const downloadIcon = markRaw(Download);
</script>

<style scoped>
.template-page {
  max-width: 900px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  background: #18a058;
  color: #fff;
  font-weight: 600;
  transition: opacity 0.2s;
}

.download-btn:hover {
  opacity: 0.9;
}

.template-content {
  padding: 16px 0;
}
</style>
