<template>
  <div class="template-page">
    <h2>Change Management Plan Template</h2>
    <p>
      Plan production changes with risk controls, test requirements, approvals, and rollback procedures.
    </p>

    <div class="template-content">
      <div class="download-row">
        <a class="download-btn" href="/templates/docx/change-management-plan-template.docx" download>
          <n-icon size="16" :component="downloadIcon" /> Download DOCX
        </a>
        <a class="download-btn" href="/templates/pdf/change-management-plan-template.pdf" download>
          <n-icon size="16" :component="downloadIcon" /> Download PDF
        </a>
      </div>

      <h3>Core Sections</h3>
      <ol>
        <li>Change Summary and Business Justification</li>
        <li>Systems and Environments Affected</li>
        <li>Implementation Window and Freeze Conflicts</li>
        <li>Pre-Deployment Validation Checklist</li>
        <li>Testing Evidence and Acceptance Criteria</li>
        <li>Backout and Rollback Strategy</li>
        <li>Communication Plan (before/during/after)</li>
        <li>Post-Change Verification and Sign-off</li>
      </ol>

      <h3>Approval Matrix</h3>
      <ul>
        <li>Requester</li>
        <li>Service Owner</li>
        <li>Security Reviewer</li>
        <li>Change Advisory Board (for high risk)</li>
      </ul>

      <h3>Rollback Snippet</h3>
      <pre><code>If failure criteria are triggered (error rate above threshold, unavailable core feature, or data integrity issue), rollback begins within 10 minutes and incident process is activated.</code></pre>
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
