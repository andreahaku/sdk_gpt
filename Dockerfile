# Use the official Node.js Docker image
FROM node:18-alpine as build

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Install Python
RUN apk add --no-cache --update python3 make g++

# Copy package.json and package-lock.json/yarn.lock first to utilize Docker cache
COPY package*.json yarn.lock ./

# Install dependencies in the Docker container
RUN yarn --production --frozen-lockfile && yarn cache clean

# Copy the rest of the project to the working directory
COPY . .

# Start a new, final image to reduce size
FROM node:18-alpine

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy only the necessary files to run the app from the build image
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app ./

# Expose the port the app runs on
EXPOSE 3000

# Add arguments to the Docker image
ARG OPENAI_API_KEY
ARG DISCORD_BOT_TOKEN

# Start the application
CMD [ "yarn", "start:server" ]

# Healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=3 \
CMD wget --quiet --tries=1 --spider http://localhost:3000 || exit 1
