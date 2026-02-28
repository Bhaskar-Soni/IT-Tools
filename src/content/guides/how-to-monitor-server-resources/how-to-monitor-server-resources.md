# How To Monitor Server Resources

### CPU and memory overview
```
top
htop
free -h
vmstat 1 5
```

### Disk and I/O monitoring
```
df -h
iostat -xz 1 5
sudo iotop -o
```

### Network monitoring
```
ss -tulpn
ip -s link
sar -n DEV 1 5
```

### Process-level checks
```
ps aux --sort=-%cpu | head -n 15
ps aux --sort=-%mem | head -n 15
```

### Install useful monitoring tools
```
sudo apt update
sudo apt install -y htop sysstat iotop nethogs
```

### Enable sysstat data collection
```
sudo sed -i 's/ENABLED="false"/ENABLED="true"/' /etc/default/sysstat
sudo systemctl enable --now sysstat
```

### Check historical stats
```
sar -u 1 3
sar -r 1 3
sar -q 1 3
```

### Basic alerting via cron script
```
cat > /usr/local/bin/resource-check.sh << 'EOF'
#!/usr/bin/env bash
cpu_idle=$(top -bn1 | awk '/Cpu/ {print $8}')
mem_used=$(free | awk '/Mem/ {printf("%.0f", $3/$2*100)}')
disk_used=$(df / | awk 'NR==2 {gsub("%","",$5); print $5}')
echo "cpu_idle=${cpu_idle} mem_used=${mem_used}% disk_used=${disk_used}%"
EOF
sudo chmod +x /usr/local/bin/resource-check.sh
```

### Quick reference
- Watch CPU, RAM, disk, network together.
- Enable `sysstat` for trend visibility.
- Alert on sustained high utilization, not spikes.
