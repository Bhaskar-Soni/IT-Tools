# How To Rotate Logs

### Confirm logrotate is installed
```
logrotate --version
```

### Create custom rotation policy
```
sudo vim /etc/logrotate.d/myapp
```

### Example policy
```conf
/var/log/myapp/*.log {
    daily
    rotate 14
    compress
    delaycompress
    missingok
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        systemctl reload myapp >/dev/null 2>&1 || true
    endscript
}
```

### Test configuration without changes
```
sudo logrotate -d /etc/logrotate.conf
```

### Force rotation now
```
sudo logrotate -f /etc/logrotate.conf
```

### Verify rotated files
```
ls -lh /var/log/myapp/
```

### Check cron/timer integration
```
systemctl status logrotate.timer --no-pager
systemctl list-timers | grep logrotate
```

### Quick reference
- Use `delaycompress` for apps that keep file handles open.
- Always dry-run with `-d`.
- Keep retention aligned with compliance needs.
