### Create new task (taskName must be a full path)
```
schtasks /create /sc &lt;event&gt; /mo &lt;modifier&gt; /tn &lt;taskName&gt; /tr &lt;taskRun&gt;
```

### Possible events:
```
minute
hourly
daily
weekly
once
onstart
onlogon
onidle
monthly
onevent
```

### Example - execute script every minute regardless of which user logged in - start immediately
```
schtasks /create /sc minute /mo 1 /tn "taskName" /tr C:\Users\username\file.exe /ru system
```

### Example - execute script every day at 11 am
```
schtasks /create /sc daily /st 11:00 /tn "taskName" /tr C:\Users\username\file.cmd
```

### Run task as specific user - if executed as elevated process /rp is not needed
```
schtasks /create /sc &lt;event&gt; /mo &lt;modifier&gt; /tn &lt;taskName&gt; /tr &lt;taskRun&gt; /ru &lt;domain&gt;\&lt;user&gt; /rp &lt;password&gt;
```

### Get information about task
```
schtasks /query /tn "&lt;taskName&gt;" /fo List /v
```

### Delete task
```
schtasks /delete /tn "&lt;taskName&gt;" /f
```

### Display all scheduled tasks
```
schtasks /query /fo LIST /v
```

### Run task manually
```
schtasks /run /tn "&lt;taskName&gt;"
```

### Stop task manually
```
schtasks /end /tn "&lt;taskName&gt;"
```


