### Source
https://github.com/wixtoolset/wix3

### Generate msi file 
```
.\candle.exe &lt;file&gt;.wxs
.\light.exe -ext WixUIExtension -cultures:en-us -dcl:high -out &lt;file&gt;.msi &lt;file&gt;.wixobj
```

### Compile DLL for custom DLL entry msi (newCustomAction.dll will be created at runtime)
```
public static ActionResult &lt;name&gt; in &lt;file&gt;.cs must correspond to DllEntry="name" in &lt;file&gt;.wsx

C:\Windows\Microsoft.NET\Framework64\v2.0.50727\csc.exe /r:C:\&lt;pathToWix&gt;\Microsoft.Deployment.WindowsInstaller.dll /target:library /out:&lt;file&gt;.CA.dll .\&lt;file&gt;.cs
C:\&lt;pathToWix&gt;\sdk\MakeSfxCA.exe C:\&lt;pathTo&gt;\&lt;newCustomAction&gt;.dll C:\&lt;pathToWix&gt;\sdk\x64\sfxca.dll C:\&lt;pathToWix&gt;\&lt;file&gt;.dll C:\&lt;pathToWix&gt;\Microsoft.Deployment.WindowsInstaller.dll
```

### Custom action type numbers
```
Number              Action
1250, 3298, 226     EXE or system command 
1126, 102           VBScript 
1125, 101           JScript 
1218, 194           Binary table: EXE 
65                  Binary table: DLL 
1746                EXE in from installation directory 
```


