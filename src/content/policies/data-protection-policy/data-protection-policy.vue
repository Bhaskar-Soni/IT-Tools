<template>
  <div class="policy-content">
    <h1>Data Protection Policy</h1>
    
    <section>
      <h2>Purpose</h2>
      <p>Establish guidelines for handling, protecting, and managing sensitive data.</p>
    </section>

    <section>
      <h2>Scope</h2>
      <p>This policy applies to all employees, contractors, and third parties handling company data.</p>
    </section>

    <section>
      <h2>Key Principles</h2>
      
      <h3>Data Minimization</h3>
      <ul>
        <li>Collect only necessary data</li>
        <li>Delete data when no longer needed</li>
        <li>Maintain accurate records</li>
      </ul>

      <h3>Confidentiality</h3>
      <ul>
        <li>Encrypt sensitive data at rest</li>
        <li>Use TLS/HTTPS in transit</li>
        <li>Limit access to authorized personnel</li>
      </ul>

      <h3>Integrity</h3>
      <ul>
        <li>Implement change tracking</li>
        <li>Maintain audit logs</li>
        <li>Regular backups and testing</li>
      </ul>
    </section>

    <section>
      <h2>Data Classification</h2>
      <table>
        <tr>
          <th>Level</th>
          <th>Examples</th>
          <th>Protection</th>
        </tr>
        <tr>
          <td>Public</td>
          <td>Company news</td>
          <td>No restrictions</td>
        </tr>
        <tr>
          <td>Internal</td>
          <td>Policies</td>
          <td>Restricted access</td>
        </tr>
        <tr>
          <td>Confidential</td>
          <td>Customer data</td>
          <td>Encryption required</td>
        </tr>
        <tr>
          <td>Restricted</td>
          <td>Trade secrets</td>
          <td>Maximum security</td>
        </tr>
      </table>
    </section>

    <section>
      <h2>Compliance</h2>
      <ul>
        <li>GDPR compliance mandatory</li>
        <li>Regular security audits</li>
        <li>Employee training required</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
// No component logic needed
</script>

<style scoped>
.policy-content {
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
