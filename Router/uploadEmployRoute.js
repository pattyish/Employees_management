import express from 'express';
import UploadEmployee from '../Controller/uploadListEmploy';
import Authorisation from "../Middleware/authorization";
import upload from "../Middleware/uploadListEmplo";
const router = express.Router();

const Authorise = new Authorisation();
const listToUpload = new UploadEmployee();
router.post('/employees/employeelist', Authorise.auth, upload.single('files'), listToUpload.createEmployee);

export { router as default };