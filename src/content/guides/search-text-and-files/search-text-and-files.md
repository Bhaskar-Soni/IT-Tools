# Search Text And Files

### Find files by name
```
find . -name "*.log"
find /etc -name "sshd_config" 2>/dev/null
```

### Search text inside files
```
grep -R "PermitRootLogin" /etc/ssh
grep -n "error" app.log
```

### Use `rg` (ripgrep) for fast search
```
rg "TODO" .
rg -n "listen 80" /etc/nginx
```

### Search only specific file types
```
find . -name "*.md"
rg "cron" --glob "*.md"
```

### Quick reference
- Use `find` for file discovery.
- Use `grep`/`rg` for content search.
