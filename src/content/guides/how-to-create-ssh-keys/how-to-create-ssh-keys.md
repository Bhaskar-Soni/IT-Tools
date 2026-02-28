# How To Create SSH Keys

### Generate modern Ed25519 key pair
```
ssh-keygen -t ed25519 -a 100 -C "your_email@example.com"
```

### Save with custom filename
```
ssh-keygen -t ed25519 -a 100 -f ~/.ssh/id_ed25519_work -C "work-key"
```

### Start agent and add key
```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
ssh-add -l
```

### Copy public key to server
```
ssh-copy-id -i ~/.ssh/id_ed25519.pub <user>@<server-ip>
```

### Manual key copy alternative
```
cat ~/.ssh/id_ed25519.pub
```

```
# On server
mkdir -p ~/.ssh
chmod 700 ~/.ssh
echo "<public-key>" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### Configure client aliases
```
vim ~/.ssh/config

Host prod-server
  HostName <server-ip>
  User <user>
  Port 22
  IdentityFile ~/.ssh/id_ed25519
  IdentitiesOnly yes
```

### Test login
```
ssh -v prod-server
```

### Rotate or remove old key
```
ssh-keygen -R <server-ip>
ssh-keygen -lf ~/.ssh/id_ed25519.pub
```

### Quick reference
- Prefer `ed25519` keys.
- Protect private keys with passphrases.
- Keep `~/.ssh` permissions strict.
