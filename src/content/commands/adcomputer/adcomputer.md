### Show all properties of a specific computer object
```
Get-ADComputer &lt;computer&gt; -Properties *
```


### Add a new value for the attribute "msDS-AllowedToDelegateTo" for a computer1 (Constrained Delegation)
```
Set-ADComputer -Identity &lt;computer1&gt; -Add @{'msDS-AllowedToDelegateTo'=@('foo/&lt;computer2&gt;','CIFS/&lt;fqdnComputer2&gt;')}
```

### Remove (Constrained Delegation)
```
Get-ADComputer -Identity &lt;computer1&gt; | Set-ADAccountControl ‑TrustedToAuthForDelegation $false
Set-ADComputer -Identity &lt;computer1&gt; -Clear 'msDS-AllowedToDelegateTo'
```


### Add a new value for the attribute "PrincipalsAllowedToDelegateToAccount" for a computer1 (Resource Constrained Delegation)
```
Set-ADComputer -Identity &lt;computer1&gt; -PrincipalsAllowedToDelegateToAccount (Get-ADComputer &lt;computer2&gt;)
```

### Remove (Resource Constrained Delegation)
```
Set-ADComputer &lt;computer1&gt; -PrincipalsAllowedToDelegateToAccount $Null
```


