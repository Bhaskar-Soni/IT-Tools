<template>
  <div class="script-page">
    <h2>Nginx Blue Green Deploy</h2>
    <p>Deploy a release to the inactive slot, switch traffic safely, and rollback automatically if health checks fail.</p>

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

# nginx-blue-green-deploy.sh
# Deploy to inactive color, switch symlink, validate Nginx + health endpoint, rollback on failure.
#
# Expected layout:
#   /var/www/myapp/
#     current -> /var/www/myapp/releases/blue or green
#     releases/blue/
#     releases/green/
#
# Usage:
#   ./nginx-blue-green-deploy.sh --artifact /tmp/build/ --app-root /var/www/myapp --health-url http://127.0.0.1/health

APP_ROOT="/var/www/myapp"
ARTIFACT=""
HEALTH_URL="http://127.0.0.1/health"
HEALTH_RETRIES=10
HEALTH_DELAY=3
RELOAD_CMD="systemctl reload nginx"
DRY_RUN=false

usage() {
  echo "Usage: $0 --artifact <file-or-dir> [--app-root dir] [--health-url url] [--health-retries n] [--health-delay n] [--reload-cmd cmd] [--dry-run]"
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
    --artifact) ARTIFACT="$2"; shift 2 ;;
    --app-root) APP_ROOT="$2"; shift 2 ;;
    --health-url) HEALTH_URL="$2"; shift 2 ;;
    --health-retries) HEALTH_RETRIES="$2"; shift 2 ;;
    --health-delay) HEALTH_DELAY="$2"; shift 2 ;;
    --reload-cmd) RELOAD_CMD="$2"; shift 2 ;;
    --dry-run) DRY_RUN=true; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown argument: $1"; usage; exit 1 ;;
  esac
done

if [[ -z "$ARTIFACT" ]]; then
  echo "[ERROR] --artifact is required." >&2
  exit 1
fi

CURRENT_LINK="$(readlink -f "$APP_ROOT/current" 2>/dev/null || true)"
if [[ "$CURRENT_LINK" == *"/blue" ]]; then
  CURRENT_COLOR="blue"
  TARGET_COLOR="green"
else
  CURRENT_COLOR="green"
  TARGET_COLOR="blue"
fi

TARGET_DIR="$APP_ROOT/releases/$TARGET_COLOR"
STAGING_DIR="$APP_ROOT/staging-$TARGET_COLOR"
PREV_LINK="$APP_ROOT/releases/$CURRENT_COLOR"

echo "[INFO] Current slot: $CURRENT_COLOR"
echo "[INFO] Target slot:  $TARGET_COLOR"

run_cmd mkdir -p "$TARGET_DIR" "$STAGING_DIR"
run_cmd rm -rf "$STAGING_DIR"/*

if [[ -d "$ARTIFACT" ]]; then
  run_cmd rsync -a --delete "$ARTIFACT/" "$STAGING_DIR/"
else
  run_cmd tar -xzf "$ARTIFACT" -C "$STAGING_DIR"
fi

run_cmd rsync -a --delete "$STAGING_DIR/" "$TARGET_DIR/"
run_cmd ln -sfn "$TARGET_DIR" "$APP_ROOT/current"

echo "[INFO] Validating nginx config..."
run_cmd nginx -t
run_cmd sh -c "$RELOAD_CMD"

echo "[INFO] Running health checks: $HEALTH_URL"
HEALTHY=false
for attempt in $(seq 1 "$HEALTH_RETRIES"); do
  if curl -fsS --max-time 5 "$HEALTH_URL" >/dev/null; then
    HEALTHY=true
    break
  fi
  echo "[WARN] Health check attempt $attempt failed; retrying in $HEALTH_DELAY second(s)"
  sleep "$HEALTH_DELAY"
done

if [[ "$HEALTHY" != "true" ]]; then
  echo "[ERROR] Deployment failed health checks. Rolling back..."
  run_cmd ln -sfn "$PREV_LINK" "$APP_ROOT/current"
  run_cmd sh -c "$RELOAD_CMD"
  exit 1
fi

echo "[INFO] Deployment succeeded on $TARGET_COLOR slot."
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
  a.download = `nginx-blue-green-deploy${scriptFormat}`;
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
