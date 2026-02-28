# Code Review And Pull Request Policy

## 1. Purpose
Standardize pull request quality and review practices to maintain security, reliability, and maintainability.

## 2. Scope
Applies to all pull requests that modify repository content, code, scripts, or configuration.

## 3. Pull Request Minimum Requirements
* Clear summary of what changed and why.
* Linked issue/task reference where applicable.
* Risk and rollback notes for impactful changes.
* Evidence of local or CI validation.

## 4. Review Expectations
Reviewers must evaluate:
* Functional correctness.
* Security and secret-handling risks.
* Performance and reliability impact.
* Documentation and migration impact.
* Readability and maintainability.

## 5. Approval Rules
Change Type | Minimum Reviews
--- | ---
Low-risk content updates | 1 maintainer approval
Code/configuration changes | 1-2 qualified approvals
Security-sensitive changes | Security-aware reviewer required
Protected branch changes | All required checks + approvals

## 6. Merge Criteria
* Required CI checks pass.
* Required reviewers approved.
* No unresolved review comments.
* No known critical/high security findings introduced.

## 7. Fast-Track / Emergency Changes
* Allowed only for production-impacting incidents.
* Requires explicit maintainer acknowledgement.
* Mandatory follow-up review after merge within 24 hours.

## 8. Rework and Re-approval
* Significant post-approval changes require re-review.
* Force-push is allowed only when preserving review context.

## 9. Enforcement
PRs not meeting this policy may be blocked or closed until requirements are satisfied.

## 10. Review Cycle
Policy reviewed annually or after major process/tooling changes.

## 11. Reviewer Assignment Guidance
* Assign at least one domain-aware reviewer for impacted subsystem.
* Security-sensitive changes require security-aware reviewer.
* Avoid self-approval on high-risk changes.

## 12. Review Quality Standard
A valid review should include:
* Risk assessment comments (security/performance/reliability).
* Verification of tests and failure modes.
* Confirmation that docs and operational impacts are addressed.

## 13. Merge Strategy Guidance
* Use merge strategy consistent with project history policy.
* Avoid history rewrites on protected branches.
* Use fast-track merges only under documented emergency procedures.

## 14. Metrics
* Average PR lead time to merge.
* Reopen/revert rate by change type.
* Percentage of PRs merged with all required approvals.

## 15. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next scheduled review: 2027-02-28
