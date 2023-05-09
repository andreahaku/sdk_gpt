# Use the official Node.js Docker image
FROM node:18-alpine

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Install Python
RUN apk add --no-cache --update python3 make g++

# Copy the entire project to the working directory
COPY . .

# Install dependencies in the Docker container
RUN yarn

# Expose the port the app runs on
EXPOSE 3000

# Add arguments to the Docker image
ARG OPENAI_API_KEY
ARG DISCORD_BOT_TOKEN

# Start the application
CMD [ "yarn", "start:server" ]

# Healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s --retries=3 \
CMD curl --fail http://localhost:3000 || exit 1
