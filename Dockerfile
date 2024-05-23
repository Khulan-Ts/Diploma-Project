FROM node:16

RUN npm install -g expo-cli

WORKDIR /Diploma-Project

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 19006

CMD [ "npx", "expo", "start", "--web" ]