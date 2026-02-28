# Rsyslog

### Install and start
```
sudo apt update
sudo apt install -y rsyslog
sudo systemctl enable --now rsyslog
sudo systemctl status rsyslog --no-pager
```

### Validate configuration syntax
```
sudo rsyslogd -N1
```

### Basic local log routing example
```
sudo vim /etc/rsyslog.d/30-custom.conf

# Log all auth messages to custom file
auth,authpriv.*    /var/log/auth-custom.log

# Log kernel warnings and above
kern.warning       /var/log/kernel-warning.log
```

### Restart and verify files
```
sudo systemctl restart rsyslog
sudo tail -f /var/log/auth-custom.log
```

### Central log server setup (receiver)
```
sudo vim /etc/rsyslog.d/10-server.conf

module(load="imudp")
input(type="imudp" port="514")

module(load="imtcp")
input(type="imtcp" port="514")

template(name="RemoteLogs" type="string" string="/var/log/remote/%HOSTNAME%/%PROGRAMNAME%.log")
*.* ?RemoteLogs
& stop
```

### Open firewall for syslog server
```
sudo ufw allow 514/udp
sudo ufw allow 514/tcp
```

### Client forwarding setup
```
sudo vim /etc/rsyslog.d/90-forward.conf

# UDP forwarding
*.* @<log-server-ip>:514

# TCP forwarding (preferred)
# *.* @@log-server-ip:514
```

### Restart client rsyslog
```
sudo systemctl restart rsyslog
```

### Test pipeline
```
logger "rsyslog test message from $(hostname)"
```

### Rotate custom logs
```
sudo vim /etc/logrotate.d/rsyslog-custom

/var/log/auth-custom.log /var/log/kernel-warning.log {
    weekly
    rotate 8
    compress
    missingok
    notifempty
    create 0640 syslog adm
    postrotate
        /usr/lib/rsyslog/rsyslog-rotate
    endscript
}
```

### Troubleshooting
```
sudo journalctl -u rsyslog -n 200 --no-pager
sudo rsyslogd -N1
sudo ss -tulpn | grep 514
```

### Quick reference
- Test config with `rsyslogd -N1` before restart.
- Prefer TCP (`@@`) for reliable forwarding.
- Separate remote logs by host/program for clarity.
- Pair rsyslog with logrotate for retention control.
