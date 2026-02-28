# Secrets Management Policy

## 1. Purpose
Define how secrets are created, stored, accessed, rotated, and revoked for repository and delivery workflows.

## 2. Scope
Applies to API keys, tokens, passwords, certificates, SSH keys, signing keys, and any credential used by humans or automation.

## 3. Approved Storage Methods
* Dedicated secret manager or encrypted CI/CD secret store.
* Environment-specific secret scopes.
* Access controlled by role and need-to-know.

## 4. Prohibited Practices
* Hardcoding secrets in source code.
* Committing `.env` files with real secrets.
* Sharing credentials over chat/email/tickets.
* Reusing production secrets in non-production.

## 5. Secret Lifecycle Requirements
Secret Type | Rotation Requirement
--- | ---
Privileged API tokens | Every 30 days or after role change
Service account credentials | Every 60 days
Signing keys/certificates | Before expiry and on compromise
Emergency credentials | Rotate immediately after use

## 6. Access Control
* Human access must require MFA-enabled identity.
* Machine access should use short-lived credentials where supported.
* All secret read/write operations must be auditable.

## 7. Exposure Response
1. Revoke exposed secret immediately.
2. Rotate all potentially related credentials.
3. Review logs for misuse window.
4. Open incident if high-impact exposure is suspected.

## 8. Validation and Scanning
* Secret scanning must run on pull requests and default branch.
* Historical scanning must be run periodically.
* Findings must be triaged with defined SLA.

## 9. Exceptions
Any exception must be documented, approved, risk-assessed, and time-limited.

## 10. Review Cycle
Review policy at least annually and after any secret exposure incident.

## 11. Secret Classification
Secret Type | Classification | Examples
--- | --- | ---
Critical | Highest sensitivity | Production signing keys, root tokens
High | Sensitive operational | CI deploy tokens, DB credentials
Standard | Restricted internal | Non-production service credentials

## 12. Handling Requirements by Classification
* Critical secrets require dual-control for rotation where feasible.
* High secrets require explicit owner and documented rotation schedule.
* Standard secrets must still use approved secret storage.

## 13. Repository Hygiene Controls
* Pre-commit or CI secret scanning should block known credential patterns.
* Incident workflow must be triggered for verified leaked credentials.
* Historical commit cleanup procedures must be available for emergency response.

## 14. Metrics
* Percentage of secrets with named owner.
* Percentage of secrets rotated on schedule.
* Secret exposure incidents per quarter.

## 15. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next scheduled review: 2027-02-28
