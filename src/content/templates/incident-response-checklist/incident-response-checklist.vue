<template>
  <div style="max-width: 900px;">
    <h2>Download Checklist</h2>
    <p>
      A ready-to-use Incident Response Checklist for SOC / DFIR teams.
    </p>

    <div style="display:flex; gap:12px; margin-top: 16px; flex-wrap: wrap;">
      <a
        class="download-btn"
        href="/templates/docx/incident-response-checklist.docx"
        download
      >
        Download DOCX
      </a>

      <a
        class="download-btn"
        href="/templates/pdf/incident-response-checklist.pdf"
        download
      >
        Download PDF
      </a>
    </div>

    <hr style="margin: 24px 0; opacity: 0.2;" />

    <h3>Checklist Sections</h3>
    <ul>
      <li>Detection & Triage</li>
      <li>Containment</li>
      <li>Eradication</li>
      <li>Recovery</li>
      <li>Evidence Collection</li>
      <li>Post-Incident Review</li>
    </ul>
  </div>
</template>

<style scoped>
.download-btn {
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  background: #18a058;
  color: #fff;
  font-weight: 600;
}
.download-btn:hover {
  opacity: 0.9;
}
</style>
