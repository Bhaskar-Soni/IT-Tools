# How To Clean Up Disk Space

### Find biggest directories
```
sudo du -xh / --max-depth=1 2>/dev/null | sort -h
```

### Clean apt caches and old packages
```
sudo apt clean
sudo apt autoremove -y
```

### Clean old journal logs
```
sudo journalctl --disk-usage
sudo journalctl --vacuum-time=14d
```

### Remove old Docker artifacts (if used)
```
docker system prune -a -f --volumes
```

### Remove stale temp files
```
sudo rm -rf /tmp/*
sudo rm -rf /var/tmp/*
```

### Check large files
```
sudo find / -xdev -type f -size +500M -printf '%s %p\n' 2>/dev/null | sort -n | tail -n 30
```

### Recheck free disk space
```
df -h
```

### Quick reference
- Clean package cache and logs first.
- Verify before deleting large files manually.
