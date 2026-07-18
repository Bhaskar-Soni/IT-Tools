### Set a new registry value for specific GPO, requires Remote Server Administration Tools - default on domain controller
```
Set-GPPrefRegistryValue -Name '&lt;gpoName&gt;' -Context Computer -Action Create -Key 'HKLM\Software\Microsoft\Windows\CurrentVersion\Run' -ValueName '&lt;name&gt;' -Value 'powershell -c &lt;command&gt;' -Type ExpandString
```


