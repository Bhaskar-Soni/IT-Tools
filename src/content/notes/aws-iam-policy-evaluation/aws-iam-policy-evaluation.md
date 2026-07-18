## Evaluation order (high level)
When AWS evaluates a request, it considers all relevant policy types and calculates allow/deny.

## Important rules
* `Explicit Deny` always wins.
* If no explicit allow exists, result is `Implicit Deny`.
* Effective permission is intersection/combination across identity policy, resource policy, permission boundary, SCP, and session policy.

## Policy sources involved
* Identity-based policies (user/role/managed/inline).
* Resource-based policies (S3 bucket policy, KMS key policy, etc.).
* Service Control Policies (AWS Organizations).
* Permission boundaries.
* Session policies (STS assume-role sessions).

## Practical troubleshooting checklist
1. Confirm who made the request (user/role/session ARN).
2. Check CloudTrail event for action/resource/condition.
3. Search for explicit denies in all policies.
4. Validate SCP and permission boundary constraints.
5. Use IAM Policy Simulator for target action.

## Good practices
* Prefer least privilege.
* Use condition keys (`aws:SourceIp`, `aws:MultiFactorAuthPresent`, tags).
* Separate human and workload roles.
* Review unused permissions regularly.
