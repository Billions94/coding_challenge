# Base image
FROM node:20.14-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

RUN npm run dev

EXPOSE 3000

CMD ["npm", "run", "dev"]
