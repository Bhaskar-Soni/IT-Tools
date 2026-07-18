## Principle
Least privilege means users, applications, and services get only the minimum permissions required to do their job.

## Why it matters
* Reduces blast radius of account compromise.
* Limits accidental destructive actions.
* Improves auditability and compliance.

## Implementation approach
1. Start with no access by default.
2. Grant role-based access for required tasks only.
3. Separate admin and non-admin accounts.
4. Use just-in-time elevation for privileged tasks.
5. Review and revoke unused access periodically.

## Common anti-patterns
* Shared admin accounts.
* Broad wildcard permissions.
* Permanent privileged roles.
* "Temporary" exceptions never removed.

## Practical checks
* Quarterly permission recertification.
* Alert on new global admin assignments.
* Track inactive privileged accounts.
