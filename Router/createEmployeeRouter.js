import express from 'express';
import Employeecontroller from '../Controller/createEmployer';
const router = express.Router();
const CreateEmployee = new Employeecontroller();

router.post('/employees', CreateEmployee.createEmployee);

export { router as default };