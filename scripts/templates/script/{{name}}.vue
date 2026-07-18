<template>
  <div class="script-page">
    <div class="script-actions">
      <button class="btn" @click="copyScript">
        <n-icon size="16" :component="copyIcon" />
        Copy Script
      </button>
      <button class="btn" @click="downloadScript">
        <n-icon size="16" :component="downloadIcon" />
        Download script
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
  py: '.py',
  bat: '.bat',
  yml: '.yml',
  ps1: '.ps1',
  zsh: '.zsh',
  fish: '.fish',
  tcl: '.tcl',
};

const format = '{{formats}}' || 'sh';
const scriptFormat = formatExtensions[format] || '.sh';

const scriptTemplates: Record<string, string> = {
  sh: `#!/bin/bash\n# {{title}} Script\n# {{description}}\n\necho "===== HELLO WORLD ====="\necho "Script: {{name}}"\necho "Date: $(date)"\necho ""\n\n# Add your script logic here\necho "Hello, World!"\necho ""\n\necho "===== DONE ====="\n`,
  py: `#!/usr/bin/env python3\n"""\n{{title}} Script\n{{description}}\n"""\n\nimport datetime\n\ndef main():\n    print('===== HELLO WORLD =====')\n    print('Script: {{name}}')\n    print('Date:', datetime.datetime.now())\n    print('Hello, World!')\n    print('===== DONE =====')\n\nif __name__ == '__main__':\n    main()\n`,
  bat: `@echo off\nREM {{title}} Script\nREM {{description}}\n\necho ===== HELLO WORLD =====\necho Script: {{name}}\necho Date: %date% %time%\necho.\necho Hello, World!\necho.\necho ===== DONE =====\n`,
  yml: `---\n# {{title}} Ansible Playbook\n# {{description}}\n- hosts: all\n  tasks:\n    - name: Print Hello World\n      debug:\n        msg: "Hello, World!"\n`,
  ps1: `# {{title}} PowerShell Script\n# {{description}}\n\nWrite-Host "===== HELLO WORLD ====="\nWrite-Host "Script: {{name}}"\nWrite-Host "Date: $(Get-Date)"\nWrite-Host "Hello, World!"\nWrite-Host "===== DONE ====="\n`,
  zsh: `#!/bin/zsh\n# {{title}} - Zsh Script\n# {{description}}\n\necho "[INFO] Starting {{name}} script"\necho "[INFO] Script completed successfully"\n`,
  fish: `#!/usr/bin/env fish\n# {{title}} - Fish Script\n# {{description}}\n\necho "[INFO] Starting {{name}} script"\necho "[INFO] Script completed successfully"\n`,
  tcl: `#!/usr/bin/env tclsh\n# {{title}} - Tcl Script\n# {{description}}\n\nputs "[INFO] Starting {{name}} script"\nputs "[INFO] Script completed successfully"\n`,
};

const script = ref(scriptTemplates[format] || scriptTemplates['sh']);

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
    py: 'text/x-python',
    bat: 'application/x-bat',
    yml: 'text/yaml',
    ps1: 'text/x-powershell',
  };
  
  const mime = mimeTypes[format] || 'text/plain';
  const blob = new Blob([script.value], { type: mime });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `{{name}}.${format}`;
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
