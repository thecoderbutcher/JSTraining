FROM node:alpine
WORKDIR /server
COPY package*.json .
RUN npm i
CMD [ npx prisma generate; npx prisma db push; npm run dev ]