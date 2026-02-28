# How To Install Docker Compose Plugin

### Install Docker engine and compose plugin
```
sudo apt update
sudo apt install -y docker.io docker-compose-plugin
sudo systemctl enable --now docker
```

### Verify plugin
```
docker compose version
docker version
```

### Run quick compose test
```
mkdir ~/compose-test && cd ~/compose-test
cat > compose.yaml << 'EOF'
services:
  hello:
    image: hello-world
EOF
docker compose up
```

### Cleanup test
```
docker compose down --remove-orphans
```

### Quick reference
- Use `docker compose` (space), not legacy `docker-compose`.
- Keep compose plugin updated with system packages.
