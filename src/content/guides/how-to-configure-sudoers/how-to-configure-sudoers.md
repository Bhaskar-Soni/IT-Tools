# How To Configure Sudoers

### Always edit sudoers with `visudo`
```
sudo visudo
```

### Grant full sudo access to a user
```
alice ALL=(ALL:ALL) ALL
```

### Passwordless sudo (use carefully)
```
alice ALL=(ALL:ALL) NOPASSWD: ALL
```

### Limit commands for a user
```
deploy ALL=(root) /usr/bin/systemctl restart nginx, /usr/bin/systemctl status nginx
```

### Manage via `/etc/sudoers.d` (recommended)
```
echo 'alice ALL=(ALL:ALL) ALL' | sudo tee /etc/sudoers.d/alice
sudo chmod 440 /etc/sudoers.d/alice
sudo visudo -cf /etc/sudoers.d/alice
```

### Add user to sudo group
```
sudo usermod -aG sudo alice
id alice
```

### Check effective sudo rights
```
sudo -l -U alice
```

### Audit sudo usage
```
sudo grep sudo /var/log/auth.log | tail -n 50
```

### Quick reference
- Never edit `/etc/sudoers` with normal editor.
- Prefer least-privilege command rules.
- Keep include files in `/etc/sudoers.d/`.
