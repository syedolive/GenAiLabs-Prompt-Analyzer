# syntax=docker/dockerfile:1.7

########## 1) Build with workspace (pnpm) ##########
FROM node:22-alpine AS base
WORKDIR /workspace
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.3.0 --activate

FROM base AS deps
# cache-friendly
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/api/package.json apps/api/package.json
RUN pnpm install --frozen-lockfile 
# full sources
COPY . .

FROM deps AS build
RUN pnpm --filter @gen-ai/api build

########## 2) Create prod node_modules just for apps/api (no workspace) ##########
# This installs ONLY apps/api deps into apps/api/node_modules, no deploy, no npm.
FROM base AS proddeps
# If you need private registry auth, copy your .npmrc here:
# COPY apps/api/.npmrc ./.npmrc
COPY apps/api/package.json apps/api/package.json
# If you keep a per-app pnpm-lock.yaml, copy it too (optional):
# COPY apps/api/pnpm-lock.yaml apps/api/pnpm-lock.yaml
RUN cd apps/api && pnpm install --prod --no-lockfile 

########## 3) Runtime image ##########
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001

# prod node_modules for the app
COPY --from=proddeps /workspace/apps/api/node_modules ./node_modules
COPY apps/api/package.json ./package.json

# built output + required folders/files
COPY --from=build /workspace/apps/api/dist              ./dist
COPY --from=build /workspace/apps/api/prisma            ./prisma
COPY --from=build /workspace/apps/api/generated         ./generated
COPY --from=build /workspace/apps/api/prisma.config.ts  ./prisma.config.ts

RUN DATABASE_URL='postgresql://user:pass@localhost:5432/db?schema=public' \
  npx -y prisma generate --schema=./prisma/schema.prisma

EXPOSE 3001
CMD ["node", "dist/main.js"]
