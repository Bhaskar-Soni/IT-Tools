### Get status of specific service
```
Get-Service -Name &lt;name&gt;
```

### Stop a specific service
```
Stop-Service -Name &lt;name&gt; -Force
```

### Disable service
```
Set-Service -Name &lt;name&gt; -StartupType Disabled
```

### Start RDP service
```
Start-Service -Name TermService
```


