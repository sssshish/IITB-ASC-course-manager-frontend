# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . /app

# Build the frontend
RUN npm run build

# Serve the static files using a lightweight HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]


