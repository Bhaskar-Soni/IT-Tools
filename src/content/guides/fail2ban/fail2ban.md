# Fail2Ban

### Install and start service
```
sudo apt update
sudo apt install -y fail2ban
sudo systemctl enable --now fail2ban
sudo systemctl status fail2ban --no-pager
```

### Create local config (never edit jail.conf directly)
```
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo vim /etc/fail2ban/jail.local
```

### Recommended global defaults
```
[DEFAULT]
bantime = 1h
findtime = 10m
maxretry = 5
backend = systemd
destemail = admin@example.com
sender = fail2ban@example.com
mta = sendmail
action = %(action_mwl)s
```

### Secure SSH jail
```
[sshd]
enabled = true
port = 22
logpath = %(sshd_log)s
maxretry = 5
```

### Add Nginx auth jail (optional)
```
[nginx-http-auth]
enabled = true
port = http,https
logpath = /var/log/nginx/error.log
```

### Restart and validate jails
```
sudo systemctl restart fail2ban
sudo fail2ban-client ping
sudo fail2ban-client status
sudo fail2ban-client status sshd
```

### Unban an IP
```
sudo fail2ban-client set sshd unbanip <ip-address>
```

### Ban an IP manually
```
sudo fail2ban-client set sshd banip <ip-address>
```

### Log analysis
```
sudo journalctl -u fail2ban -n 200 --no-pager
sudo grep "Ban " /var/log/fail2ban.log | tail -n 50
```

### Quick tuning tips
- Increase `bantime` for repeated attacks.
- Keep `maxretry` low for internet-facing SSH.
- Use trusted IP allow lists in firewall first.
- Monitor ban trends weekly.
