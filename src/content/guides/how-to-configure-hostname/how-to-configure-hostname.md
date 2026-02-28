# How To Configure Hostname

### Check current hostname
```
hostnamectl
hostname
```

### Set new hostname
```
sudo hostnamectl set-hostname app-prod-01
```

### Update `/etc/hosts`
```
sudo vim /etc/hosts

127.0.0.1   localhost
127.0.1.1   app-prod-01
```

### Verify changes
```
hostnamectl
cat /etc/hostname
ping -c 1 $(hostname)
```

### Apply in current shell
```
exec bash
```

### Quick reference
- Keep hostname meaningful and environment-specific.
- Update hosts file to avoid local resolution issues.
