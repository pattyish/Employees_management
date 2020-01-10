import express from 'express';
import bodyParser from 'body-parser';
import createEmployee from './createEmployeeRouter';
import editEmployee from './editEmployeeRecord';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next)=> {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
   if (req.method === 'OPTIONS'){
       res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
       res.status(200).json({});
   }
   next();
});
app.use('/employee_management/api', createEmployee);
app.use('/employee_management/api', editEmployee);

export default app;

