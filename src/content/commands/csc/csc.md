### Compile csharp to exe (dont print warnings or logo)
```
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe /warn:0 /nologo .\&lt;file&gt;.cs
```

### Compile to dll
```
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe /target:library /out:&lt;file&gt;.dll &lt;file&gt;.cs
```

### Compile with hidden window
```
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe  /target:winexe .\&lt;file&gt;.cs
```

### Import library and compile 
```
C:\Windows\Microsoft.NET\Framework64\v4.0.30319\csc.exe &lt;file&gt;.cs -r:"C:\Windows\Microsoft.NET\assembly\GAC_MSIL\System.Management.Automation\v4.0_3.0.0.0__31bf3856ad364e35\System.Management.Automation.dll"
```


