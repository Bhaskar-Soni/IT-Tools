### Convert SID to objectname
```
$objSid = New-Object System.Security.Principal.SecurityIdentifier("&lt;sid&gt;")
$objUser = $objSid.Translate([System.Security.Principal.NTAccount])
$objUser.Value
```

### Convert objectname to SID
```
$objUser = New-Object System.Security.Principal.NTAccount("&lt;name&gt;")
$strSid = $objUser.Translate([System.Security.Principal.SecurityIdentifier])
$strSid.Value
```

### Convert localobject to SID
```
$objUser = New-Object System.Security.Principal.NTAccount("&lt;objectname&gt;")
$strSid = $objUser.Translate([System.Security.Principal.SecurityIdentifier])
$strSid.Value
```


