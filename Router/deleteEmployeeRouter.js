import express from 'express';
import DeleteEmployee from '../Controller/deleteEmployeeRecord';
import Authorisation from "../Middleware/authorization";
const router = express.Router();

const Authorise = new Authorisation();
const EmployeeDeleted = new DeleteEmployee();

router.delete('/employees/:employeeid', Authorise.auth, EmployeeDeleted .deleteEmployee);

export { router as default };