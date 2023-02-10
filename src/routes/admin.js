import { Router } from 'express';

const router_ = Router();

let result;

router_.get("/add-product", (req, res, next) => {
  res.status(200).send(
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

router_.post('/product', (req, res, next) => {
  console.log(req.body);
  result = req.body.title;
  res.redirect('/');
});

export default router_;