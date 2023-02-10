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
import home from './routes/home';

app.use(bodyParser.urlencoded());//{extended: false}

app.use(home); //home (index.html)
app.use('/admin',admin); //router add-product
app.use(notFound); //Page not found

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`.cyan.bold);
});
