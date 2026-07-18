<template>
  <div class="template-content">
    <h1>Project Proposal Template</h1>
    
    <section>
      <h2>Executive Summary</h2>
      <p>Brief overview of the project, objectives, and expected outcomes.</p>
    </section>

    <section>
      <h2>Project Objectives</h2>
      <ul>
        <li>Objective 1: [Description]</li>
        <li>Objective 2: [Description]</li>
        <li>Objective 3: [Description]</li>
      </ul>
    </section>

    <section>
      <h2>Scope</h2>
      <h3>In Scope</h3>
      <ul>
        <li>Feature/Task 1</li>
        <li>Feature/Task 2</li>
        <li>Feature/Task 3</li>
      </ul>

      <h3>Out of Scope</h3>
      <ul>
        <li>Feature/Task A</li>
        <li>Feature/Task B</li>
      </ul>
    </section>

    <section>
      <h2>Timeline</h2>
      <table>
        <tr>
          <th>Phase</th>
          <th>Duration</th>
          <th>Deliverables</th>
        </tr>
        <tr>
          <td>Planning</td>
          <td>2 weeks</td>
          <td>Requirements doc</td>
        </tr>
        <tr>
          <td>Development</td>
          <td>8 weeks</td>
          <td>Code, tests</td>
        </tr>
        <tr>
          <td>Testing</td>
          <td>2 weeks</td>
          <td>QA report</td>
        </tr>
        <tr>
          <td>Deployment</td>
          <td>1 week</td>
          <td>Live system</td>
        </tr>
      </table>
    </section>

    <section>
      <h2>Budget</h2>
      <ul>
        <li>Development: $X</li>
        <li>Infrastructure: $X</li>
        <li>Contingency (10%): $X</li>
        <li><strong>Total: $X</strong></li>
      </ul>
    </section>

    <section>
      <h2>Team</h2>
      <ul>
        <li>Project Manager: [Name]</li>
        <li>Lead Developer: [Name]</li>
        <li>QA Lead: [Name]</li>
      </ul>
    </section>

    <section>
      <h2>Success Criteria</h2>
      <ul>
        <li>All features implemented on time</li>
        <li>Zero critical bugs at release</li>
        <li>Performance meets benchmarks</li>
        <li>User acceptance testing passed</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// No component logic needed
</script>

<style scoped>
.template-content {
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

ul {
  margin-left: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #f5f5f5;
  font-weight: bold;
}
</style>
