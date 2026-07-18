# Third Party Risk Summary Report

## Executive Summary
This report summarizes third-party exposure and identifies vendor-related risks that could impact repository security, compliance, or operations.

## Vendor Exposure Overview
Tier | Typical Access | Risk Profile
--- | --- | ---
High | Sensitive data or privileged integration | Elevated
Medium | Operational dependency with limited data access | Moderate
Low | Minimal access and low operational criticality | Low

## Key Risk Areas
* Token scope and lifecycle management for integrations.
* Vendor outage resilience and fallback plans.
* Security assurance and incident notification adequacy.
* Data handling transparency and retention commitments.

## Findings
Finding | Risk | Recommended Action
--- | --- | ---
Some vendor reviews not refreshed on schedule | Medium | Enforce annual reassessment calendar
Inconsistent offboarding evidence for older integrations | High | Standardize deprovisioning checklist
Limited contractual mapping for notification timelines | Medium | Add contractual control verification

## Priority Actions
1. Re-tier vendors based on current data/access exposure.
2. Require owner assignment per integration.
3. Validate token rotation and least-privilege scopes.
4. Track vendor assurance artifacts in one evidence store.

## Conclusion
Third-party risk is controllable but requires stronger lifecycle discipline (onboarding, reassessment, and offboarding evidence).
