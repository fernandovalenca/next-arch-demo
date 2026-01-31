FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# ---------- runtime ----------
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# copia o standalone corretamente
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
