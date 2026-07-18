# How To Configure Static IP

### Identify network interface
```
ip a
ip route
```

### Edit netplan config (Ubuntu)
```
sudo vim /etc/netplan/01-netcfg.yaml
```

### Example static IP config
```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.50/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [1.1.1.1,8.8.8.8]
```

### Apply and test safely
```
sudo netplan try
sudo netplan apply
```

### Verify settings
```
ip a show eth0
ip route
resolvectl status
ping -c 4 8.8.8.8
```

### Rollback if disconnected
```
sudo cp /etc/netplan/01-netcfg.yaml.bak /etc/netplan/01-netcfg.yaml
sudo netplan apply
```

### Quick reference
- Use `netplan try` before apply.
- Confirm interface name (`eth0`, `ens33`, etc.).
- Keep a backup config before changes.
