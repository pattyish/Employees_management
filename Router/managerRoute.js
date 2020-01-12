import express from 'express';
import managerSignin from '../Controller/managerLogin';
import managerSignUp from '../Controller/managerSignUp';
const router = express.Router();


router.post('/manager/signup', managerSignUp);
router.post('/manager/signin', managerSignin);

export { router as default };