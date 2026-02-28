# How To Setup Fail2Ban

### Install and enable service
```
sudo apt update
sudo apt install -y fail2ban
sudo systemctl enable --now fail2ban
```

### Create local config
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo vim /etc/fail2ban/jail.local
```

### Recommended defaults
```
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5
backend = systemd
```

### Enable SSH jail
```
[sshd]
enabled = true
port = 22
logpath = %(sshd_log)s
```

### Restart and verify
```
sudo systemctl restart fail2ban
sudo fail2ban-client ping
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

### Unban or ban IP manually
```
sudo fail2ban-client set sshd unbanip <ip>
sudo fail2ban-client set sshd banip <ip>
```

### Logs and troubleshooting
```
sudo journalctl -u fail2ban -n 100 --no-pager
sudo tail -n 100 /var/log/fail2ban.log
```

### Quick reference
- Use `jail.local`, not `jail.conf`.
- Start with SSH jail first.
- Tune `bantime/findtime/maxretry` based on attack volume.
