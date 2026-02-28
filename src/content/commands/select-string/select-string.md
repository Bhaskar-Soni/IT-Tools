### Grep for string in current directory (case sensitive and recursively)
```
Select-String &lt;string&gt; * -CaseSensitive -Recurse 2&gt; $null
```

### Grep line before and after matching line
```
Select-String &lt;string&gt; * -Context 1,1
```


