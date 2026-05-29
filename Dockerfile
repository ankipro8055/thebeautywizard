# Use official lightweight Node.js alpine image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of the static application files and backend server
COPY . .

# Expose port 8080 (the default port for Google Cloud Run)
EXPOSE 8080

# Start the background Node.js Express application
CMD ["npm", "start"]
