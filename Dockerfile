# syntax=docker/dockerfile:1
# Stage 1: Build the static site with Node.js
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .

# Build-time configuration.
#
# Vite reads VITE_* at BUILD time and compiles the values into the bundle, so
# these cannot be set on the running container — the bundle would never see
# them. Deliberately no `ENV` default here: a real environment variable beats an
# `.env` file in Vite, so a default set at this layer would silently override
# the committed `.env.production` that documents itself as the place to change
# this. Two files claiming to configure one value, one of them dead.
#
# `.env.production` is the single source of truth. This arg overrides it for one
# build without editing it, via a `.local` file — the precedence Vite already
# defines and which `.gitignore` already excludes.
ARG VITE_APP_URL

RUN if [ -n "$VITE_APP_URL" ]; then \
      echo "VITE_APP_URL=$VITE_APP_URL" >> .env.production.local; \
    fi; \
    npm run build

# Stage 2: Serve the built site with Nginx
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 3000
CMD ["nginx", "-g", "daemon off;"]
