import DbOperation from "../Model/db";

const DbQuery = new DbOperation("employees");
export default class EditEmployeeRecord {
  async deleteEmployee(req, res) {
    const  id  = req.params.employeeid;
    const isEmployeeExist = await DbQuery.selectByField("empl_id", id);
    if (isEmployeeExist.count == 0)
      return res
        .status(404)
        .json({
          status: 404,
          message: `employee not found`
        });
    const DeleteEmployee = await DbQuery.deleteEmployee(id);
    if (!DeleteEmployee)
      return res
        .status(500)
        .json({ status: 500, message: "there is an error on db operation" });
    res
      .status(200)
      .json({
        status: 200,
        message: `employee with ${isEmployeeExist.row[0].email} is successful deleted`
      });
  }
}
