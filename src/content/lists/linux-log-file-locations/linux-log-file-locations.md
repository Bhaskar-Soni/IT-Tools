Log Path | What It Contains | Quick Command
--- | --- | ---
`/var/log/syslog` | General system logs (Debian/Ubuntu) | `tail -f /var/log/syslog`
`/var/log/messages` | General system logs (RHEL/CentOS) | `tail -f /var/log/messages`
`/var/log/auth.log` | Auth and sudo logs (Debian/Ubuntu) | `tail -f /var/log/auth.log`
`/var/log/secure` | Auth logs (RHEL/CentOS) | `tail -f /var/log/secure`
`/var/log/kern.log` | Kernel messages | `tail -f /var/log/kern.log`
`/var/log/dmesg` | Boot and kernel ring buffer snapshots | `less /var/log/dmesg`
`/var/log/boot.log` | Boot process logs | `less /var/log/boot.log`
`/var/log/dpkg.log` | Package operations (apt/dpkg) | `grep install /var/log/dpkg.log`
`/var/log/apt/history.log` | Apt install/remove history | `less /var/log/apt/history.log`
`/var/log/nginx/access.log` | Nginx access requests | `tail -f /var/log/nginx/access.log`
`/var/log/nginx/error.log` | Nginx errors | `tail -f /var/log/nginx/error.log`
`/var/log/apache2/access.log` | Apache access requests | `tail -f /var/log/apache2/access.log`
`/var/log/apache2/error.log` | Apache errors | `tail -f /var/log/apache2/error.log`
