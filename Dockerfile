# Step 1: Start with a base image, Node.js
FROM node:18-alpine

# Step 2: Set the working directory in the Docker image
WORKDIR /frontend

# Step 3: Copy package.json and package-lock.json to the Docker image
COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend

# Step 4: Install dependencies
RUN npm install

# Step 5: Specify the command to start the application
CMD [ "npm", "run", "dev"]