# How To Schedule Reboot

### One-time reboot using `shutdown`
```
sudo shutdown -r +10 "Scheduled maintenance reboot"
```

### Cancel scheduled reboot
```
sudo shutdown -c
```

### Reboot at exact time
```
sudo shutdown -r 02:00
```

### Schedule regular reboot with cron
```
sudo crontab -e

# Reboot every Sunday at 03:30
30 3 * * 0 /sbin/shutdown -r now
```

### Alternative with systemd timer
```
sudo vim /etc/systemd/system/reboot-weekly.service

[Unit]
Description=Weekly reboot

[Service]
Type=oneshot
ExecStart=/usr/sbin/shutdown -r now
```

```
sudo vim /etc/systemd/system/reboot-weekly.timer

[Unit]
Description=Run weekly reboot timer

[Timer]
OnCalendar=Sun *-*-* 03:30:00
Persistent=true

[Install]
WantedBy=timers.target
```

### Enable timer
```
sudo systemctl daemon-reload
sudo systemctl enable --now reboot-weekly.timer
systemctl list-timers | grep reboot-weekly
```

### Notify users before reboot
```
wall "System maintenance reboot in 10 minutes. Save your work."
```

### Quick reference
- Use `shutdown -c` for cancellation.
- Prefer maintenance windows for planned reboots.
- Add notifications for multi-user systems.
