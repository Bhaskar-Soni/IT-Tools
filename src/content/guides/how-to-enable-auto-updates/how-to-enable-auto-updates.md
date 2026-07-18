# How To Enable Auto Updates

### Install unattended upgrades
```
sudo apt update
sudo apt install -y unattended-upgrades apt-listchanges
```

### Enable auto update configuration
```
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

### Configure update schedule
```
sudo vim /etc/apt/apt.conf.d/20auto-upgrades

APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Unattended-Upgrade "1";
APT::Periodic::AutocleanInterval "7";
```

### Configure allowed origins and reboots
```
sudo vim /etc/apt/apt.conf.d/50unattended-upgrades

Unattended-Upgrade::Automatic-Reboot "false";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
```

### Run a dry test
```
sudo unattended-upgrade --dry-run --debug
```

### Check status and logs
```
systemctl status unattended-upgrades --no-pager
sudo tail -n 100 /var/log/unattended-upgrades/unattended-upgrades.log
```

### Manual update fallback
```
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
```

### Quick reference
- Enable auto updates for security patches.
- Review logs weekly for failed packages.
- Keep controlled reboot policy for servers.
