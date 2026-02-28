# Docker

### Install Docker Engine (Ubuntu)
```
sudo apt update
sudo apt install -y ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo $VERSION_CODENAME) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Verify installation
```
sudo systemctl enable --now docker
sudo docker version
sudo docker run --rm hello-world
```

### Run Docker without sudo (optional)
```
sudo usermod -aG docker $USER
newgrp docker
docker ps
```

### Common container lifecycle commands
```
docker pull nginx:stable
docker run -d --name web -p 8080:80 nginx:stable
docker ps
docker logs -f web
docker exec -it web /bin/bash
docker stop web
docker rm web
```

### Build and tag an image
```
docker build -t myapp:1.0 .
docker images
docker tag myapp:1.0 myregistry.example.com/myapp:1.0
```

### Volumes and persistence
```
docker volume create mydata
docker run -d --name db -v mydata:/var/lib/postgresql/data postgres:16
docker volume ls
docker volume inspect mydata
```

### Network basics
```
docker network create app-net
docker run -d --name api --network app-net myapp:1.0
docker run -d --name proxy --network app-net -p 80:80 nginx:stable
docker network inspect app-net
```

### Cleanup unused artifacts
```
docker container prune -f
docker image prune -f
docker volume prune -f
docker system prune -a -f --volumes
```

### Security baseline
```
docker run --read-only --cap-drop ALL --pids-limit 100 --memory 512m --cpus 1.0 <image>
```

### Quick reference
- Keep images minimal and pinned by version.
- Use named volumes for stateful apps.
- Avoid running privileged containers.
- Regularly prune unused images and volumes.
