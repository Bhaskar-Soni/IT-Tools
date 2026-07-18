### Get domain name and information about administrator
```
net user administrator /domain
```

### Get all users in domain
```
net user /domain
```

### Unlock domain user account
```
net user &lt;user&gt; /ACTIVE:yes /domain
```

### Change domain user password
```
net user &lt;user&gt; "&lt;newpassword&gt;" /domain
```

### Create new user
```
net user &lt;user&gt; &lt;password&gt; /add /domain
```

### Delete user
```
net user &lt;user&gt; /delete /domain
```


### Get all groups in domain
```
net group /domain
```

### Get users of a group
```
net group "&lt;group&gt;" /domain
```

### Get domain controller
```
net group "Domain Controllers" /domain
```

### Add user to group
```
net group "&lt;group&gt;" &lt;user&gt; /add /domain
```


### Get domain password policy
```
net accounts /domain
```


### Get all user in local admin group
```
net localgroup administrators
```

### Add user to a local group
```
net localgroup "&lt;group&gt;" &lt;user&gt; /add
```


### List current SMB shares
```
net share
```

### Mount smb share
```
net use &lt;localDrive&gt; \\&lt;rhost&gt;\&lt;remoteDrive&gt;
or
net use * \\&lt;lhost&gt;\&lt;share&gt;
```

### Unmount smb share
```
net use &lt;localDrive&gt; \\&lt;rhost&gt;\&lt;remoteDrive&gt; /delete
```

### Get active sessions of local computer
```
net session
```

### Terminate all running sessions
```
net use /delete *
```


### Get remote shares
```
net view \\&lt;rhost&gt; /all
```

### Get information about error id
```
net helpmsg &lt;id&gt;
```

### Map network drive to sysinternal website
```
net use &lt;driverLetter&gt;: http://live.sysinternals.com/tools
```


