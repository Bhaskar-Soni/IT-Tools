### Add all permissions to a file
```
icacls &lt;file&gt; /grant Everyone:F
```

### Add read permissions for specific user
```
icacls &lt;file&gt; /grant:R "&lt;user&gt;:(R)"
```

### Reset permissions
```
icacls &lt;file&gt; /reset
```

### Set ssh key permissions
```
icacls C:\Users\&lt;user&gt;\.ssh /inheritance:r /grant:r &lt;user&gt;:(F)
icacls C:\Users\&lt;user&gt;\.ssh\id_rsa /inheritance:r /grant:r &lt;user&gt;:(F)
```


