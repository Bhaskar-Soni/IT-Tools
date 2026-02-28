### Source
https://raw.githubusercontent.com/cobbr/PSAmsi/master/PSAmsiClient.ps1  

### Create scanner
```
$scan = [PSAmsiScanner]::new()
```

### Scan specific string
```
$scan.GetPSAmsiScanResult('&lt;string&gt;')
```

### Scan specific url
```
$scan.GetPSAmsiScanResult([Uri]::new("&lt;url&gt;"))
```

### Scan specific file
```
$scan.GetPSAmsiScanResult([String]::new("&lt;file&gt;"))
```

### Discover which piece of a script is flagged as malicious
```
$signatures = Find-AmsiSignatures -ScriptUri '&lt;url&gt;'
$signatures
```

### Obfuscate only parts of script that are flagged as malicious
```
$miniObfs = Get-MinimallyObfuscated -ScriptUri '&lt;url&gt;'
```


