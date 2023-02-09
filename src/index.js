import http from "http";

import express from "express";
import colors from "colors";
import bodyParser from 'body-parser';

const PORT = 3000;

colors.enable();
const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded());//{extended: false}

app.use("/add-product", (req, res, next) => {
  res.send(
    `<html>
    <body>
      <form action="/product" method="POST">
        <input type="text" name="title"/>
        <button type="submit">send book</button>
      </form>
    </body>
  </html>`
  );
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use("/", (req, res, next) => {
  res.send("<h1>Sorry!, the route not found</h1>");
});

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`.cyan.bold);
  console.log('Cambio para rama dev');
});
