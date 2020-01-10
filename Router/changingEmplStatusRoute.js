import express from 'express';
import ChangingStatus from '../Controller/changingStatus';
const router = express.Router();
const ChangeEmployeeStatus = new ChangingStatus();

router.put('/employees/:employeeid/activate', ChangeEmployeeStatus.activateEmployee);

export { router as default };