# How To Harden Kernel Parameters

### Create hardening sysctl file
```
sudo vim /etc/sysctl.d/99-hardening.conf
```

### Recommended baseline
```conf
net.ipv4.tcp_syncookies = 1
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
kernel.randomize_va_space = 2
fs.protected_hardlinks = 1
fs.protected_symlinks = 1
```

### Apply settings
```
sudo sysctl --system
```

### Verify specific values
```
sysctl net.ipv4.tcp_syncookies
sysctl kernel.randomize_va_space
```

### Quick reference
- Keep sysctl settings in dedicated file.
- Validate after kernel or distro upgrades.
