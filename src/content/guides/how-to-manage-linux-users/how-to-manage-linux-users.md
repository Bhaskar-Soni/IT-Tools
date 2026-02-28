# How To Manage Linux Users

### Create a new user with home directory
```
sudo adduser alice
```

### Add user to sudo group
```
sudo usermod -aG sudo alice
id alice
```

### Set or reset password
```
sudo passwd alice
```

### Lock and unlock account
```
sudo usermod -L alice
sudo usermod -U alice
```

### Expire password periodically
```
sudo chage -M 90 -W 14 -I 7 alice
sudo chage -l alice
```

### Create and manage groups
```
sudo groupadd developers
sudo usermod -aG developers alice
getent group developers
```

### Give SSH access securely
```
sudo -u alice mkdir -p /home/alice/.ssh
sudo -u alice chmod 700 /home/alice/.ssh
sudo -u alice bash -c 'cat >> /home/alice/.ssh/authorized_keys'
sudo -u alice chmod 600 /home/alice/.ssh/authorized_keys
```

### Disable shell access (service accounts)
```
sudo usermod -s /usr/sbin/nologin svc_account
```

### Remove user and optional home directory
```
sudo deluser alice
sudo deluser --remove-home alice
```

### Quick reference
- Use groups for permission management.
- Avoid sharing user accounts.
- Lock unused accounts and service users.
