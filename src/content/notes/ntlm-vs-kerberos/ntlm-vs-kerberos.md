## NTLM vs Kerberos (quick comparison)

Feature | NTLM | Kerberos
--- | --- | ---
Auth model | Challenge-response | Ticket-based
Mutual auth | Limited | Yes
Delegation support | Weak | Strong (constrained/resource-based)
Performance | More repetitive handshakes | Better for repeated service access
Security posture | Legacy, more relay-prone | Modern AD default (preferred)

## Why Kerberos is preferred
* Better cryptographic design.
* Ticketing reduces password exposure in transit.
* Stronger support for enterprise SSO.

## Why NTLM still appears
* Legacy applications.
* Misconfigured SPNs.
* Fallback when Kerberos fails.

## Hardening notes
* Reduce NTLM usage and audit fallback events.
* Fix SPN and DNS issues causing Kerberos failures.
* Enforce SMB signing / EPA where applicable.
* Monitor unusual authentication patterns.
