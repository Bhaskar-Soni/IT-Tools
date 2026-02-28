# How To Setup Log Monitoring

### Use journalctl for live monitoring
```
sudo journalctl -f
sudo journalctl -u nginx -f
```

### Install log navigation tool
```
sudo apt update
sudo apt install -y lnav
lnav /var/log/syslog /var/log/auth.log
```

### Watch specific error patterns
```
sudo tail -f /var/log/nginx/error.log | grep -E "error|warn|crit"
```

### Add simple alert check script
```
cat > /usr/local/bin/log-alert.sh << 'EOF'
#!/usr/bin/env bash
grep -Ei "failed password|segfault|oom-killer" /var/log/syslog | tail -n 20
EOF
sudo chmod +x /usr/local/bin/log-alert.sh
```

### Schedule alert script
```
sudo crontab -e
*/15 * * * * /usr/local/bin/log-alert.sh
```

### Quick reference
- Start with `journalctl` for systemd services.
- Track auth failures and OOM events.
