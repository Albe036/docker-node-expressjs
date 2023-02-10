import { Router } from 'express';
import { join } from 'path';


const router_ = Router();

router_.use('/', (req, res, next) => {
  //res.status(404).send(`<h1>Page not found!!!</h1>`); //.setHeader() you can also define the header
  res.sendFile(join(__dirname, '../', 'views', 'notFound.html'));
});

export default router_;