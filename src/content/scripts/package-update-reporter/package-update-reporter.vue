<template>
  <div class="script-page">
    <h2>Package Update Reporter</h2>
    <p>Generate an actionable update report from the host package manager.</p>

    <div class="script-actions">
      <button class="btn" @click="copyScript">
        <n-icon size="16" :component="copyIcon" />
        Copy Script
      </button>
      <button class="btn" @click="downloadScript">
        <n-icon size="16" :component="downloadIcon" />
        Download {{ scriptFormat }}
      </button>
    </div>

    <pre class="code-block"><code>{{ script }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue';
import { NIcon } from 'naive-ui';
import { Copy, Download } from '@vicons/tabler';

const copyIcon = markRaw(Copy);
const downloadIcon = markRaw(Download);

const formatExtensions: Record<string, string> = {
  sh: '.sh',
};

const format = 'sh';
const scriptFormat = formatExtensions[format] || '.sh';

const script = ref(`#!/usr/bin/env bash
set -euo pipefail

# package-update-reporter.sh

OUTPUT_FILE=""

usage() {
  echo "Usage: $0 [--output report.txt]"
}

while [ $# -gt 0 ]; do
  case "$1" in
    --output) OUTPUT_FILE="$2"; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown arg: $1"; usage; exit 1 ;;
  esac
done

manager=""
count=0
details=""

if command -v apt >/dev/null 2>&1; then
  manager="apt"
  details="$(apt list --upgradable 2>/dev/null | tail -n +2 || true)"
  count="$(printf '%s\n' "$details" | sed '/^$/d' | wc -l | tr -d ' ')"
elif command -v dnf >/dev/null 2>&1; then
  manager="dnf"
  details="$(dnf check-update -q 2>/dev/null || true)"
  count="$(printf '%s\n' "$details" | awk 'NF>1 && $1 !~ /^Last|^Obsoleting|^Security/' | wc -l | tr -d ' ')"
elif command -v yum >/dev/null 2>&1; then
  manager="yum"
  details="$(yum check-update -q 2>/dev/null || true)"
  count="$(printf '%s\n' "$details" | awk 'NF>1 && $1 !~ /^Loaded|^Obsoleting/' | wc -l | tr -d ' ')"
elif command -v pacman >/dev/null 2>&1; then
  manager="pacman"
  details="$(pacman -Qu 2>/dev/null || true)"
  count="$(printf '%s\n' "$details" | sed '/^$/d' | wc -l | tr -d ' ')"
else
  echo "[ERROR] No supported package manager found"
  exit 1
fi

report="Update Report\nHost: $(hostname)\nManager: $manager\nPending Updates: $count\n\n$details"

printf '%b\n' "$report"
if [ -n "$OUTPUT_FILE" ]; then
  printf '%b\n' "$report" > "$OUTPUT_FILE"
  echo "[INFO] Report written to $OUTPUT_FILE"
fi
`);

async function copyScript() {
  try {
    await navigator.clipboard.writeText(script.value);
    console.log('Script copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy script:', err);
  }
}

function downloadScript() {
  const mimeTypes: Record<string, string> = {
    sh: 'text/x-shellscript',
  };
  
  const mime = mimeTypes[format] || 'text/plain';
  const blob = new Blob([script.value], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `package-update-reporter${scriptFormat}`;
  a.click();

  URL.revokeObjectURL(url);
}
</script>

<style scoped>
.script-page {
  max-width: 900px;
}

.script-page h2 {
  color: #c9d1d9;
  margin-bottom: 8px;
}

.script-page p {
  color: #8b949e;
  margin-bottom: 20px;
}

.script-actions {
  display: flex;
  gap: 0;
  margin: 14px 0;
  flex-wrap: wrap;
  align-items: stretch;
}

.script-actions > * {
  border-radius: 0;
}
.script-actions > *:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.script-actions > *:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.btn {
  height: 40px;
  border-radius: 0;
  margin: 0;
}

.btn {
  padding: 10px 20px;
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
}

.btn:hover {
  background: rgba(48, 54, 61, 0.5);
  border-color: #58a6ff;
  color: #58a6ff;
}

.btn:active {
  transform: scale(0.98);
}

.code-block {
  margin-top: 12px;
  padding: 16px;
  background: #161b22;
  border: 1px solid #30363d;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.6;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  color: #c9d1d9;
  position: relative;
}

.code-block::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  width: 12px;
  height: 12px;
  border-top: 2px solid #30363d;
  border-left: 2px solid #30363d;
  transition: border-color 0.3s ease;
}

.code-block::after {
  content: '';
  position: absolute;
  top: -1px;
  right: -1px;
  width: 12px;
  height: 12px;
  border-top: 2px solid #30363d;
  border-right: 2px solid #30363d;
  transition: border-color 0.3s ease;
}

.code-block:hover::before,
.code-block:hover::after {
  border-color: #58a6ff;
}
</style>
