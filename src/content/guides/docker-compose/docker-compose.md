# Docker Compose

### Check Compose plugin
```
docker compose version
```

### Minimal `compose.yaml` (web + database)
```yaml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_DB: appdb
      POSTGRES_USER: appuser
      POSTGRES_PASSWORD: strong-password
    volumes:
      - db_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U appuser -d appdb"]
      interval: 10s
      timeout: 5s
      retries: 5

  web:
    image: nginx:stable
    ports:
      - "8080:80"
    depends_on:
      db:
        condition: service_healthy

volumes:
  db_data:
```

### Start, stop, restart stack
```
docker compose up -d
docker compose ps
docker compose restart web
docker compose down
```

### View logs and events
```
docker compose logs -f
docker compose logs -f db
docker compose top
```

### Use `.env` for variables
```
cat > .env << 'EOF'
POSTGRES_DB=appdb
POSTGRES_USER=appuser
POSTGRES_PASSWORD=strong-password
EOF
```

### Rebuild and roll out updates
```
docker compose build --no-cache
docker compose up -d --build
docker compose pull
docker compose up -d
```

### Run one-off commands
```
docker compose exec db psql -U appuser -d appdb
docker compose run --rm web sh
```

### Remove everything including volumes
```
docker compose down -v --remove-orphans
```

### Troubleshooting
```
docker compose config
docker compose ls
docker inspect <container-id>
```

### Quick reference
- Use healthchecks for dependency readiness.
- Keep secrets out of compose files when possible.
- Pin image tags, avoid floating `latest`.
