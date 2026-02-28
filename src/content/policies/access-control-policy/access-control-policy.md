# Access Control Policy

## 1. Purpose
This policy defines how access to repository code, build systems, infrastructure, and sensitive data is granted, reviewed, and revoked.

## 2. Scope
Applies to all contributors, maintainers, automation accounts, CI/CD identities, contractors, and third parties with access to this repository or connected systems.

## 3. Access Principles
* Least privilege by default.
* Need-to-know access for sensitive assets.
* Separation of duties for high-risk operations.
* No shared personal accounts.

## 4. Role-Based Access Model
Role | Typical Permissions | Restrictions
--- | --- | ---
Reader | Read repository and docs | No write access
Contributor | Create branches and pull requests | No direct push to protected branches
Maintainer | Approve PRs, manage releases | Production access only when required
Admin | Repository/security settings | Use only for administrative tasks

## 5. Provisioning Requirements
1. Access request must include business need, requested role, and expiration date for temporary access.
2. Access must be approved by repository owner or delegated maintainer.
3. MFA is required for all accounts with write or admin rights.
4. Privileged access must be time-bound where technically possible.

## 6. Deprovisioning Requirements
* Access must be revoked within 24 hours of role change, contract end, or offboarding.
* Dormant accounts (no activity for 90 days) must be reviewed and disabled unless justified.
* Compromised accounts must be disabled immediately.

## 7. Authentication Controls
* Strong passwords or passkeys are mandatory.
* MFA is mandatory for privileged and write-capable users.
* Token-based access must use scoped tokens with minimum required permissions.
* Long-lived credentials are prohibited unless exception is approved.

## 8. Access Review and Audit
* Quarterly access review for all write/admin users.
* Monthly review of service accounts and automation tokens.
* All admin-level changes must be logged and reviewable.

## 9. Exceptions
* Exceptions require documented business justification, owner, compensating controls, and expiry date.
* Exceptions must be reviewed at least every 30 days.

## 10. Enforcement
Violations may result in access removal, mandatory security review, suspension of privileges, and escalation to repository governance owners.

## 11. Review Cycle
This policy must be reviewed at least annually or after material incidents.

## 12. Governance and Ownership
* Policy owner: Security Lead.
* Control operators: Repository maintainers and platform administrators.
* Approval authority for role changes: Repository owner or delegated approver.

## 13. Mandatory Control Checklist
* MFA enforced for all write/admin users.
* Protected branches enabled for default branch.
* Admin privileges granted only to named individuals.
* Temporary access includes explicit expiry date.

## 14. Metrics
* Number of privileged accounts.
* Percentage of privileged accounts with MFA enabled.
* Count of overdue access reviews.
* Time to deprovision after offboarding event.

## 15. Evidence and Audit Artifacts
* Access request and approval records.
* Quarterly review reports and remediation actions.
* Audit trail of permission changes.

## 16. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next scheduled review: 2027-02-28
