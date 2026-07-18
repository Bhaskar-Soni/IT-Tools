# Read Logs With Journalctl

### Show recent system logs
```
journalctl -n 50
```

### Follow logs live
```
journalctl -f
```

### Filter logs by service
```
sudo journalctl -u ssh -n 100 --no-pager
sudo journalctl -u nginx -f
```

### Filter logs by time
```
journalctl --since "1 hour ago"
journalctl --since "2026-01-01 00:00:00" --until "2026-01-01 23:59:59"
```

### Show only errors
```
journalctl -p err -n 100
```

### Quick reference
- Use `-u <service>` for focused troubleshooting.
- Use `--since/--until` for incident windows.
