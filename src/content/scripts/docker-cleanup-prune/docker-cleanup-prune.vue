<template>
  <div class="script-page">
    <h2>Docker Cleanup Prune</h2>
    <p>Safely reclaim disk space by pruning stopped containers, dangling images, and stale cache.</p>

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

# docker-cleanup-prune.sh
# Clean up unused Docker resources with optional dry-run.
#
# Usage:
#   ./docker-cleanup-prune.sh [--container-hours 24] [--image-hours 168] [--no-volumes] [--dry-run]

CONTAINER_HOURS=24
IMAGE_HOURS=168
PRUNE_VOLUMES=true
DRY_RUN=false

usage() {
  echo "Usage: $0 [--container-hours <n>] [--image-hours <n>] [--no-volumes] [--dry-run]"
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
    --container-hours) CONTAINER_HOURS="$2"; shift 2 ;;
    --image-hours) IMAGE_HOURS="$2"; shift 2 ;;
    --no-volumes) PRUNE_VOLUMES=false; shift ;;
    --dry-run) DRY_RUN=true; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown argument: $1"; usage; exit 1 ;;
  esac
done

if ! command -v docker >/dev/null 2>&1; then
  echo "[ERROR] Docker CLI is not installed." >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "[ERROR] Docker daemon is not reachable." >&2
  exit 1
fi

echo "[INFO] Docker usage before cleanup:"
docker system df

echo "[INFO] Pruning stopped containers older than \${CONTAINER_HOURS}h"
run_cmd docker container prune -f --filter "until=\${CONTAINER_HOURS}h"

echo "[INFO] Pruning unused images older than \${IMAGE_HOURS}h"
run_cmd docker image prune -a -f --filter "until=\${IMAGE_HOURS}h"

echo "[INFO] Pruning unused networks"
run_cmd docker network prune -f

if [[ "$PRUNE_VOLUMES" == "true" ]]; then
  echo "[INFO] Pruning unused volumes"
  run_cmd docker volume prune -f
fi

echo "[INFO] Pruning builder cache"
run_cmd docker builder prune -a -f --filter "until=\${IMAGE_HOURS}h"

echo "[INFO] Docker usage after cleanup:"
docker system df
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
  a.download = `docker-cleanup-prune${scriptFormat}`;
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
