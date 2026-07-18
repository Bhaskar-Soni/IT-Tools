<template>
  <div class="script-container">
    <h2>{{ scriptTitle }}</h2>
    <p>{{ scriptDescription }}</p>

    <div class="script-actions">
      <button class="btn" @click="copyScript">
        <span class="icon">📋</span>
        Copy Script
      </button>
      <select v-model="selectedFormat" class="format-select">
        <option v-for="format in availableFormats" :key="format" :value="format">
          {{ formatLabels[format] }}
        </option>
      </select>
      <button class="btn" @click="downloadScript">
        <span class="icon">⬇️</span>
        Download {{ formatExtensions[selectedFormat] }}
      </button>
    </div>

    <pre class="code-block"><code>{{ currentScript }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const scriptTitle = 'Health Check';
const scriptDescription = 'Multi-format script for health-check';

const availableFormats = ["bash"];
const selectedFormat = ref(availableFormats[0]);

const formatLabels = {
  bash: 'Bash (.sh)',
  batch: 'Batch (.bat)',
  powershell: 'PowerShell (.ps1)',
  yaml: 'YAML (.yml)',
  python: 'Python (.py)',
};

const formatExtensions = {
  bash: '.sh',
  batch: '.bat',
  powershell: '.ps1',
  yaml: '.yml',
  python: '.py',
};

const scripts = {"bash":"#!/bin/bash\n# Health Check - Bash Script\n# Multi-format script for health-check\n\nset -euo pipefail\n\n# Color codes for output\nRED='\\033[0;31m'\nGREEN='\\033[0;32m'\nYELLOW='\\033[1;33m'\nNC='\\033[0m' # No Color\n\n# Functions\nlog_info() {\n  echo -e \"${GREEN}[INFO]${NC} $1\"\n}\n\nlog_warn() {\n  echo -e \"${YELLOW}[WARN]${NC} $1\"\n}\n\nlog_error() {\n  echo -e \"${RED}[ERROR]${NC} $1\"\n}\n\n# Main execution\nmain() {\n  log_info \"Starting health-check\"\n  \n  # Add your script logic here\n  log_info \"Script completed successfully\"\n}\n\n# Run main function\nmain \"$@\"\n"};

const currentScript = computed(() => scripts[selectedFormat.value]);

async function copyScript() {
  await navigator.clipboard.writeText(currentScript.value);
}

function downloadScript() {
  const ext = formatExtensions[selectedFormat.value];
  const filename = 'health-check' + ext;
  
  const mimeTypes = {
    bash: 'text/x-shellscript',
    batch: 'text/x-batch',
    powershell: 'text/x-powershell',
    yaml: 'text/yaml',
    python: 'text/x-python',
  };
  
  const blob = new Blob([currentScript.value], { type: mimeTypes[selectedFormat.value] });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  
  URL.revokeObjectURL(url);
}
</script>

<style scoped>
.script-container {
  max-width: 1000px;
}

.script-actions {
  display: flex;
  gap: 12px;
  margin: 16px 0;
  flex-wrap: wrap;
  align-items: center;
}

.btn {
  padding: 10px 16px;
  cursor: pointer;
  border: 1px solid #30363d;
  background: transparent;
  color: #c9d1d9;
  font-weight: 500;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.btn:hover {
  background: rgba(48, 54, 61, 0.5);
  border-color: #58a6ff;
  color: #58a6ff;
}

.btn:active {
  transform: scale(0.98);
}

.icon {
  font-size: 16px;
}

.format-select {
  padding: 10px 12px;
  border: 1px solid #30363d;
  background: #0d1117;
  color: #c9d1d9;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.format-select:hover {
  border-color: #58a6ff;
  background: #161b22;
}

.format-select:focus {
  outline: none;
  border-color: #58a6ff;
  box-shadow: 0 0 0 2px rgba(88, 166, 255, 0.2);
}

.code-block {
  margin-top: 16px;
  padding: 16px;
  background: #161b22;
  border: 1px solid #30363d;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  color: #c9d1d9;
  position: relative;
  border-radius: 4px;
}

.code-block:hover {
  border-color: #58a6ff;
}
</style>