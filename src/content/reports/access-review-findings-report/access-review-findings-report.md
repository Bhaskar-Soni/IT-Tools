# Access Review Findings Report

## Executive Summary
This report summarizes periodic access review outcomes for repository users, privileged roles, and automation identities.

## Review Scope
* Human user accounts with read/write/admin permissions.
* Service accounts and CI/CD identities.
* Integration tokens and external app permissions.

## Review Criteria
* Business need and role alignment.
* Least privilege compliance.
* MFA enforcement for privileged/write accounts.
* Dormant or orphaned identity detection.

## Findings Overview
Finding | Severity | Observation
--- | --- | ---
Stale write access on inactive contributors | Medium | Access not revoked within target window
Over-scoped integration tokens | High | Some tokens exceed required scope
Service account ownership gaps | High | Missing primary/backup owner attribution
MFA coverage for privileged users | Low | Mostly compliant with minor follow-up

## Remediation Actions
1. Remove inactive write users older than threshold.
2. Re-scope high-privilege tokens to minimum permissions.
3. Assign accountable owners for every service identity.
4. Enforce quarterly access certification cadence.

## Metrics
* Total privileged accounts reviewed.
* Percentage of identities with validated business owner.
* Number of revoked stale accounts.
* Time-to-remediate access findings.

## Conclusion
Access governance is functional but needs tighter automation around stale access revocation and token scope validation.
