import express from 'express';
import employeeList from '../Controller/employeeList';
import Authorisation from "../Middleware/authorization";
const router = express.Router();

const Authorise = new Authorisation();

router.get('/employees/', Authorise.auth, employeeList);

export { router as default };