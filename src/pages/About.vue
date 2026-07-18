<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({ title: 'About - IT-Tools' });
</script>

<template>
  <section class="about-page">
    <h1>About IT-Tools</h1>

    <p class="intro">
      IT-Tools is a practical cybersecurity and systems knowledge platform built for people who want signal, not noise.
      It brings tools, cheatsheets, guides, commands, scripts, notes, templates, policies, reports, and curated links
      into one focused workflow.
    </p>

    <div class="about-grid">
      <article class="about-card">
        <h2>Why IT-Tools</h2>
        <ul>
          <li><strong>Actionable first:</strong> content designed for real work, labs, and assessments.</li>
          <li><strong>Structured learning:</strong> categorized sections for faster navigation and retention.</li>
          <li><strong>Operational depth:</strong> networking, security operations, reconnaissance, pentesting, and investigation.</li>
        </ul>
      </article>

      <article class="about-card">
        <h2>What You Can Do Here</h2>
        <ul>
          <li>Use browser-based utilities for day-to-day security and engineering tasks.</li>
          <li>Reference quick commands and cheatsheets while testing or troubleshooting.</li>
          <li>Follow practical guides and notes to build stronger technical fundamentals.</li>
          <li>Reuse ready templates, policies, and reports for delivery and documentation.</li>
        </ul>
      </article>
    </div>

    <article class="about-card direction">
      <h2>Our Direction</h2>
      <p>
        IT-Tools v1.0 is focused on being a reliable, high-utility reference for practitioners.
        The goal is simple: make complex technical work faster, clearer, and more repeatable.
      </p>
    </article>
  </section>
</template>

<style scoped>
.about-page {
  max-width: 980px;
  margin: 50px auto 0;
  padding: 0 16px 28px;
}

h1 {
  text-align: center;
  margin: 0 0 22px;
  font-size: clamp(2rem, 4vw, 2.6rem);
  line-height: 1.1;
}

.intro {
  margin: 0 auto 20px;
  max-width: 860px;
  text-align: center;
  line-height: 1.65;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.about-card {
  border: 1px solid #30363d;
  background: #161b22;
  padding: 16px;
  border-radius: 8px;
}

.about-card h2 {
  margin: 0 0 10px;
  font-size: 1.15rem;
}

.about-card p {
  margin: 0;
  line-height: 1.65;
}

ul {
  margin: 0;
  padding-left: 18px;
  line-height: 1.65;
}

.direction {
  margin-top: 14px;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>


