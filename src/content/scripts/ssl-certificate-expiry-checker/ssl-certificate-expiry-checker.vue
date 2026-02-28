<template>
  <div class="script-page">
    <h2>SSL Certificate Expiry Checker</h2>
    <p>Check TLS certificate expiry across domains and fail fast on warning/critical thresholds.</p>

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

# ssl-certificate-expiry-checker.sh
# Check certificate expiry and return non-zero when warning/critical thresholds are crossed.
#
# Requirements: openssl, timeout, GNU date
#
# Usage:
#   ./ssl-certificate-expiry-checker.sh example.com api.example.com
#   ./ssl-certificate-expiry-checker.sh --domains-file ./domains.txt --warning-days 21 --critical-days 7

DOMAINS_FILE=""
WARNING_DAYS=30
CRITICAL_DAYS=7
PORT=443
EXIT_CODE=0
DOMAINS=()

usage() {
  echo "Usage: $0 [--domains-file file] [--warning-days n] [--critical-days n] [--port n] [domain ...]"
}

to_epoch() {
  date -d "$1" +%s 2>/dev/null
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --domains-file) DOMAINS_FILE="$2"; shift 2 ;;
    --warning-days) WARNING_DAYS="$2"; shift 2 ;;
    --critical-days) CRITICAL_DAYS="$2"; shift 2 ;;
    --port) PORT="$2"; shift 2 ;;
    -h|--help) usage; exit 0 ;;
    *) DOMAINS+=("$1"); shift ;;
  esac
done

if [[ -n "$DOMAINS_FILE" ]]; then
  while IFS= read -r line; do
    [[ -z "$line" || "$line" =~ ^# ]] && continue
    DOMAINS+=("$line")
  done < "$DOMAINS_FILE"
fi

if [[ "\${#DOMAINS[@]}" -eq 0 ]]; then
  echo "[ERROR] No domains provided." >&2
  usage
  exit 1
fi

for domain in "\${DOMAINS[@]}"; do
  end_date="$(
    echo | timeout 10 openssl s_client -servername "$domain" -connect "$domain:$PORT" 2>/dev/null \
      | openssl x509 -noout -enddate 2>/dev/null \
      | cut -d= -f2
  )"

  if [[ -z "$end_date" ]]; then
    echo "[CRITICAL] $domain: unable to fetch certificate"
    EXIT_CODE=2
    continue
  fi

  now_epoch="$(date +%s)"
  expiry_epoch="$(to_epoch "$end_date" || true)"

  if [[ -z "$expiry_epoch" ]]; then
    echo "[CRITICAL] $domain: unable to parse certificate expiry date ($end_date)"
    EXIT_CODE=2
    continue
  fi

  days_left="$(( (expiry_epoch - now_epoch) / 86400 ))"

  if (( days_left <= CRITICAL_DAYS )); then
    echo "[CRITICAL] $domain: expires in $days_left day(s) on $end_date"
    EXIT_CODE=2
  elif (( days_left <= WARNING_DAYS )); then
    echo "[WARNING]  $domain: expires in $days_left day(s) on $end_date"
    if (( EXIT_CODE < 1 )); then EXIT_CODE=1; fi
  else
    echo "[OK]       $domain: expires in $days_left day(s) on $end_date"
  fi
done

exit "$EXIT_CODE"
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
  a.download = `ssl-certificate-expiry-checker${scriptFormat}`;
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
