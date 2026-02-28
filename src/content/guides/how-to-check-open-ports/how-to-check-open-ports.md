# How To Check Open Ports

### Show listening ports and processes
```
sudo ss -tulpn
```

### Filter for common ports
```
sudo ss -tulpn | grep -E ':22|:80|:443|:3306'
```

### Alternative with `netstat`
```
sudo netstat -tulpn
```

### Scan local host with nmap
```
sudo apt install -y nmap
nmap -sV -p- 127.0.0.1
```

### Check firewall exposure
```
sudo ufw status verbose
```

### Quick reference
- `ss` is preferred over `netstat`.
- Compare open ports with firewall rules regularly.
