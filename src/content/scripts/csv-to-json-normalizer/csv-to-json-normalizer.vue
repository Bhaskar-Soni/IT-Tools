<template>
  <div class="script-page">
    <h2>CSV to JSON Normalizer</h2>
    <p>Convert CSV data into clean JSON with type coercion and field-level normalization rules.</p>

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
csv_to_json_normalizer.py
Normalize CSV rows and export predictable JSON payloads.

Examples:
  python csv_to_json_normalizer.py --input users.csv --output users.json
  python csv_to_json_normalizer.py --input sales.csv --int-fields quantity --float-fields price --lowercase-fields email
"""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path
from typing import Any


def parse_fields(value: str | None) -> set[str]:
    if not value:
        return set()
    return {part.strip() for part in value.split(",") if part.strip()}


def normalize_value(
    key: str,
    value: str,
    int_fields: set[str],
    float_fields: set[str],
    lowercase_fields: set[str],
) -> Any:
    clean = value.strip()
    if clean == "":
        return None
    if key in lowercase_fields:
        clean = clean.lower()
    if key in int_fields:
        return int(clean)
    if key in float_fields:
        return float(clean)
    return clean


def normalize_row(
    row: dict[str, str],
    int_fields: set[str],
    float_fields: set[str],
    lowercase_fields: set[str],
) -> dict[str, Any]:
    out: dict[str, Any] = {}
    for key, value in row.items():
        if key is None:
            continue
        key_clean = key.strip()
        normalized = normalize_value(key_clean, value or "", int_fields, float_fields, lowercase_fields)
        if normalized is not None:
            out[key_clean] = normalized
    return out


def main() -> int:
    parser = argparse.ArgumentParser(description="Convert CSV to normalized JSON")
    parser.add_argument("--input", required=True, help="Input CSV path")
    parser.add_argument("--output", required=True, help="Output JSON path")
    parser.add_argument("--int-fields", help="Comma-separated fields to cast as int")
    parser.add_argument("--float-fields", help="Comma-separated fields to cast as float")
    parser.add_argument("--lowercase-fields", help="Comma-separated fields to lowercase")
    parser.add_argument("--indent", type=int, default=2, help="JSON indent")
    args = parser.parse_args()

    input_path = Path(args.input)
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    int_fields = parse_fields(args.int_fields)
    float_fields = parse_fields(args.float_fields)
    lowercase_fields = parse_fields(args.lowercase_fields)

    rows: list[dict[str, Any]] = []
    with input_path.open("r", encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            rows.append(normalize_row(row, int_fields, float_fields, lowercase_fields))

    with output_path.open("w", encoding="utf-8") as f:
        json.dump(rows, f, indent=args.indent, ensure_ascii=False)
        f.write("\\n")

    print(f"[INFO] Wrote {len(rows)} normalized record(s) to {output_path}")
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
  a.download = `csv-to-json-normalizer${scriptFormat}`;
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
