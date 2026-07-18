<template>
  <div class="script-page">
    <h2>Website Sitemap Health Check</h2>
    <p>Validate sitemap URLs and report endpoint failures with response latency.</p>

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
website_sitemap_health_check.py
Validate URLs in a sitemap and report failures.
"""

from __future__ import annotations

import argparse
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET


def fetch_urls(sitemap_url: str) -> list[str]:
    with urllib.request.urlopen(sitemap_url, timeout=15) as resp:
        xml_data = resp.read()
    root = ET.fromstring(xml_data)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return [n.text.strip() for n in root.findall("sm:url/sm:loc", ns) if n.text]


def check_url(url: str, timeout: int) -> tuple[int | None, int, str | None]:
    start = time.perf_counter()
    req = urllib.request.Request(url, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            status = resp.getcode()
        latency = int((time.perf_counter() - start) * 1000)
        return status, latency, None
    except urllib.error.HTTPError as e:
        latency = int((time.perf_counter() - start) * 1000)
        return e.code, latency, f"HTTP {e.code}"
    except Exception as e:
        latency = int((time.perf_counter() - start) * 1000)
        return None, latency, str(e)


def main() -> int:
    parser = argparse.ArgumentParser(description="Sitemap health check")
    parser.add_argument("--sitemap", required=True, help="Sitemap URL")
    parser.add_argument("--limit", type=int, default=100, help="Max URLs to test")
    parser.add_argument("--timeout", type=int, default=10, help="Request timeout")
    args = parser.parse_args()

    urls = fetch_urls(args.sitemap)[: args.limit]
    print(f"Loaded {len(urls)} URL(s) from sitemap")

    failures = 0
    for url in urls:
        status, latency, err = check_url(url, args.timeout)
        if status is None or status >= 400:
            failures += 1
            print(f"[FAIL] {url} status={status} latency={latency}ms error={err}")
        else:
            print(f"[OK]   {url} status={status} latency={latency}ms")

    print(f"Summary: {len(urls) - failures}/{len(urls)} healthy")
    return 1 if failures else 0


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
  a.download = `website-sitemap-health-check${scriptFormat}`;
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
