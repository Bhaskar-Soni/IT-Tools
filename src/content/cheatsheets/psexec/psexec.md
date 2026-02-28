### Source
https://live.sysinternals.com/PsExec.exe  
https://live.sysinternals.com/PsExec64.exe  

### Run command as another user using a password or hash
```
.\psexec.exe -accepteula -u &lt;user&gt; -p &lt;lm&gt;:&lt;ntlm&gt; &lt;command&gt;
```

### Open remote shell
```
.\psexec.exe -accepteula -u &lt;domain&gt;\&lt;user&gt; -p &lt;password&gt; \\&lt;rhost&gt;
```

### Start cmd.exe as nt authority\system
```
.\psexec.exe -i -d -s cmd.exe
```


