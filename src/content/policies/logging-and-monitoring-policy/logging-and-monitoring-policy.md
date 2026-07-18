# Logging And Monitoring Policy

## 1. Purpose
Define mandatory logging, monitoring, and alerting controls required to detect abuse, misconfiguration, and operational risk.

## 2. Scope
Applies to repository audit events, CI/CD pipeline events, deployment logs, authentication events, and security tooling outputs.

## 3. Mandatory Log Sources
* Repository audit logs (membership, permission, branch protection changes).
* Authentication events for maintainers and admins.
* CI/CD pipeline runs, failures, and secret-access events.
* Deployment logs and release metadata.
* Security scanner findings and policy gate results.

## 4. Log Quality Requirements
* UTC timestamps on all systems.
* Sufficient event context (actor, action, target, source).
* No sensitive secret values in logs.
* Logs must be immutable or tamper-evident where possible.

## 5. Retention Standards
Log Type | Minimum Retention
--- | ---
Security and audit logs | 365 days
Application and build logs | 180 days
Debug-level logs | 30 days

## 6. Monitoring and Alerting
* Alerts for privileged access changes.
* Alerts for disabled security controls.
* Alerts for repeated failed authentications.
* Alerts for critical vulnerabilities in default branch.

## 7. Access Control for Logs
* Read access limited to approved operational and security roles.
* Write/delete access must be strictly restricted.
* Administrative log access must itself be logged.

## 8. Review and Response
* Daily review of critical alerts.
* Weekly review of anomalous trends.
* Incident process must be triggered for confirmed compromise indicators.

## 9. Enforcement
Non-compliant components may be blocked from release or access until controls are restored.

## 10. Review Cycle
Policy reviewed annually or after major tooling changes.

## 11. Alert Classification and Response Targets
Alert Class | Response Target
--- | ---
Critical security control bypass | 15 minutes
Suspected account compromise | 30 minutes
High-confidence malicious activity | 1 hour
Operational anomaly | 4 hours

## 12. Detection Engineering Requirements
* Detection rules must include owner, purpose, and test method.
* Rule changes must be versioned and peer reviewed.
* High-value detections should include simulation tests quarterly.

## 13. Data Privacy and Minimization
* Avoid collecting unnecessary personal data in logs.
* Mask or redact sensitive fields where feasible.
* Restrict access to logs containing sensitive metadata.

## 14. Audit Evidence
* Alert review records with analyst notes.
* On-call handoff records for unresolved alerts.
* Monthly monitoring coverage report.

## 15. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next scheduled review: 2027-02-28
