import express from 'express';
import ChangingStatus from '../Controller/changingStatus';
import Authorisation from "../Middleware/authorization";
const router = express.Router();

const Authorise = new Authorisation();
const ChangeEmployeeStatus = new ChangingStatus();

router.put('/employees/:employeeid/activate', Authorise.auth, ChangeEmployeeStatus.activateEmployee);
router.put('/employees/:employeeid/suspend', Authorise.auth, ChangeEmployeeStatus.suspendEmployee);

export { router as default };