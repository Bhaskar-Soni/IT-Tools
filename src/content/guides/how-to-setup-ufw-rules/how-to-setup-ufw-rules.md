# How To Setup UFW Rules

### Reset and configure defaults
```
sudo ufw --force reset
sudo ufw default deny incoming
sudo ufw default allow outgoing
```

### Allow SSH safely
```
sudo ufw allow OpenSSH
sudo ufw allow from <trusted-ip>/32 to any port 22 proto tcp
```

### Allow web ports
```
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Enable and verify
```
sudo ufw enable
sudo ufw status verbose
sudo ufw status numbered
```

### Remove rule by number
```
sudo ufw delete <rule-number>
```

### Quick reference
- Allow SSH before `ufw enable`.
- Use numbered rules for clean deletion.
