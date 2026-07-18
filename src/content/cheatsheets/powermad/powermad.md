### Source
https://raw.githubusercontent.com/Kevin-Robertson/Powermad/master/Powermad.ps1  

### Add new machine account to domain
```
New-MachineAccount -MachineAccount &lt;newComputer&gt; -Password $(ConvertTo-SecureString '&lt;newPassword&gt;' -AsPlainText -Force)
```


