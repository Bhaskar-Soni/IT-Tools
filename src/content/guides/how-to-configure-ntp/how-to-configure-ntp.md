# How To Configure NTP

### Check current time and timezone
```
timedatectl
date
```

### Set timezone
```
sudo timedatectl set-timezone UTC
timedatectl
```

### Install and enable `chrony` (recommended)
```
sudo apt update
sudo apt install -y chrony
sudo systemctl enable --now chrony
```

### Configure NTP servers
```
sudo vim /etc/chrony/chrony.conf

pool pool.ntp.org iburst
pool time.google.com iburst
```

### Restart and verify sync
```
sudo systemctl restart chrony
chronyc tracking
chronyc sources -v
timedatectl status
```

### One-time forced step (if clock is badly off)
```
sudo chronyc -a makestep
```

### Open NTP in firewall if acting as server
```
sudo ufw allow 123/udp
```

### Troubleshooting
```
sudo journalctl -u chrony -n 100 --no-pager
chronyc activity
chronyc sourcestats -v
```

### Quick reference
- Use `chrony` for modern Linux servers.
- Keep timezone explicit (prefer `UTC` on servers).
- Verify with `chronyc tracking` after changes.
