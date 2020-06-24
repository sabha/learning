# Specify a base Image
FROM node:alpine

# Copy from local to inside container Working Directory
WORKDIR /usr/app
COPY ./package.json ./

# Install some dependencies
RUN npm install
COPY ./index.js ./

# Default command
CMD ["npm", "start"]

