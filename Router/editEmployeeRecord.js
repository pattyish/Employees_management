import express from 'express';
import EditEmployeeRecord from '../Controller/editEmployeeRecord';
const router = express.Router();
const EditEmployee = new EditEmployeeRecord();

router.put('/employees/:employeeid', EditEmployee.editRecord);

export { router as default };