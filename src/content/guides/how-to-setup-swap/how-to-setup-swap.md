# How To Setup Swap

### Check current memory and swap
```
free -h
swapon --show
```

### Create a 2GB swap file
```
sudo fallocate -l 2G /swapfile
```

### If `fallocate` fails, use `dd`
```
sudo dd if=/dev/zero of=/swapfile bs=1M count=2048 status=progress
```

### Secure permissions and format
```
sudo chmod 600 /swapfile
sudo mkswap /swapfile
```

### Enable swap immediately
```
sudo swapon /swapfile
swapon --show
free -h
```

### Persist after reboot
```
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### Tune swap behavior
```
cat /proc/sys/vm/swappiness
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
sudo sysctl -p /etc/sysctl.d/99-swappiness.conf
```

### Disable and remove swap file
```
sudo swapoff /swapfile
sudo sed -i '\|/swapfile none swap sw 0 0|d' /etc/fstab
sudo rm -f /swapfile
```

### Quick reference
- Use `chmod 600` on swap file.
- Always add swap entry to `/etc/fstab`.
- Keep `swappiness` low for server workloads.
