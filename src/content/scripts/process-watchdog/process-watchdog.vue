<template>
  <div class="script-page">
    <h2>Process Watchdog</h2>
    <p>Continuously monitor a critical process and restart it under controlled limits.</p>

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
  ps1: '.ps1',
};

const format = 'ps1';
const scriptFormat = formatExtensions[format] || '.ps1';

const script = ref(`# process-watchdog.ps1
# Keep a process alive by periodically checking it and restarting when absent.
#
# Example:
#   .\\process-watchdog.ps1 -ProcessName "MyWorker" -StartCommand "C:\\apps\\worker.exe --env prod"

param(
    [Parameter(Mandatory = $true)]
    [string]$ProcessName,

    [Parameter(Mandatory = $true)]
    [string]$StartCommand,

    [int]$CheckIntervalSec = 15,
    [int]$MaxRestarts = 5,
    [int]$RestartWindowMin = 10,
    [string]$LogPath = "C:\\logs\\process-watchdog.log"
)

$logDir = Split-Path -Path $LogPath -Parent
if ($logDir -and -not (Test-Path $logDir)) {
    New-Item -Path $logDir -ItemType Directory -Force | Out-Null
}

$restartHistory = New-Object System.Collections.Generic.List[datetime]

function Write-Log {
    param(
        [string]$Level,
        [string]$Message
    )
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $line = "[$timestamp] [$Level] $Message"
    Write-Host $line
    Add-Content -Path $LogPath -Value $line
}

function Start-TargetProcess {
    Write-Log -Level "INFO" -Message "Starting process with command: $StartCommand"
    Start-Process -FilePath "powershell.exe" -ArgumentList "-NoProfile", "-Command", $StartCommand -WindowStyle Hidden
}

while ($true) {
    try {
        $processes = Get-Process -Name $ProcessName -ErrorAction SilentlyContinue
        if (-not $processes) {
            $cutoff = (Get-Date).AddMinutes(-1 * $RestartWindowMin)
            $restartHistory = [System.Collections.Generic.List[datetime]]($restartHistory | Where-Object { $_ -gt $cutoff })

            if ($restartHistory.Count -ge $MaxRestarts) {
                Write-Log -Level "ERROR" -Message "Restart limit reached: $($restartHistory.Count) restarts in $RestartWindowMin minute(s)."
                exit 1
            }

            Start-TargetProcess
            $restartHistory.Add((Get-Date))
            Write-Log -Level "WARN" -Message "Process '$ProcessName' was down and has been restarted."
        }
        else {
            Write-Log -Level "INFO" -Message "Process '$ProcessName' is healthy (count=$($processes.Count))."
        }
    }
    catch {
        Write-Log -Level "ERROR" -Message $_.Exception.Message
    }

    Start-Sleep -Seconds $CheckIntervalSec
}
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
    ps1: 'text/x-powershell',
  };
  
  const mime = mimeTypes[format] || 'text/plain';
  const blob = new Blob([script.value], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `process-watchdog${scriptFormat}`;
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
