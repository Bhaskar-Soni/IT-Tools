<template>
  <div class="script-content">
    <h1>Bash Automation Script</h1>
    
    <section>
      <h2>Overview</h2>
      <p>This script demonstrates common automation tasks in Bash.</p>
    </section>

    <section>
      <h2>Features</h2>
      <ul>
        <li>System monitoring</li>
        <li>Backup automation</li>
        <li>Log rotation</li>
        <li>Cron job management</li>
      </ul>
    </section>

    <section>
      <h2>Example Usage</h2>
      <pre><code>#!/bin/bash

# Backup important directories
backup_dir="/home/user/documents"
backup_location="/mnt/backup"

tar -czf "$backup_location/backup-$(date +%Y%m%d).tar.gz" "$backup_dir"
echo "Backup completed successfully"</code></pre>
    </section>

    <section>
      <h2>Common Patterns</h2>
      <h3>Loop through files</h3>
      <pre><code>for file in /path/to/files/*; do
  echo "Processing $file"
done</code></pre>

      <h3>Error handling</h3>
      <pre><code>if [ $? -eq 0 ]; then
  echo "Command succeeded"
else
  echo "Command failed"
  exit 1
fi</code></pre>
    </section>
  </div>
</template>

<script setup lang="ts">
// No component logic needed
</script>

<style scoped>
.script-content {
  padding: 20px;
}

section {
  margin-bottom: 30px;
}

h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}

h3 {
  margin-top: 15px;
  margin-bottom: 8px;
}

pre {
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  margin: 10px 0;
}

code {
  font-family: 'Courier New', monospace;
  font-size: 13px;
}

ul {
  margin-left: 20px;
}
</style>
