# Stage 1: Base image for development and production
FROM node:20-alpine AS base
WORKDIR /app
# Copy package.json and yarn.lock
COPY package.json yarn.lock ./
# Install dependencies using Yarn
RUN yarn install --frozen-lockfile
COPY . .

# Stage 2: Development
FROM base AS development
EXPOSE 3000
CMD ["yarn", "dev"]

# Stage 3: Build the app for production
FROM base AS builder
RUN yarn build

# Stage 4: Production
FROM node:20-alpine AS production
WORKDIR /app
# Copy only production dependencies
COPY --from=base /app/package.json /app/yarn.lock ./
RUN yarn install --production --frozen-lockfile
# Copy built assets from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
EXPOSE 3000
CMD ["yarn", "start"]