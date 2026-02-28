# How To Troubleshoot DNS

### Check resolver configuration
```
cat /etc/resolv.conf
resolvectl status
```

### Query records with `dig`
```
dig example.com A +short
dig example.com AAAA +short
dig example.com MX +short
dig @1.1.1.1 example.com A +short
```

### Compare recursive vs authoritative answer
```
dig example.com NS +short
dig @ns1.example.com example.com A +short
```

### Use `nslookup` and `host` quickly
```
nslookup example.com
host example.com
```

### Check propagation and TTL
```
dig example.com A
```

### Test reverse lookup
```
dig -x 8.8.8.8 +short
```

### Flush local DNS cache (systemd-resolved)
```
sudo resolvectl flush-caches
resolvectl statistics
```

### Network connectivity checks
```
ping -c 4 1.1.1.1
ping -c 4 example.com
traceroute 1.1.1.1
```

### Quick reference
- Query multiple resolvers to isolate cache issues.
- Validate NS and zone data from authoritative server.
- Check TTL when updates seem delayed.
