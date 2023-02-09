FROM node:19

RUN apt-get -y update
RUN apt-get -y install git

WORKDIR /app

COPY "package.json" /app

RUN npm install

COPY . /app

CMD ["npm", "run", "dev"]

