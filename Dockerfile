# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder

WORKDIR /app
ENV CI=true

# Use Corepack-managed pnpm to keep versions deterministic.
RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
# Run build directly with a higher Node heap to avoid OOM in containerized builds.
RUN NODE_OPTIONS=--max_old_space_size=8192 pnpm exec vue-tsc --noEmit \
  && NODE_OPTIONS=--max_old_space_size=8192 pnpm exec vite build

FROM nginx:stable-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
