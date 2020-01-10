import EmployeeSchema from "../Model/employeeSchema";
import Helper from "../Helper/helper";
import DbOperation from "../Model/db";

const Helpers = new Helper();
const DbQuery = new DbOperation("employees");
class EmployeeController {
  async createEmployee(req, res) {
    try {
      const { body } = req;
      const { error } = await Helpers.employeeInfoValidation(body);
      if (error)
        return res
          .status(404)
          .json({ status: 404, message: error.details[0].message });
      const isIdExist = await DbQuery.selectByField(
        "nationalId",
        body.nationalId
      );
      if (isIdExist.count > 0)
        return res.status(404).json({
          status: 404,
          message: ` this ${body.email} is already exist `
        });
      const newEmployee = new EmployeeSchema(body);
      const saveEmployee = await DbQuery.insertData(newEmployee);
      if (!saveEmployee)
        return res
          .status(500)
          .json({ status: 500, message: "database operation fail" });
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
