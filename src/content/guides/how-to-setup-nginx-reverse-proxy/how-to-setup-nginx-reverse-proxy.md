# How To Setup Nginx Reverse Proxy

### Install Nginx
```
sudo apt update
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

### Create proxy site config
```
sudo vim /etc/nginx/sites-available/app.conf
```

### Example reverse proxy
```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Enable site and test
```
sudo ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Open firewall ports
```
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### Add TLS with certbot
```
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -m admin@example.com --agree-tos --redirect
```

### Troubleshoot
```
sudo tail -f /var/log/nginx/error.log
curl -I http://127.0.0.1:3000
curl -I http://example.com
```

### Quick reference
- Always run `nginx -t` before reload.
- Keep backend bound to localhost when possible.
- Enable TLS redirect in production.
