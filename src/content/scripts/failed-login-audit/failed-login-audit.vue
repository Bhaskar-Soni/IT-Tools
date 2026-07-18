<template>
  <div class="script-page">
    <h2>Failed Login Audit</h2>
    <p>Summarize SSH authentication failures by IP and user to support incident response workflows.</p>

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

# failed-login-audit.sh
# Report failed SSH login attempts by source IP and user.
#
# Usage:
#   ./failed-login-audit.sh --since-hours 24 --threshold 5
#   ./failed-login-audit.sh --log-file /var/log/auth.log --output ./failed-logins.txt

SINCE_HOURS=24
THRESHOLD=5
LOG_FILE=""
OUTPUT_FILE=""

usage() {
  echo "Usage: $0 [--since-hours n] [--threshold n] [--log-file path] [--output path]"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --since-hours) SINCE_HOURS="$2"; shift 2 ;;
    --threshold) THRESHOLD="$2"; shift 2 ;;
    --log-file) LOG_FILE="$2"; shift 2 ;;
    --output) OUTPUT_FILE="$2"; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown argument: $1"; usage; exit 1 ;;
  esac
done

TMP_INPUT="$(mktemp)"
cleanup() {
  rm -f "$TMP_INPUT"
}
trap cleanup EXIT

if [[ -n "$LOG_FILE" ]]; then
  cp "$LOG_FILE" "$TMP_INPUT"
elif command -v journalctl >/dev/null 2>&1; then
  journalctl --since "-$SINCE_HOURS hours" -u ssh -u sshd --no-pager > "$TMP_INPUT" || true
else
  if [[ -f /var/log/auth.log ]]; then
    cp /var/log/auth.log "$TMP_INPUT"
  elif [[ -f /var/log/secure ]]; then
    cp /var/log/secure "$TMP_INPUT"
  else
    echo "[ERROR] Could not locate auth logs. Use --log-file." >&2
    exit 1
  fi
fi

REPORT="$(
  grep -E "Failed password|authentication failure" "$TMP_INPUT" \
    | awk '
      {
        ip="-"; user="-";
        for (i=1; i<=NF; i++) {
          if ($i=="from" && (i+1)<=NF) ip=$(i+1);
          if ($i=="for" && (i+1)<=NF && $(i+1)!="invalid") user=$(i+1);
          if ($i=="invalid" && (i+2)<=NF && $(i+1)=="user") user=$(i+2);
        }
        print ip "|" user;
      }
    ' \
    | sort \
    | uniq -c \
    | sort -nr
)"

if [[ -z "$REPORT" ]]; then
  echo "[OK] No failed authentication records found."
  exit 0
fi

{
  echo "Failed login summary (threshold=$THRESHOLD):"
  echo
  printf "%-8s %-18s %s\n" "COUNT" "SOURCE_IP" "USER"
  echo "----------------------------------------------"
  while read -r count key; do
    ip="\${key%%|*}"
    user="\${key##*|}"
    printf "%-8s %-18s %s\n" "$count" "$ip" "$user"
  done <<< "$REPORT"
  echo
  echo "IPs at or above threshold:"
  while read -r count key; do
    ip="\${key%%|*}"
    if [[ "$ip" != "-" && "$count" -ge "$THRESHOLD" ]]; then
      echo " - $ip ($count failed attempts)"
    fi
  done <<< "$REPORT"
} | tee "\${OUTPUT_FILE:-/dev/stdout}"
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
  a.download = `failed-login-audit${scriptFormat}`;
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
