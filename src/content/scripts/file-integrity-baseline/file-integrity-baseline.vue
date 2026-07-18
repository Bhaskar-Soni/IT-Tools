<template>
  <div class="script-page">
    <h2>File Integrity Baseline</h2>
    <p>Create and verify cryptographic checksums to detect file tampering or drift.</p>

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

# file-integrity-baseline.sh

MODE=""
TARGET_DIR=""
BASELINE_FILE=""

usage() {
  echo "Usage: $0 --mode baseline --target /etc --baseline /opt/baselines/etc.sha256"
  echo "   or: $0 --mode verify --target /etc --baseline /opt/baselines/etc.sha256"
}

while [ $# -gt 0 ]; do
  case "$1" in
    --mode) MODE="$2"; shift 2 ;;
    --target) TARGET_DIR="$2"; shift 2 ;;
    --baseline) BASELINE_FILE="$2"; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown arg: $1"; usage; exit 1 ;;
  esac
done

if [ -z "$MODE" ] || [ -z "$TARGET_DIR" ] || [ -z "$BASELINE_FILE" ]; then
  usage
  exit 1
fi

if [ "$MODE" = "baseline" ]; then
  mkdir -p "$(dirname "$BASELINE_FILE")"
  find "$TARGET_DIR" -type f -print0 | sort -z | xargs -0 sha256sum > "$BASELINE_FILE"
  echo "[INFO] Baseline created: $BASELINE_FILE"
elif [ "$MODE" = "verify" ]; then
  if [ ! -f "$BASELINE_FILE" ]; then
    echo "[ERROR] Baseline file not found"
    exit 1
  fi
  output="$(sha256sum -c "$BASELINE_FILE" 2>&1 || true)"
  printf '%s\n' "$output"
  if printf '%s\n' "$output" | grep -E 'FAILED|No such file' >/dev/null 2>&1; then
    echo "[ALERT] Integrity check failed"
    exit 1
  fi
  echo "[OK] Integrity check passed"
else
  usage
  exit 1
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
  a.download = `file-integrity-baseline${scriptFormat}`;
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
