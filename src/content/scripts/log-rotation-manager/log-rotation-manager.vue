<template>
  <div class="script-page">
    <h2>Log Rotation Manager</h2>
    <p>Rotate, compress, and prune application logs with predictable retention.</p>

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

# log-rotation-manager.sh
# Rotate all *.log files in a directory when they exceed a size threshold.
# It also compresses rotated files and removes old archives.
#
# Usage:
#   ./log-rotation-manager.sh --log-dir /var/log/myapp --max-size-mb 100 --retention-days 14 [--dry-run]

LOG_DIR="/var/log/myapp"
MAX_SIZE_MB=100
RETENTION_DAYS=14
DRY_RUN=false

usage() {
  echo "Usage: $0 --log-dir <dir> --max-size-mb <mb> --retention-days <days> [--dry-run]"
}

run_cmd() {
  if [[ "$DRY_RUN" == "true" ]]; then
    printf '[DRY-RUN] '
    printf '%q ' "$@"
    echo
    return 0
  fi
  "$@"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --log-dir) LOG_DIR="$2"; shift 2 ;;
    --max-size-mb) MAX_SIZE_MB="$2"; shift 2 ;;
    --retention-days) RETENTION_DAYS="$2"; shift 2 ;;
    --dry-run) DRY_RUN=true; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown argument: $1"; usage; exit 1 ;;
  esac
done

if [[ ! -d "$LOG_DIR" ]]; then
  echo "[ERROR] Log directory not found: $LOG_DIR" >&2
  exit 1
fi

MAX_SIZE_BYTES=$((MAX_SIZE_MB * 1024 * 1024))
STAMP="$(date +%Y%m%d-%H%M%S)"

echo "[INFO] Scanning $LOG_DIR for oversized logs..."
shopt -s nullglob
for file in "$LOG_DIR"/*.log; do
  size="$(stat -c%s "$file")"
  if (( size < MAX_SIZE_BYTES )); then
    continue
  fi

  rotated="$file.$STAMP"
  run_cmd mv "$file" "$rotated"
  run_cmd sh -c ": > \"$file\""
  run_cmd gzip -f "$rotated"
  echo "[INFO] Rotated: $file (size=$size bytes)"
done

echo "[INFO] Removing archives older than $RETENTION_DAYS day(s)..."
while IFS= read -r -d '' archive; do
  run_cmd rm -f "$archive"
  echo "[INFO] Deleted old archive: $archive"
done < <(find "$LOG_DIR" -maxdepth 1 -type f -name "*.log.*.gz" -mtime +"$RETENTION_DAYS" -print0)

echo "[INFO] Log rotation finished."
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
  a.download = `log-rotation-manager${scriptFormat}`;
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
