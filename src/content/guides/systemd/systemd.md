# Systemd

### Check service status and logs
```
sudo systemctl status nginx --no-pager
sudo journalctl -u nginx -n 100 --no-pager
```

### Create a custom service
```
sudo vim /etc/systemd/system/myapp.service

[Unit]
Description=My App Service
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node /opt/myapp/server.js
Restart=on-failure
RestartSec=5
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

### Enable and start service
```
sudo systemctl daemon-reload
sudo systemctl enable --now myapp
sudo systemctl status myapp --no-pager
```

### Restart and stop operations
```
sudo systemctl restart myapp
sudo systemctl stop myapp
sudo systemctl disable myapp
```

### View recent logs for troubleshooting
```
sudo journalctl -u myapp -f
sudo journalctl -u myapp --since "1 hour ago"
```

### Override existing service safely
```
sudo systemctl edit nginx

[Service]
LimitNOFILE=65535
```

### Apply override changes
```
sudo systemctl daemon-reload
sudo systemctl restart nginx
```

### Create a timer (replacement for cron-style periodic job)
```
sudo vim /etc/systemd/system/backup.service

[Unit]
Description=Run backup script

[Service]
Type=oneshot
ExecStart=/usr/local/bin/backup.sh
```

```
sudo vim /etc/systemd/system/backup.timer

[Unit]
Description=Run backup daily at 02:00

[Timer]
OnCalendar=*-*-* 02:00:00
Persistent=true

[Install]
WantedBy=timers.target
```

### Enable timer
```
sudo systemctl daemon-reload
sudo systemctl enable --now backup.timer
systemctl list-timers --all
```

### Quick reference
- Use `daemon-reload` after unit file changes.
- Prefer `systemctl edit` for overrides.
- Use `Restart=on-failure` for resilient services.
- Use timers for critical periodic jobs.
