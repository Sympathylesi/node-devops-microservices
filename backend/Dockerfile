# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend directory into the container
COPY . .

# Expose the port that your app is running on (3000 in this case)
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
