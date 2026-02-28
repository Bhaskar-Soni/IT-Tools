## What is AD CS
Active Directory Certificate Services (AD CS) is Microsoft's PKI stack for issuing and managing digital certificates.

## Core components
* Certification Authority (CA): issues and signs certs.
* Certificate template: defines enrollment and usage constraints.
* CRL/OCSP: revocation checking.
* Enrollment endpoints: request/renew workflows.

## Common enterprise uses
* User and machine authentication.
* Smart card / certificate-based logon.
* TLS certificates for internal services.
* Code signing and secure email.

## High-risk misconfiguration themes
* Overly permissive certificate templates.
* Enrollment rights granted too broadly.
* Templates allowing dangerous EKUs without controls.
* Weak monitoring of certificate issuance activity.

## Defensive baseline
1. Review and restrict template enrollment permissions.
2. Remove deprecated/unused templates.
3. Monitor issuance and failed enrollment events.
4. Protect CA private keys and backup material.
