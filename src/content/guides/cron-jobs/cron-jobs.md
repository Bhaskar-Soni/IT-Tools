# Cron Jobs

### Crontab format
```
* * * * * command-to-run
| | | | |
| | | | +---- day of week (0-7, 0/7 = Sunday)
| | | +------ month (1-12)
| | +-------- day of month (1-31)
| +---------- hour (0-23)
+------------ minute (0-59)
```

### Edit current user crontab
```
crontab -e
crontab -l
```

### Common schedules
```
# Every 5 minutes
*/5 * * * * /usr/local/bin/task.sh

# Every day at 02:30
30 2 * * * /usr/local/bin/nightly-backup.sh

# Every Monday at 09:00
0 9 * * 1 /usr/local/bin/weekly-report.sh

# First day of every month at 03:15
15 3 1 * * /usr/local/bin/monthly-maintenance.sh
```

### Run jobs with explicit environment
```
SHELL=/bin/bash
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
MAILTO=admin@example.com

*/15 * * * * /opt/scripts/health-check.sh
```

### Log output for debugging
```
*/10 * * * * /usr/local/bin/task.sh >> /var/log/task.log 2>&1
```

### Prevent overlapping runs using lock file
```
*/5 * * * * flock -n /tmp/job.lock /usr/local/bin/task.sh >> /var/log/task.log 2>&1
```

### System-wide cron locations
```
/etc/crontab
/etc/cron.d/
/etc/cron.hourly/
/etc/cron.daily/
/etc/cron.weekly/
/etc/cron.monthly/
```

### Validate cron service
```
sudo systemctl status cron --no-pager
sudo journalctl -u cron -n 100 --no-pager
```

### Quick reference
- Use absolute paths in cron commands.
- Redirect stdout/stderr to logs.
- Set `PATH` explicitly in crontab.
- Use `flock` for non-overlapping jobs.
