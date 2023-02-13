import { Router } from 'express';
import { join } from 'path';

const router_ = Router();

router_.get('/', (req, res, next) => {
  res.sendFile(join(require.main.path, 'views', 'index.html'));
});

export default router_;