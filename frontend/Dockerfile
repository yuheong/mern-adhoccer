FROM node:12.18.2
 
WORKDIR /var/app

COPY package.json /var/app/package.json
 
RUN npm install
 
COPY . .
 
CMD [ "npm", "start" ]