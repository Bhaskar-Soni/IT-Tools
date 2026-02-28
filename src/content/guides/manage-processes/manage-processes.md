# Manage Processes

### List running processes
```
ps aux
top
```

### Find a specific process
```
ps aux | grep nginx
pgrep nginx
```

### Kill a process by PID
```
kill <pid>
kill -9 <pid>
```

### Start command in background
```
sleep 300 &
jobs
```

### Bring background job to foreground
```
fg %1
```

### Quick reference
- Use `kill` first, `kill -9` only if needed.
- `top` helps identify high CPU/memory usage quickly.
