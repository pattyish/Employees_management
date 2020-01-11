import express from 'express';
import managerSignUp from '../Controller/managerSignUp';
const router = express.Router();


router.post('/manager/signup', managerSignUp);

export { router as default };