### Disable firewall
```
Set-NetFirewallProfile -Profile Domain,Public,Private -Enabled False
```

### Allow specific tcp port for ingoing traffic
```
New-NetFirewallRule -DisplayName "&lt;name&gt;" -Direction Inbound -LocalPort &lt;port&gt; -Protocol TCP -Action Allow
```

### Block specific tcp port for ingoing traffic
```
New-NetFirewallRule -DisplayName "&lt;name&gt;" -Direction Inbound -LocalPort &lt;port&gt; -Protocol TCP -Action Block
```

### List firewall rule
```
Get-NetFirewallRule -DisplayName "&lt;name&gt;"
```

### Remove firewall rule
```
Remove-NetFirewallRule -DisplayName "&lt;name&gt;"
```


