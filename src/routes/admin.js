import { Router } from 'express';
import controllers_admin from '../controllers/admin';

const router_ = Router();

router_.post('/add-user', controllers_admin.addUser);

router_.get('/get-users', controllers_admin.getUsers);

router_.get('/get-user/:iduser', controllers_admin.getUser);

router_.put('/set-user/:iduser', controllers_admin.setUser);

router_.delete('/delete-user/:iduser', controllers_admin.deleteUser);

export default router_;