### Uses port 5985,5986 - activate remote powershell
```
Enable-PSRemoting -Force
```

### Connect to remote device and execute single command
```
Invoke-Command -ComputerName &lt;rhost&gt; -ScriptBlock { &lt;command&gt; } -credential &lt;user&gt;
```

### Execute local script remotely
```
Invoke-Command -ComputerName &lt;rhost&gt; -ScriptBlock { &lt;command&gt; } -credential &lt;user&gt; -FilePath C:\&lt;localScript&gt;.ps1
```

### Start remote session
```
Enter-PSSession -ComputerName &lt;rhost&gt; -Credential &lt;user&gt;
```


