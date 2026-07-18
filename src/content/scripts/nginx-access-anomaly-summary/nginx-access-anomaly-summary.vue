<template>
  <div class="script-page">
    <h2>Nginx Access Anomaly Summary</h2>
    <p>Analyze Nginx access logs for abnormal error rates and suspicious high-traffic IPs.</p>

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
  py: '.py',
};

const format = 'py';
const scriptFormat = formatExtensions[format] || '.py';

const script = ref(`#!/usr/bin/env python3
"""
nginx_access_anomaly_summary.py
Summarize status code spikes and top client IPs from Nginx access logs.
"""

from __future__ import annotations

import argparse
import re
from collections import Counter

LOG_RE = re.compile(r'^(?P<ip>\\S+)\\s+\\S+\\s+\\S+\\s+\\[[^\\]]+\\]\\s+"[^"]*"\\s+(?P<status>\\d{3})\\s+')


def main() -> int:
    parser = argparse.ArgumentParser(description="Nginx access anomaly summary")
    parser.add_argument("--log", required=True, help="Path to access log")
    parser.add_argument("--top", type=int, default=10, help="Top IP count")
    parser.add_argument("--error-threshold", type=float, default=0.1, help="Alert if 4xx+5xx ratio exceeds threshold")
    args = parser.parse_args()

    total = 0
    ip_counter: Counter[str] = Counter()
    status_counter: Counter[str] = Counter()

    with open(args.log, "r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            m = LOG_RE.match(line)
            if not m:
                continue
            total += 1
            ip_counter[m.group("ip")] += 1
            status_counter[m.group("status")] += 1

    if total == 0:
        print("No parsable log lines found.")
        return 1

    err4xx = sum(v for k, v in status_counter.items() if k.startswith("4"))
    err5xx = sum(v for k, v in status_counter.items() if k.startswith("5"))
    err_ratio = (err4xx + err5xx) / total

    print(f"Total requests: {total}")
    print(f"4xx errors: {err4xx}")
    print(f"5xx errors: {err5xx}")
    print(f"Error ratio: {err_ratio:.2%}")
    print()
    print(f"Top {args.top} client IPs:")
    for ip, count in ip_counter.most_common(args.top):
        print(f" - {ip}: {count}")

    if err_ratio > args.error_threshold:
        print("ALERT: error ratio exceeded threshold")
        return 2
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
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
    py: 'text/x-python',
  };
  
  const mime = mimeTypes[format] || 'text/plain';
  const blob = new Blob([script.value], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `nginx-access-anomaly-summary${scriptFormat}`;
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
