<template>
  <div class="policy-content">
    <h1>Password Policy (Corporate Standard)</h1>

    <section>
      <h2>Policy Overview</h2>
      <p>This policy establishes baseline requirements for all user accounts and system-managed passwords throughout the organization. All employees, contractors, and systems must comply with these standards to maintain security posture and regulatory compliance.</p>
    </section>

    <section>
      <h2>Password Requirements</h2>
      <h3>Minimum Length</h3>
      <ul>
        <li>User passwords: Minimum 12 characters</li>
        <li>Service account passwords: Minimum 16 characters</li>
        <li>API keys and tokens: Minimum 32 characters (alphanumeric)</li>
      </ul>

      <h3>Complexity Requirements</h3>
      <ul>
        <li>At least one uppercase letter (A-Z)</li>
        <li>At least one lowercase letter (a-z)</li>
        <li>At least one number (0-9)</li>
        <li>At least one special character (!@#$%^&*)</li>
        <li>No sequential or repeated characters</li>
        <li>Cannot contain username or easily guessable information</li>
      </ul>
    </section>

    <section>
      <h2>Password Lifecycle</h2>
      <h3>Initial Password</h3>
      <ul>
        <li>Temporary initial passwords must be unique and randomly generated</li>
        <li>Must be changed on first login</li>
        <li>Cannot be reused for 12 months</li>
      </ul>

      <h3>Password Expiration</h3>
      <ul>
        <li>User account passwords: Reset every 90 days</li>
        <li>Service account passwords: Reset every 30 days</li>
        <li>Privileged account passwords: Reset every 15 days</li>
        <li>Users notified at 14 days before expiration</li>
      </ul>

      <h3>Password History</h3>
      <ul>
        <li>System enforces minimum 12 previous passwords cannot be reused</li>
        <li>Passwords must differ by at least 4 characters from previous password</li>
      </ul>
    </section>

    <section>
      <h2>Account Lockout Policy</h2>
      <ul>
        <li>Account locked after 5 failed login attempts</li>
        <li>Lockout duration: 30 minutes</li>
        <li>After 10 failed attempts: 2-hour lockout</li>
        <li>Failed attempts reset after 30 minutes of no activity</li>
      </ul>
    </section>

    <section>
      <h2>Password Usage Guidelines</h2>
      <h3>Required Actions</h3>
      <ul>
        <li>Do not share passwords with anyone, including IT support or management</li>
        <li>Do not write passwords down or store in unsecured locations</li>
        <li>Do not use the same password across multiple systems</li>
        <li>Use a password manager to securely store passwords</li>
        <li>Enable multi-factor authentication (MFA) where available</li>
      </ul>

      <h3>Prohibited Actions</h3>
      <ul>
        <li>No password sharing via email or chat</li>
        <li>No default passwords in production systems</li>
        <li>No hardcoded passwords in application code</li>
        <li>No posting passwords in ticketing systems or documentation</li>
      </ul>
    </section>

    <section>
      <h2>Multi-Factor Authentication (MFA)</h2>
      <ul>
        <li>MFA is mandatory for all privileged accounts</li>
        <li>MFA is strongly recommended for all user accounts</li>
        <li>Supported methods: TOTP, Hardware keys, SMS (fallback only)</li>
        <li>Recovery codes must be stored securely and separately</li>
      </ul>
    </section>

    <section>
      <h2>Special Account Types</h2>
      <h3>Service Accounts</h3>
      <ul>
        <li>Cannot be used for interactive login</li>
        <li>Passwords stored in secure vault only</li>
        <li>Regular audit of service account usage</li>
        <li>Minimum review every 90 days</li>
      </ul>

      <h3>Privileged Accounts</h3>
      <ul>
        <li>Subject to enhanced monitoring and logging</li>
        <li>Shorter password expiration (15 days)</li>
        <li>MFA mandatory</li>
        <li>Usage tracked and audited daily</li>
      </ul>
    </section>

    <section>
      <h2>Violation and Enforcement</h2>
      <ul>
        <li>First violation: Written warning</li>
        <li>Second violation: Mandatory security training</li>
        <li>Third violation: Account suspension or termination (based on severity)</li>
        <li>Sharing privileged credentials: Immediate account lockout and investigation</li>
      </ul>
    </section>

    <section>
      <h2>Policy Compliance</h2>
      <ul>
        <li>All employees must acknowledge this policy upon hire and annually thereafter</li>
        <li>IT will audit compliance quarterly</li>
        <li>Violations will be reported to management and HR</li>
      </ul>
    </section>

    <section>
      <h2>Review and Updates</h2>
      <ul>
        <li>Policy reviewed annually by Information Security team</li>
        <li>Updates made as security landscape evolves</li>
        <li>Significant changes require executive approval</li>
      </ul>
    </section>

    <section>
      <h2>Questions and Support</h2>
      <ul>
        <li>Contact: Security Team (security@company.com)</li>
        <li>For compromised passwords: Report immediately to IT Help Desk</li>
        <li>Password reset support available 24/7</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="less">
.policy-content {
  padding: 0;
  line-height: 1.6;

  h1 {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    font-weight: 700;
  }

  h2 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 2px solid var(--n-color);
    padding-bottom: 0.5rem;
  }

  h3 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  section {
    margin-bottom: 2rem;
  }

  ul {
    margin: 0.5rem 0 1rem 1.5rem;
    padding: 0;

    li {
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin: 0.5rem 0;
  }

  pre {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;

    code {
      font-family: 'Courier New', monospace;
      font-size: 0.9rem;
    }
  }
}
</style>
