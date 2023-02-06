FROM node:19

WORKDIR /app

COPY "package.json" .

RUN npm install

RUN apt-get -y update
RUN apt-get -y install git

COPY . /app

CMD ["node", "src/index.js"]

