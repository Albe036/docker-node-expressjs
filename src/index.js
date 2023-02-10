//Native module
import http from 'http';
//External module
import express from "express";
import colors from "colors";
import bodyParser from 'body-parser';

const PORT = 3000;

colors.enable();
const app = express();
const server = http.createServer(app);

import admin from './routes/admin';
import notFound from './routes/notFound';

app.use(bodyParser.urlencoded());//{extended: false}
//router add-product
app.use(admin);
//Page not found
app.use(notFound);

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`.cyan.bold);
});
