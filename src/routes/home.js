import { application, Router } from 'express';
import { join } from 'path';

const router_ = Router();


router_.get('/', (req, res, next) => {
  res.sendFile(join(__dirname, '../', 'views', 'index.html'));
});

export default router_;