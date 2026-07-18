# Encryption And Key Management Policy

## 1. Purpose
Define encryption and key management requirements for data handled by this repository and related services.

## 2. Scope
Applies to source control integrations, CI/CD pipelines, artifacts, backups, logs, and secrets stores.

## 3. Encryption Requirements
* Data in transit must use TLS 1.2+.
* Data at rest must use strong encryption provided by platform or application layer.
* Sensitive exports and backups must be encrypted before transfer or storage.

## 4. Approved Cryptographic Baseline
Control | Minimum Requirement
--- | ---
Transport security | TLS 1.2 or higher
Symmetric encryption | AES-256 (or platform equivalent)
Asymmetric encryption | RSA-2048+ or ECC equivalent
Hashing for integrity | SHA-256 or stronger

## 5. Key Management Requirements
* Keys must be generated and stored in approved key management systems.
* Keys must never be hardcoded in source code.
* Key access must be restricted by role and logged.
* Separate keys across environments (dev/test/prod).

## 6. Key Rotation and Revocation
* Production encryption keys must be rotated periodically per risk level.
* Immediate revocation required on suspected compromise.
* Rotation events must include validation of dependent services.

## 7. Certificate Management
* Certificates must be issued by approved CAs.
* Expiration monitoring must alert before renewal windows.
* Expired or weak certificates must be removed promptly.

## 8. Exception Handling
Any cryptographic exception requires documented approval, compensating controls, and expiry date.

## 9. Review Cycle
Review annually or after cryptographic baseline updates.

## 10. Key Custodianship and Separation
* Each key must have a named owner and backup owner.
* Production and non-production keys must be segregated.
* Access to key material must be limited to authorized roles.

## 11. Cryptographic Deprecation
* Deprecated algorithms and weak cipher suites must be removed within defined migration windows.
* New systems must follow approved cryptographic baseline from day one.

## 12. Key Rotation Evidence
* Rotation events must be logged with timestamp and operator.
* Post-rotation validation of dependent systems is mandatory.
* Emergency rotations require incident record linkage.

## 13. Metrics
* Percentage of keys rotated within policy window.
* Count of weak/legacy cryptographic configurations.
* Certificate expiration incidents.

## 14. Document Control
Version: 1.0  
Effective date: Immediate  
Last updated: 2026-02-28  
Next scheduled review: 2027-02-28
