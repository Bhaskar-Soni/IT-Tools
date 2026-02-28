## What it is
Microsoft Entra ID (formerly Azure AD) is a cloud identity provider for users, groups, apps, and access control.

## Key objects
* Tenant: identity boundary for organization.
* User: human or guest identity.
* Group: access management unit.
* Application + Service Principal: app identity and tenant instance.
* Role: administrative permissions.

## Authentication and authorization flow
1. User authenticates (password, MFA, passwordless).
2. Token issued (ID token / access token).
3. App checks token claims and permissions.
4. Conditional Access may block or require controls.

## Security controls to enable early
* MFA for all users, mandatory for admins.
* Disable legacy auth where possible.
* Privileged Identity Management (PIM) for admin roles.
* Conditional Access baseline policies.

## Monitoring essentials
* Sign-in logs: who/where/how.
* Audit logs: changes to users/groups/apps/policies.
* Risk detections: risky users and risky sign-ins.
