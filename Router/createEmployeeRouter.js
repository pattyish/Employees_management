import express from 'express';
import Employeecontroller from '../Controller/createEmployer';
import Authorisation from "../Middleware/authorization";
const router = express.Router();

const Authorise = new Authorisation();
const CreateEmployee = new Employeecontroller();

router.post('/employees', Authorise.auth, CreateEmployee.createEmployee);

export { router as default };