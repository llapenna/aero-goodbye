# Use the official Node.js image as the base image
FROM node:18-alpine

# Install pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application using pnpm
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 5000

# Start the application using pnpm
CMD ["pnpm", "preview"]