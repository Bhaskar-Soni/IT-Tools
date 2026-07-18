## Incident response lifecycle

Phase | Goal | Example Activities
--- | --- | ---
Preparation | Build readiness | Playbooks, tooling, logging, tabletop exercises
Identification | Confirm incident | Triage alerts, validate indicators, scope impact
Containment | Limit damage | Isolate hosts, block IOCs, disable compromised accounts
Eradication | Remove root cause | Remove malware, patch vulnerabilities, rotate secrets
Recovery | Restore operations | Rebuild systems, monitor for reinfection, staged return
Lessons learned | Improve program | Post-incident review, control improvements, documentation updates

## Minimum artifacts to keep
* Timeline of events.
* Systems/accounts affected.
* Indicators of compromise (IOCs).
* Actions taken and decision rationale.
* Final root cause and preventive actions.

## Operational tips
* Preserve evidence before destructive cleanup.
* Keep clear owner per response task.
* Communicate status with consistent cadence.
