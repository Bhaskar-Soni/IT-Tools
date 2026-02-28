# How To Check Disk Usage

### Check overall filesystem usage
```
df -h
df -i
```

### Find largest directories quickly
```
sudo du -xh / --max-depth=1 2>/dev/null | sort -h
sudo du -xh /var --max-depth=2 2>/dev/null | sort -h | tail -n 20
```

### Find large files
```
sudo find / -xdev -type f -size +500M -printf '%s %p\n' 2>/dev/null | sort -n | tail -n 30
```

### Analyze logs and package cache
```
sudo du -sh /var/log/*
sudo du -sh /var/cache/apt/archives
```

### Clean apt cache and old packages
```
sudo apt clean
sudo apt autoremove -y
```

### Clean old journal logs
```
sudo journalctl --disk-usage
sudo journalctl --vacuum-time=14d
```

### Interactive disk usage tool
```
sudo apt install -y ncdu
sudo ncdu /
```

### Re-check usage after cleanup
```
df -h
```

### Quick reference
- Start with `df -h`, then drill down using `du`.
- Clean logs, apt cache, and unused packages first.
- Track inode exhaustion with `df -i`.
