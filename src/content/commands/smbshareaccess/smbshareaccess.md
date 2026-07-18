### Get permissions for smb share
```
Get-SmbShareAccess -Name "&lt;name&gt;"
```

### Grant full permission to everybody
```
Grant-SmbShareAccess -Name "&lt;name&gt;" -AccountName "Everyone" -AccessRight Full -Force
```


