## Password spraying (defensive note)
Password spraying is a technique where attackers try a small set of common passwords across many accounts to avoid lockouts.

## Typical indicators
* Many accounts targeted from one IP/device.
* Repeated failed logons with low attempts per account.
* Bursts around shift changes or after leaked password dumps.

## Prevention controls
* Enforce MFA for all external access.
* Block legacy authentication protocols.
* Smart lockout with tuned thresholds.
* Password ban list (common/weak passwords).
* Conditional Access or geolocation restrictions.

## Detection ideas
* Alert on high failed-login spread across users.
* Correlate impossible travel + failed attempts.
* Monitor sign-in risk/risky users.

## Response workflow
1. Identify affected users and source patterns.
2. Block source infrastructure quickly.
3. Reset potentially exposed credentials.
4. Enforce stronger controls for impacted apps.
