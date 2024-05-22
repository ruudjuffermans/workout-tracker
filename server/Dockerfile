# Use an official Node.js runtime as a parent image
FROM node:21-bullseye-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3001

# Define environment variable for database connection (Modify as needed)
ENV MYSQL_HOST=mysql
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=my-secret-pw
ENV MYSQL_DATABASE=sample_db

# Run the app when the container launches
CMD ["node", "server.js"]
