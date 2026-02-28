# SSH Hardening

### Install OpenSSH (if missing)
```
sudo apt update
sudo apt install -y openssh-server
sudo systemctl enable --now ssh
```

### Backup current config
```
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak.$(date +%F-%H%M%S)
```

### Generate strong key pair on client
```
ssh-keygen -t ed25519 -a 100 -f ~/.ssh/id_ed25519
ssh-copy-id -i ~/.ssh/id_ed25519.pub <user>@<server-ip>
```

### Core hardening settings
```
sudo vim /etc/ssh/sshd_config

Port 22
Protocol 2
PermitRootLogin no
PasswordAuthentication no
KbdInteractiveAuthentication no
PubkeyAuthentication yes
UsePAM yes
MaxAuthTries 3
LoginGraceTime 30
ClientAliveInterval 300
ClientAliveCountMax 2
X11Forwarding no
AllowAgentForwarding no
AllowTcpForwarding no
AllowUsers <user1> <user2>
```

### Restrict source IPs for SSH using UFW
```
sudo ufw allow from <trusted-ip>/32 to any port 22 proto tcp
sudo ufw limit 22/tcp
```

### Optional: move SSH to a non-default port
```
sudo vim /etc/ssh/sshd_config

Port 2222
```

### Validate config and reload
```
sudo sshd -t
sudo systemctl restart ssh
sudo systemctl status ssh --no-pager
```

### Test before closing current session
```
ssh -p 22 -i ~/.ssh/id_ed25519 <user>@<server-ip>
# or if changed:
ssh -p 2222 -i ~/.ssh/id_ed25519 <user>@<server-ip>
```

### Add fail2ban protection
```
sudo apt install -y fail2ban
sudo vim /etc/fail2ban/jail.local

[sshd]
enabled = true
port = 22
maxretry = 5
findtime = 10m
bantime = 1h
```

### Restart fail2ban and confirm
```
sudo systemctl restart fail2ban
sudo fail2ban-client status sshd
```

### Audit SSH access and auth failures
```
sudo journalctl -u ssh -n 200 --no-pager
sudo grep "Failed password" /var/log/auth.log | tail -n 50
sudo ss -tulpn | grep ssh
```

### Quick checklist
- Disable root login.
- Disable password auth after key login works.
- Limit users with `AllowUsers`.
- Restrict source IPs using firewall.
- Keep OpenSSH updated.
