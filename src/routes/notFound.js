import { Router } from 'express';


const router_ = Router();

router_.use('/', (req, res, next) => {
  res.setHeader().status(404).send(`<h1>Page not found!!!</h1>`);
});

export default router_;