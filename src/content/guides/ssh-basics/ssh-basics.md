# SSH Basics

### Basic SSH connection
```
ssh user@server-ip
```

### Connect with custom port
```
ssh -p 2222 user@server-ip
```

### Copy local file to remote server
```
scp ./local.txt user@server-ip:/home/user/
```

### Copy remote file to local machine
```
scp user@server-ip:/var/log/syslog ./syslog-copy
```

### Generate SSH key
```
ssh-keygen -t ed25519 -a 100
```

### Copy key to server
```
ssh-copy-id user@server-ip
```

### Quick reference
- Prefer key-based authentication.
- Use `scp` for simple secure file transfers.
