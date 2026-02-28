Command | Purpose | Example
--- | --- | ---
`systemctl status <service>` | Show state and recent logs | `systemctl status nginx`
`systemctl start <service>` | Start service now | `systemctl start docker`
`systemctl stop <service>` | Stop service now | `systemctl stop apache2`
`systemctl restart <service>` | Restart service | `systemctl restart ssh`
`systemctl reload <service>` | Reload config without full restart | `systemctl reload nginx`
`systemctl enable <service>` | Enable service at boot | `systemctl enable fail2ban`
`systemctl disable <service>` | Disable service at boot | `systemctl disable snapd`
`systemctl is-active <service>` | Check active state | `systemctl is-active cron`
`systemctl list-units --type=service` | List running services | N/A
`journalctl -u <service> -f` | Follow service logs live | `journalctl -u nginx -f`
`systemctl daemon-reload` | Reload unit definitions | After changing unit files
