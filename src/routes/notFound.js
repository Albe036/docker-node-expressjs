import { Router } from 'express';
import err404 from '../controllers/404';


const router_ = Router();

router_.use('/', err404);

export default router_;