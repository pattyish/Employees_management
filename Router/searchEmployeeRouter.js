import express from 'express';
import SearchEmployee from '../Controller/searchEmployee';
import Authorisation from "../Middleware/authorization";
const router = express.Router();

const Authorise = new Authorisation();
const Search = new SearchEmployee();

router.post('/employees/search/email', Authorise.auth, Search.searchEmployeeByEmail);
router.post('/employees/search/name', Authorise.auth, Search.searchEmployeeByname);
router.post('/employees/search/phone', Authorise.auth, Search.searchEmployeeByPhone);
router.post('/employees/search/position', Authorise.auth, Search.searchEmployeeByPosition);

export { router as default };