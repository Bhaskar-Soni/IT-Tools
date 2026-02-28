<template>
  <div class="script-page">
    <h2>API Uptime Monitor</h2>
    <p>Probe API endpoints with retries, latency tracking, and CI-friendly exit codes.</p>

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
api_uptime_monitor.py
Check one or more HTTP endpoints and return non-zero on failures.

Examples:
  python api_uptime_monitor.py --url https://api.example.com/health
  python api_uptime_monitor.py --file endpoints.txt --retries 2 --timeout 5
"""

from __future__ import annotations

import argparse
import json
import sys
import time
import urllib.error
import urllib.request
from dataclasses import dataclass, asdict


@dataclass
class Result:
    url: str
    ok: bool
    status: int | None
    latency_ms: int
    attempts: int
    error: str | None


def request_once(url: str, timeout: int) -> tuple[int, int]:
    start = time.perf_counter()
    req = urllib.request.Request(url, method="GET")
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        status = resp.getcode()
    latency = int((time.perf_counter() - start) * 1000)
    return status, latency


def check_url(url: str, timeout: int, retries: int, expected_status: int) -> Result:
    attempts = 0
    last_error: str | None = None
    last_status: int | None = None
    last_latency = 0

    for _ in range(retries + 1):
        attempts += 1
        try:
            status, latency = request_once(url, timeout)
            last_status = status
            last_latency = latency
            if status == expected_status:
                return Result(url=url, ok=True, status=status, latency_ms=latency, attempts=attempts, error=None)
            last_error = f"unexpected status {status} (expected {expected_status})"
        except urllib.error.HTTPError as e:
            last_status = e.code
            last_error = f"http error {e.code}"
        except Exception as e:
            last_error = str(e)

    return Result(url=url, ok=False, status=last_status, latency_ms=last_latency, attempts=attempts, error=last_error)


def load_urls(args: argparse.Namespace) -> list[str]:
    urls = list(args.url or [])
    if args.file:
        with open(args.file, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    urls.append(line)
    return urls


def main() -> int:
    parser = argparse.ArgumentParser(description="API uptime monitor")
    parser.add_argument("--url", action="append", help="Endpoint URL (repeat for multiple)")
    parser.add_argument("--file", help="Path to file containing endpoints, one per line")
    parser.add_argument("--timeout", type=int, default=5, help="Request timeout in seconds")
    parser.add_argument("--retries", type=int, default=1, help="Retry count after initial attempt")
    parser.add_argument("--expected-status", type=int, default=200, help="Expected HTTP status code")
    parser.add_argument("--json", action="store_true", help="Output JSON summary")
    args = parser.parse_args()

    urls = load_urls(args)
    if not urls:
        parser.error("at least one --url or --file is required")

    results: list[Result] = []
    for url in urls:
        result = check_url(url, timeout=args.timeout, retries=args.retries, expected_status=args.expected_status)
        results.append(result)

    failures = [r for r in results if not r.ok]
    if args.json:
        payload = {"total": len(results), "failures": len(failures), "results": [asdict(r) for r in results]}
        print(json.dumps(payload, indent=2))
    else:
        for r in results:
            state = "OK" if r.ok else "FAIL"
            status = r.status if r.status is not None else "-"
            extra = "" if r.ok else f" ({r.error})"
            print(f"[{state}] {r.url} status={status} latency={r.latency_ms}ms attempts={r.attempts}{extra}")
        print(f"Summary: {len(results) - len(failures)}/{len(results)} healthy")

    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
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
  a.download = `api-uptime-monitor${scriptFormat}`;
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
