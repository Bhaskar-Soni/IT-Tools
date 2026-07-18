# Infrastructure Configuration Baseline Policy

## 1. Purpose
Define minimum secure configuration standards for infrastructure components supporting repository operations.

## 2. Scope
Applies to servers, containers, cloud resources, CI/CD runners, and network-facing services used by this project.

## 3. Baseline Configuration Principles
* Secure-by-default settings.
* Least functionality and minimal exposed surface.
* Configuration as code preferred for repeatability.
* Environment separation (dev/test/prod).

## 4. Minimum Baseline Requirements
Domain | Requirement
--- | ---
Identity | Strong auth, MFA for privileged control planes
Network | Deny-by-default ingress, explicit allow rules
System | Hardened OS settings, unnecessary services disabled
Logging | Audit and security logs enabled and centralized
Patch state | Timely patching aligned with severity SLAs

## 5. Drift Management
* Baseline drift must be detected through periodic checks.
* Unauthorized drift requires remediation and root-cause review.
* Baseline exceptions must be documented and approved.

## 6. Change and Approval
* Baseline changes require peer review and documented impact analysis.
* Security-impacting baseline updates require security owner approval.

## 7. Validation and Testing
* Validate baselines before promotion to production.
* Include rollback plan for baseline changes.
* Perform periodic compliance scans against defined baseline.

## 8. Metrics
* Baseline compliance percentage by environment.
* Number of unresolved drift findings.
* Mean time to remediate drift.

## 9. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next review date: 2027-02-28
