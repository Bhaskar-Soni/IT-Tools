# How To Generate SSL Certificates

### Install certbot
```
sudo apt update
sudo apt install -y certbot
```

### Generate Let’s Encrypt certificate (standalone)
```
sudo certbot certonly --standalone -d example.com -m admin@example.com --agree-tos
```

### Generate cert with Nginx integration
```
sudo apt install -y python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com -m admin@example.com --agree-tos --redirect
```

### Certificate file locations
```
/etc/letsencrypt/live/example.com/fullchain.pem
/etc/letsencrypt/live/example.com/privkey.pem
```

### Test automatic renewal
```
sudo certbot renew --dry-run
```

### Self-signed cert (internal testing only)
```
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout server.key -out server.crt \
  -subj "/CN=example.local"
```

### Verify certificate details
```
openssl x509 -in /etc/letsencrypt/live/example.com/fullchain.pem -text -noout
openssl s_client -connect example.com:443 -servername example.com </dev/null
```

### Quick reference
- Use Let’s Encrypt for public services.
- Prefer automated renewal and dry-run checks.
- Use self-signed only for lab/internal hosts.
