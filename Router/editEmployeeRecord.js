import express from 'express';
import EditEmployeeRecord from '../Controller/editEmployeeRecord';
import Authorisation from "../Middleware/authorization";
const router = express.Router();

const Authorise = new Authorisation();
const EditEmployee = new EditEmployeeRecord();

router.put('/employees/:employeeid', Authorise.auth, EditEmployee.editRecord);

export { router as default };