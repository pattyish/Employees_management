import express from 'express';
import SearchEmployee from '../Controller/searchEmployee';
const router = express.Router();
const Search = new SearchEmployee();

router.post('/employees/search/email', Search.searchEmployeeByEmail);
router.post('/employees/search/name', Search.searchEmployeeByname);
router.post('/employees/search/phone', Search.searchEmployeeByPhone);
router.post('/employees/search/position', Search.searchEmployeeByPosition);

export { router as default };