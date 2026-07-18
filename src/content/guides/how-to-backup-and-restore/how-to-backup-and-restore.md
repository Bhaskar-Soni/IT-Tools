# How To Backup And Restore

### Create backup directories
```
sudo mkdir -p /backups/{files,db}
sudo chmod 700 /backups
```

### Backup files with `rsync`
```
sudo rsync -aAXH --delete /etc /var/www /home /backups/files/
```

### Create compressed archive backup
```
sudo tar -czf /backups/files/system-$(date +%F).tar.gz /etc /var/www /home
```

### Backup MySQL/MariaDB database
```
mysqldump -u root -p --all-databases > /backups/db/mysql-$(date +%F).sql
```

### Backup PostgreSQL database
```
sudo -u postgres pg_dumpall > /backups/db/postgres-$(date +%F).sql
```

### Verify backup integrity
```
ls -lh /backups/files
tar -tzf /backups/files/system-$(date +%F).tar.gz | head
```

### Restore file backup
```
sudo tar -xzf /backups/files/system-<date>.tar.gz -C /
```

### Restore MySQL/MariaDB backup
```
mysql -u root -p < /backups/db/mysql-<date>.sql
```

### Restore PostgreSQL backup
```
sudo -u postgres psql -f /backups/db/postgres-<date>.sql
```

### Automate daily backup with cron
```
sudo crontab -e

0 2 * * * rsync -aAXH --delete /etc /var/www /home /backups/files/
15 2 * * * tar -czf /backups/files/system-$(date +\%F).tar.gz /etc /var/www /home
```

### Quick reference
- Keep at least 3-7 restore points.
- Test restore regularly, not just backup creation.
- Store copies offsite or on separate storage.
