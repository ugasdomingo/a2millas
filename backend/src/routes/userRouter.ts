//Import tools
import { Router } from 'express';
import { dataAuthValidation } from '../middlewares/dataAuthValidation';
import { adminAuth } from '../middlewares/adminAuth';
import {
    register,
    login,
    refresh,
    allUsers,
} from '../controllers/userControllers';

//Define router
const userRouter = Router();

//Routes
userRouter.post('/register', dataAuthValidation, register);

userRouter.post('/login', dataAuthValidation, login);

userRouter.post('/refresh', refresh);

userRouter.get('/all-users', adminAuth, allUsers);

//Export router
export default userRouter;
