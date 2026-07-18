<template>
  <div class="script-page">
    <h2>Backup Retention</h2>
    <p>Create compressed backups, generate checksums, and keep only recent snapshots.</p>

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

# backup-retention.sh
# Create compressed backups and enforce retention by archive count.
#
# Usage:
#   ./backup-retention.sh \
#     --source /etc \
#     --source /var/www \
#     --backup-dir /backups/server-a \
#     --keep-count 14 \
#     [--exclude-file /etc/backup.exclude] \
#     [--dry-run]

SOURCES=()
BACKUP_DIR="/backups"
KEEP_COUNT=14
EXCLUDE_FILE=""
DRY_RUN=false

usage() {
  echo "Usage: $0 --source <path> [--source <path>] --backup-dir <dir> --keep-count <n> [--exclude-file <file>] [--dry-run]"
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
    --source) SOURCES+=("$2"); shift 2 ;;
    --backup-dir) BACKUP_DIR="$2"; shift 2 ;;
    --keep-count) KEEP_COUNT="$2"; shift 2 ;;
    --exclude-file) EXCLUDE_FILE="$2"; shift 2 ;;
    --dry-run) DRY_RUN=true; shift ;;
    -h|--help) usage; exit 0 ;;
    *) echo "Unknown argument: $1"; usage; exit 1 ;;
  esac
done

if [[ "\${#SOURCES[@]}" -eq 0 ]]; then
  echo "[ERROR] At least one --source is required." >&2
  exit 1
fi

run_cmd mkdir -p "$BACKUP_DIR"
STAMP="$(date +%Y%m%d-%H%M%S)"
HOST="$(hostname -s 2>/dev/null || hostname)"
ARCHIVE="$BACKUP_DIR/$HOST-$STAMP.tar.gz"

TAR_ARGS=(--create --gzip --file "$ARCHIVE")
if [[ -n "$EXCLUDE_FILE" ]]; then
  TAR_ARGS+=(--exclude-from "$EXCLUDE_FILE")
fi
TAR_ARGS+=("\${SOURCES[@]}")

echo "[INFO] Creating archive: $ARCHIVE"
run_cmd tar "\${TAR_ARGS[@]}"

echo "[INFO] Writing checksum file..."
run_cmd sh -c "sha256sum \"$ARCHIVE\" > \"$ARCHIVE.sha256\""

mapfile -t archives < <(find "$BACKUP_DIR" -maxdepth 1 -type f -name "$HOST-*.tar.gz" | sort -r)
if (( \${#archives[@]} > KEEP_COUNT )); then
  echo "[INFO] Applying retention: keep newest $KEEP_COUNT archive(s)"
  for old in "\${archives[@]:$KEEP_COUNT}"; do
    run_cmd rm -f "$old" "$old.sha256"
    echo "[INFO] Deleted old backup: $old"
  done
fi

echo "[INFO] Backup retention run completed."
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
  a.download = `backup-retention${scriptFormat}`;
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
