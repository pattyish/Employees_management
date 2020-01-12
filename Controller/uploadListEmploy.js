import xlsx from "xlsx";
import EmployeeSchema from "../Model/employeeSchema";
import Helper from "../Helper/helper";
import DbOperation from "../Model/db";
import sendingEmail from "./sendingEmail";
import phoneValidation from "../Helper/phoneNumberValidation";
import idValidation from "../Helper/Idvalidation";

const Helpers = new Helper();
const DbQuery = new DbOperation("employees");
class uploadEmployee {
  async createEmployee(req, res) {
    try {
      const filesInfo = req.file;
      const wb = xlsx.readFile(`${filesInfo.path}`, { cellDates: true });
      const ws = wb.Sheets["Sheet1"];
      const data = xlsx.utils.sheet_to_json(ws);
      data.forEach(async (employee)=> {
        employee.nationalId = employee.nationalId.toString();
        employee.phone = employee.phone.toString();
        const { error } = await Helpers.employeeInfoValidation(employee);
        if (error)
          return res
            .status(400)
            .json({ status: 400, message: error.details[0].message });
        if (phoneValidation(employee.phone) == false) {
          return res
            .status(400)
            .json({ status: 400, message: "wrong phone number" });
        }
        if (idValidation(employee.nationalId) == false) {
          return res
            .status(400)
            .json({ status: 400, message: "national id should be 16 digits" });
        }
        const isIdExist = await DbQuery.selectByField(
          "nationalId",
          employee.nationalId
        );
        if (isIdExist.count > 0)
          return res.status(400).json({
            status: 400,
            message: ` employee with this ${employee.nationalId} is already exist `
          });
        const newEmployee = new EmployeeSchema(employee);
        newEmployee.position = employee.position;
        const saveEmployee = await DbQuery.insertData(newEmployee);
        if (!saveEmployee)
          return res
            .status(500)
            .json({ status: 500, message: "database operation fail" });
        sendingEmail(saveEmployee);
      });
      return res.status(201).json({
        status: 201,
        message: "employee created successful",
        data
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { uploadEmployee as default };
