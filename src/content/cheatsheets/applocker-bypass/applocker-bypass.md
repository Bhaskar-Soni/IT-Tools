### InstallUtil
```
# compile
C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe /reference:"c:\Windows\assembly\GAC_MSIL\System.Management.Automation\1.0.0.0__31bf3856ad364e35\System.Management.Automation.dll" /out:&lt;resultFile&gt;.exe &lt;sourceFile&gt;.cs
```

### Run
```
C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe /logfile= /LogToConsole=false /U &lt;resultFile&gt;.exe
```


