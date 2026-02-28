# How To Disable Root Login

### Backup SSH config
```
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak.$(date +%F-%H%M%S)
```

### Disable root SSH login
```
sudo vim /etc/ssh/sshd_config

PermitRootLogin no
```

### Optional hardening
```
PasswordAuthentication no
PubkeyAuthentication yes
```

### Validate and restart SSH
```
sudo sshd -t
sudo systemctl restart ssh
sudo systemctl status ssh --no-pager
```

### Test non-root login before closing session
```
ssh <user>@<server-ip>
```

### Quick reference
- Keep one active SSH session during changes.
- Ensure sudo-capable user exists first.
