# UFW Firewall

### Install and enable UFW
```
sudo apt update
sudo apt install -y ufw
sudo ufw --force reset
```

### Safe baseline policy
```
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw enable
sudo ufw status verbose
```

### Allow only required services
```
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow from <trusted-ip>/32 to any port 22 proto tcp
sudo ufw limit 22/tcp
```

### Deny risky or unwanted sources
```
sudo ufw deny from <blocked-ip>
sudo ufw deny in from <blocked-cidr> to any
```

### Manage numbered rules
```
sudo ufw status numbered
sudo ufw delete <rule-number>
```

### Application profile usage
```
sudo ufw app list
sudo ufw app info "Nginx Full"
sudo ufw allow "Nginx Full"
```

### IPv6 support
```
sudo vim /etc/default/ufw
IPV6=yes
sudo ufw disable && sudo ufw enable
```

### Logging and troubleshooting
```
sudo ufw logging medium
sudo tail -f /var/log/ufw.log
sudo journalctl -u ufw -n 100 --no-pager
```

### Reset firewall (maintenance window only)
```
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw enable
```

### Quick reference
- Always allow SSH before enabling firewall.
- Use `ufw status numbered` before deleting rules.
- Prefer CIDR-based allow lists for admin ports.
- Keep only required inbound ports open.
