### List shares
```
Get-SmbShare -name "&lt;rhost&gt;"
```

### Create share (everyone/jeder)
```
New-SmbShare -Name "&lt;name&gt;" -Path "&lt;path&gt;" -FullAccess "&lt;domain&gt;\&lt;user&gt;"
```

### Remove share
```
Remove-SmbShare -Name "&lt;name&gt;"
```


