### Add registry key
```
reg.exe add HKLM\SOFTWARE\Microsoft\CurrentVersion\RunOnce /v &lt;name&gt; /t reg_sz /d &lt;file&gt;.exe
```

### Execute
```
runonce.exe /r
```


