<template>
  <div class="template-page">
    <h2>Security Risk Assessment Template</h2>
    <p>
      A structured template for evaluating assets, threats, vulnerabilities, and treatment plans with clear ownership.
    </p>

    <div class="template-content">
      <div class="download-row">
        <a class="download-btn" href="/templates/docx/security-risk-assessment-template.docx" download>
          <n-icon size="16" :component="downloadIcon" /> Download DOCX
        </a>
        <a class="download-btn" href="/templates/pdf/security-risk-assessment-template.pdf" download>
          <n-icon size="16" :component="downloadIcon" /> Download PDF
        </a>
      </div>

      <h3>Risk Register Fields</h3>
      <ul>
        <li>Asset / Business Function</li>
        <li>Threat Scenario</li>
        <li>Vulnerability or Control Gap</li>
        <li>Likelihood (1-5)</li>
        <li>Impact (1-5)</li>
        <li>Risk Score and Priority</li>
        <li>Current Controls</li>
        <li>Treatment Plan and Due Date</li>
        <li>Owner and Status</li>
      </ul>

      <h3>Scoring Formula</h3>
      <pre><code>risk_score = likelihood * impact
priority = High (15-25), Medium (8-14), Low (1-7)</code></pre>

      <h3>Review Cadence</h3>
      <ul>
        <li>Quarterly review for all critical assets.</li>
        <li>Immediate reassessment after major architecture changes.</li>
        <li>Executive summary generated for top 10 open risks.</li>
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
