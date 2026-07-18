<template>
  <div class="template-page">
    <h2>Data Retention Policy Template</h2>
    <p>
      Define retention periods, legal holds, archive controls, and secure disposal for regulated datasets.
    </p>

    <div class="template-content">
      <div class="download-row">
        <a class="download-btn" href="/templates/docx/data-retention-policy-template.docx" download>
          <n-icon size="16" :component="downloadIcon" /> Download DOCX
        </a>
        <a class="download-btn" href="/templates/pdf/data-retention-policy-template.pdf" download>
          <n-icon size="16" :component="downloadIcon" /> Download PDF
        </a>
      </div>

      <h3>Policy Framework</h3>
      <ol>
        <li>Purpose, Scope, and Definitions</li>
        <li>Data Classification Categories</li>
        <li>Retention Schedule by Data Type</li>
        <li>Legal Hold and eDiscovery Exceptions</li>
        <li>Archive Storage and Access Controls</li>
        <li>Secure Deletion Standards</li>
        <li>Monitoring, Audit, and Review Frequency</li>
      </ol>

      <h3>Retention Table Example</h3>
      <pre><code>Customer invoices: 7 years
Authentication logs: 1 year
Security alerts: 2 years
Session telemetry: 90 days</code></pre>

      <h3>Control Checklist</h3>
      <ul>
        <li>Retention owners are assigned per system.</li>
        <li>Automated purge jobs are documented and tested.</li>
        <li>Backup retention aligns with production policy.</li>
        <li>Disposal evidence is stored for audit trails.</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { markRaw } from 'vue';
import { NIcon } from 'naive-ui';
import { Download } from '@vicons/tabler';

const downloadIcon = markRaw(Download);
</script>

<style scoped>
.template-page {
  max-width: 900px;
}

.template-page p {
  margin-bottom: 16px;
}

.download-row {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  background: #18a058;
  color: #fff;
  font-weight: 600;
  transition: opacity 0.2s;
}

.download-btn:hover {
  opacity: 0.9;
}

.template-content {
  padding: 16px 0;
}

h3 {
  margin-top: 20px;
  margin-bottom: 8px;
}

ol,
ul {
  margin-left: 20px;
}

pre {
  margin-top: 10px;
  padding: 12px;
  border: 1px solid #30363d;
  background: #161b22;
  overflow-x: auto;
}

code {
  font-family: Consolas, Monaco, 'Courier New', monospace;
  font-size: 13px;
}
</style>
