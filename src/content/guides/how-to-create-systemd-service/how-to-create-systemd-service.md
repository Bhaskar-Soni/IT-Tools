# How To Create Systemd Service

### Create unit file
```
sudo vim /etc/systemd/system/myapp.service
```

### Example service
```ini
[Unit]
Description=My App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/node /opt/myapp/server.js
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

### Reload and start
```
sudo systemctl daemon-reload
sudo systemctl enable --now myapp
sudo systemctl status myapp --no-pager
```

### View logs
```
sudo journalctl -u myapp -f
```

### Quick reference
- Run `daemon-reload` after unit changes.
- Use `Restart=on-failure` for resilience.
