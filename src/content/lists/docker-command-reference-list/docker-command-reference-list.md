Command | Purpose | Example
--- | --- | ---
`docker --version` | Show Docker version | `docker --version`
`docker ps` | List running containers | `docker ps`
`docker ps -a` | List all containers | `docker ps -a`
`docker images` | List local images | `docker images`
`docker pull` | Download image | `docker pull nginx:stable`
`docker run` | Start container | `docker run -d -p 8080:80 nginx`
`docker logs` | View container logs | `docker logs -f web`
`docker exec` | Run command in container | `docker exec -it web sh`
`docker stop` | Stop container | `docker stop web`
`docker rm` | Remove container | `docker rm web`
`docker rmi` | Remove image | `docker rmi nginx:stable`
`docker network ls` | List networks | `docker network ls`
`docker volume ls` | List volumes | `docker volume ls`
`docker compose up -d` | Start compose stack | `docker compose up -d`
`docker compose down` | Stop compose stack | `docker compose down`
`docker system prune -a` | Cleanup unused resources | `docker system prune -a -f`
