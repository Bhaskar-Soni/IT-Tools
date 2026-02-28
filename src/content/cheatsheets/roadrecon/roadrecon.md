### Source
https://github.com/dirkjanm/ROADtools

### Gather information
```
roadrecon auth -u &lt;user&gt;@&lt;tenant&gt;.onmicrosoft.com -p &lt;password&gt;
roadrecon gather
```

### Generate Primary Key Token for current user session (get nonce using ARM API retrieve from memory using Get-AADIntUserPRTToken)
```
ROADToken.exe &lt;nonce&gt;
```


