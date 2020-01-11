import EmployeeSchema from "../Model/employeeSchema";
import Helper from "../Helper/helper";
import DbOperation from "../Model/db";
import sendingEmail from "./sendingEmail";
import phoneValidation from "../Helper/phoneNumberValidation";
import idValidation from "../Helper/Idvalidation";

const Helpers = new Helper();
const DbQuery = new DbOperation("employees");
class EmployeeController {
  async createEmployee(req, res) {
    try {
      const { body } = req;
      const { error } = await Helpers.employeeInfoValidation(body);
      if (error)
        return res
          .status(400)
          .json({ status: 400, message: error.details[0].message });
      if (phoneValidation(body.phone) == false) {
        return res
          .status(400)
          .json({ status: 400, message: "wrong phone number" });
      }
      if (idValidation(body.nationalId) == false) {
        return res
          .status(400)
          .json({ status: 400, message: "national id should be 16 digits" });
      }
      const isIdExist = await DbQuery.selectByField(
        "nationalId",
        body.nationalId
      );
      if (isIdExist.count > 0)
        return res.status(404).json({
          status: 404,
          message: ` employee with this ${body.nationalId} is already exist `
        });
      const newEmployee = new EmployeeSchema(body);
      const saveEmployee = await DbQuery.insertData(newEmployee);
      if (!saveEmployee)
        return res
          .status(500)
          .json({ status: 500, message: "database operation fail" });
      sendingEmail(saveEmployee);
      return res.status(201).json({
        status: 201,
        message: "employee created successful",
        data: saveEmployee
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { EmployeeController as default };
