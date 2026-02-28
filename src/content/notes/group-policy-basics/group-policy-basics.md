## Purpose
Group Policy centrally configures Windows settings for users and computers in Active Directory.

## Core concepts
* GPO: Group Policy Object containing settings.
* Scope of management: Site, Domain, Organizational Unit (OU).
* Link order + inheritance decide effective policy.
* Security filtering and WMI filters refine targeting.

## Processing order
`Local -> Site -> Domain -> OU`

Later-applied policy can overwrite earlier conflicting settings.

## Useful admin commands
```
gpupdate /force
gpresult /r
gpresult /h gp-report.html
```

## Operational best practices
* Keep GPOs small and purpose-specific.
* Use test OU before production rollout.
* Avoid unnecessary "Block Inheritance".
* Document owner and change reason per GPO.
