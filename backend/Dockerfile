FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production
COPY . .
ENV PORT=4000
EXPOSE 4000
COPY wait-for-db.js ./
CMD ["sh", "-c", "node wait-for-db.js && node app.js"]

