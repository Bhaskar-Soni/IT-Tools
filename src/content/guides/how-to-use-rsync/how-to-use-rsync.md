# How To Use Rsync

### Basic local sync
```
rsync -avh /source/ /destination/
```

### Preserve attributes and delete removed files
```
rsync -aAXH --delete /source/ /destination/
```

### Dry run before actual sync
```
rsync -aAXH --delete --dry-run /source/ /destination/
```

### Remote sync over SSH
```
rsync -avz -e ssh /local/path/ user@remote:/backup/path/
```

### Pull from remote to local
```
rsync -avz -e ssh user@remote:/var/www/ /local/www-backup/
```

### Exclude files/directories
```
rsync -av --exclude '.git' --exclude 'node_modules' /src/ /dst/
```

### Bandwidth limit and progress
```
rsync -av --progress --bwlimit=2000 /src/ /dst/
```

### Check checksum-based sync
```
rsync -avc /src/ /dst/
```

### Cron example for daily backup
```
0 2 * * * rsync -aAXH --delete /data/ /backup/data/
```

### Quick reference
- Use trailing slash correctly (`/src/` vs `/src`).
- Run with `--dry-run` first.
- Use `--delete` only when destination should mirror source.
