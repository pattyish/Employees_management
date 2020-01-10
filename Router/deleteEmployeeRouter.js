import express from 'express';
import DeleteEmployee from '../Controller/deleteEmployeeRecord';
const router = express.Router();
const EmployeeDeleted = new DeleteEmployee();

router.delete('/employees/:employeeid', EmployeeDeleted .deleteEmployee);

export { router as default };