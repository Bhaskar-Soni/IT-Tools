# How To Manage Cron Logs

### View cron service logs
```
sudo journalctl -u cron -n 100 --no-pager
```

### Log cron job output explicitly
```
*/10 * * * * /usr/local/bin/task.sh >> /var/log/task.log 2>&1
```

### Rotate custom cron logs
```
sudo vim /etc/logrotate.d/task-log
```

```conf
/var/log/task.log {
    weekly
    rotate 8
    compress
    missingok
    notifempty
    create 0640 root adm
}
```

### Test logrotate policy
```
sudo logrotate -d /etc/logrotate.conf
sudo logrotate -f /etc/logrotate.conf
```

### Quick reference
- Always redirect cron job output.
- Rotate logs to avoid disk growth.
