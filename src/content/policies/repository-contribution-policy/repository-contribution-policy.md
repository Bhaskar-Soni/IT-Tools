# Repository Contribution Policy

## 1. Purpose
Define standards for proposing, implementing, and submitting changes to this repository.

## 2. Scope
Applies to all code, content, configuration, scripts, and documentation contributions.

## 3. Branching and Workflow
* Direct pushes to protected branches are prohibited.
* All changes must be submitted through pull requests.
* Branch names should be descriptive (for example: `feature/<name>`, `fix/<name>`, `docs/<name>`).

## 4. Commit Standards
* Commits must be focused and logically grouped.
* Commit messages should follow consistent format (for example: `type(scope): summary`).
* Sensitive data must never be included in commits.

## 5. Quality Requirements
* Changes must pass required checks (lint, type checks, tests where applicable).
* New behavior must include documentation updates.
* Security-impacting changes must include risk notes.

## 6. Documentation Requirements
* Update relevant guides/notes/lists/policies when behavior changes.
* Keep examples and command snippets accurate.
* Remove stale references during refactors.

## 7. Contributor Responsibilities
* Validate local changes before opening PR.
* Respond to review feedback in a timely manner.
* Keep branch synchronized with target base branch.

## 8. Prohibited Actions
* Introducing unreviewed binary artifacts unless required.
* Committing secrets, credentials, or personal data.
* Bypassing branch protection or required checks.

## 9. Enforcement
Non-compliant contributions may be rejected, reverted, or escalated to maintainers.

## 10. Review Cycle
Review policy annually or when workflow tooling changes.

## 11. Change Size and Scope Guidance
* Prefer smaller pull requests with single-purpose scope.
* Large changes should be broken into sequenced, reviewable units.
* Cross-cutting refactors require explicit migration notes.

## 12. Quality Gate Requirements
* Lint/type/test gates must pass before merge.
* Documentation impact must be declared in PR description.
* Security-impacting changes require explicit reviewer attention.

## 13. Contributor Accountability
* Contributor is responsible for regression prevention in changed scope.
* Contributor must address review findings or provide technical rationale.
* Stale PRs may be closed after defined inactivity window.

## 14. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next scheduled review: 2027-02-28
