### Source 
https://github.com/NetSPI/MicroBurst

### Import
```
Import-Module MicroBurst.psm1
```

### Enumerate subdomains for given tenant
```
Invoke-EnumerateAzureSubDomains -Base &lt;tenant&gt; -Verbose
```

### Enumerate Azure Blobs
```
Invoke-EnumerateAzureBlobs -Base &lt;tenant&gt; defcorp 
```


