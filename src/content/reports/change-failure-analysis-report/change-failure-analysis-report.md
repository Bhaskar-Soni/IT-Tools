# Change Failure Analysis Report

## Executive Summary
This report analyzes failed or rolled-back changes to identify systemic causes and improve change reliability.

## Scope
* Failed deployments and emergency rollbacks.
* Pipeline pass-but-production-fail scenarios.
* Changes requiring hotfix intervention.

## Failure Pattern Analysis
Failure Type | Frequency | Primary Cause
--- | --- | ---
Config mismatch | Medium | Environment drift and assumption gaps
Insufficient test coverage | Medium | Missing edge-case validation
Dependency/version conflicts | Low-Medium | Unpinned or incompatible updates
Operational timing issue | Low | Change window or sequencing mismatch

## Contributing Factors
* Large multi-scope change batches.
* Incomplete pre-change impact analysis.
* Weak rollback rehearsal for high-impact changes.

## Corrective Actions
1. Require explicit risk and blast-radius section in change records.
2. Increase staged rollout usage for high-impact changes.
3. Add post-change validation checklist for critical services.
4. Enforce retrospective review for all emergency changes.

## Metrics to Track
* Change failure rate.
* Rollback rate by change category.
* Mean time to recovery from failed changes.

## Conclusion
Change failures are primarily process-driven and can be reduced with stricter pre-change discipline and staged execution patterns.
