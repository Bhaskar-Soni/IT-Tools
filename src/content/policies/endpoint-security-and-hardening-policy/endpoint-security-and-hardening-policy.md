# Endpoint Security And Hardening Policy

## 1. Purpose
Define baseline endpoint security controls for systems used to access, build, or manage this repository.

## 2. Scope
Applies to developer workstations, admin endpoints, and build agents with repository or deployment access.

## 3. Baseline Endpoint Controls
* Full-disk encryption enabled.
* Screen lock with inactivity timeout.
* Supported OS versions only.
* Host firewall enabled.
* Anti-malware/EDR enabled and healthy.

## 4. Identity and Access Controls
* MFA required for repository and privileged platform access.
* Local admin rights restricted to approved users.
* Separate privileged and non-privileged accounts for high-risk tasks.

## 5. Patch and Vulnerability Management
* Critical patches deployed within 48 hours.
* High-severity patches deployed within 7 days.
* Unsupported software must be removed or isolated.

## 6. Device Compliance Monitoring
* Non-compliant endpoints may be blocked from privileged systems.
* Compliance signals should be continuously evaluated where tooling allows.

## 7. Data Protection Requirements
* Sensitive files must not be stored unencrypted on endpoints.
* Repository credentials/tokens must use approved secure storage.
* Removable media use must be restricted for sensitive data.

## 8. Incident Handling for Endpoints
1. Isolate suspected compromised endpoint.
2. Revoke active tokens/sessions.
3. Perform forensic triage and reimage if needed.
4. Re-enable access only after security validation.

## 9. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next review date: 2027-02-28
