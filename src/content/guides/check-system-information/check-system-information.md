# Check System Information

### OS and kernel details
```
uname -a
cat /etc/os-release
hostnamectl
```

### CPU and memory details
```
lscpu
free -h
```

### Disk and filesystem info
```
lsblk
df -h
```

### Uptime and load
```
uptime
```

### IP addresses
```
ip a
ip route
```

### Quick reference
- Use `uname`, `os-release`, and `hostnamectl` together for full OS context.
