FROM node:alpine
WORKDIR /server
COPY package*.json .
RUN npm i
CMD [ "npm", "run", "dev" ]