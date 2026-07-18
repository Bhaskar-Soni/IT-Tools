<template>
  <div class="template-page">
    <h2>Business Continuity Plan Template</h2>
    <p>
      Prepare service continuity, recovery priorities, and emergency communication workflows for major disruptions.
    </p>

    <div class="template-content">
      <div class="download-row">
        <a class="download-btn" href="/templates/docx/business-continuity-plan-template.docx" download>
          <n-icon size="16" :component="downloadIcon" /> Download DOCX
        </a>
        <a class="download-btn" href="/templates/pdf/business-continuity-plan-template.pdf" download>
          <n-icon size="16" :component="downloadIcon" /> Download PDF
        </a>
      </div>

      <h3>Continuity Planning Blocks</h3>
      <ul>
        <li>Critical Services and Maximum Tolerable Downtime</li>
        <li>Recovery Time Objective (RTO) and Recovery Point Objective (RPO)</li>
        <li>Dependency Map (vendors, cloud, identity, networking)</li>
        <li>Primary/Secondary Recovery Teams and Contacts</li>
        <li>Manual Workaround Procedures</li>
        <li>Escalation and Stakeholder Communication Plan</li>
      </ul>

      <h3>Incident Activation Criteria</h3>
      <pre><code>Activate BCP if: (1) critical service outage exceeds 30 minutes, (2) site-level access is lost, or (3) data corruption risk is confirmed.</code></pre>

      <h3>Tabletop Exercise Checklist</h3>
      <ol>
        <li>Run one technical failover scenario and one supplier-outage scenario.</li>
        <li>Record timing for decision, containment, and recovery milestones.</li>
        <li>Track gaps and assign remediation owners within 5 business days.</li>
      </ol>
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
