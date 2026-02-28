### Persist using registry run key
```
cp c:\windows\System32\fsquirt.exe C:\temp
C:\temp\fsquirt.exe -Register
reg add "hkcu\software\microsoft\windows\currentversion\run" /v &lt;taskName&gt; /d "$env:appdata\Microsoft\Windows\SendTo\Bluetooth File Transfer.LNK"
```

### Remove persistence
```
reg delete "hkcu\software\microsoft\windows\currentversion\run" /v &lt;taskName&gt; /f
c:\windows\System32\fsquirt.exe -UnRegister
```


