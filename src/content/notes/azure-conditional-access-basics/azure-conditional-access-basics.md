## Core idea
Azure Conditional Access (CA) evaluates sign-in conditions (user, app, location, device risk) and then enforces controls (MFA, compliant device, block).

## Useful components
* Assignments: users/groups, cloud apps, conditions.
* Access controls: grant (MFA, compliant device) and session (sign-in frequency).
* Report-only mode: test policies safely before enforcement.

## Baseline policy examples
* Require MFA for admin roles.
* Block legacy authentication.
* Require compliant device for sensitive apps.
* Block sign-ins from unknown/risky countries (if business allows).

## Safe rollout approach
1. Create policy in `Report-only`.
2. Validate impact in sign-in logs.
3. Exclude break-glass account.
4. Switch to `On` after validation.

## Monitoring
* Entra admin center > Sign-in logs.
* Review failures by:
  * Conditional Access status
  * Client app (legacy vs modern auth)
  * User risk and sign-in risk

## Common mistakes
* No emergency access account exclusion.
* Enabling multiple blocking rules at once.
* Ignoring service accounts and automation identities.
