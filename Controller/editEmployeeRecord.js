import EmployeeSchema from "../Model/employeeSchema";
import Helper from "../Helper/helper";
import DbOperation from "../Model/db";

const Helpers = new Helper();
const DbQuery = new DbOperation("employees");
export default class EditEmployeeRecord {
  async editRecord(req, res) {
    const  id = req.params.employeeid;
    const { body } = req;
    console.log(id);
    const { error } = await Helpers.employeeInfoValidation(body);
    if (error)
      return res
        .status(404)
        .json({ status: 404, message: error.details[0].message });
    const changesOnEmployee = new EmployeeSchema(body);
    const updateEmployee = await DbQuery.editData(id, changesOnEmployee);
    if (!updateEmployee)
      return res
        .status(500)
        .json({ status: 500, message: "there is an error on db operation" });
    res
      .status(200)
      .json({
        status: 200,
        message: "employee records updated successfull",
        data: { updateEmployee }
      });
  }
}
