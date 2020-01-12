import EmployeeSchema from "../Model/employeeSchema";
import Helper from "../Helper/helper";
import DbOperation from "../Model/db";
import phoneValidation from "../Helper/phoneNumberValidation";
import idValidation from "../Helper/Idvalidation";

const Helpers = new Helper();
const DbQuery = new DbOperation("employees");
export default class EditEmployeeRecord {
  async editRecord(req, res) {
    const id = req.params.employeeid;
    const { body } = req;
    const { error } = await Helpers.employeeInfoValidation(body);
    if (error)
      return res
        .status(404)
        .json({ status: 404, message: error.details[0].message });
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
    const changesOnEmployee = new EmployeeSchema(body);
    changesOnEmployee.position = body.position;
    const updateEmployee = await DbQuery.editData(id, changesOnEmployee);
    if (!updateEmployee)
      return res
        .status(500)
        .json({ status: 500, message: "there is an error on db operation" });
    res.status(200).json({
      status: 200,
      message: "employee records updated successfull",
      data: { updateEmployee }
    });
  }
}
