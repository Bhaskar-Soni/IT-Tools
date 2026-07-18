## Shared responsibility model
Cloud security is split between provider and customer.

## Usually provider-managed
* Physical data center security.
* Hardware lifecycle and host infrastructure.
* Core managed service platform availability.

## Usually customer-managed
* Identity and access management.
* Data classification, encryption choices, key management design.
* Network segmentation and security groups.
* OS/application hardening for IaaS workloads.
* Logging, alerting, incident response process.

## By service model
* IaaS: customer controls most layers above hardware.
* PaaS: provider manages more runtime/platform.
* SaaS: customer mainly controls identity, data, and configuration.

## Common gap areas
* Public storage buckets.
* Over-permissive IAM roles.
* Missing MFA on privileged accounts.
* No centralized logs and detections.

## Quick operating baseline
1. Enforce MFA + SSO.
2. Apply least privilege with periodic access reviews.
3. Enable audit logs in all regions/subscriptions.
4. Protect backups and test restoration.
