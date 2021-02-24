import DbOperation from "../Model/db";

const DbQuery = new DbOperation("employees");
export default class SearchEmployee {
  async searchEmployeeByname(req, res) {
    const { body } = req;
    const isEmployee = await DbQuery.selectByField("empl_name", body.empl_name);
    if (!isEmployee)
      return res
        .status(500)
        .json({ status: 500, message: "there is an error on db operation" });
    if (isEmployee.count == 0)
      return res.status(404).json({
        status: 404,
        message: `employee you are looking not found`,
      });
    res.status(200).json({
      status: 200,
      message: `search employee done successful!`,
      data: isEmployee.row[0],
    });
  }
  async searchEmployeeByPhone(req, res) {
    const { body } = req;
    const isEmployee = await DbQuery.selectByField("phone", body.phone);
    if (!isEmployee)
      return res
        .status(500)
        .json({ status: 500, message: "there is an error on db operation" });
    if (isEmployee.count == 0)
      return res.status(404).json({
        status: 404,
        message: `employee you are looking not found`,
      });
    res.status(200).json({
      status: 200,
      message: `search employ done successful!`,
      data: isEmployee.row[0],
    });
  }
  async searchEmployeeByEmail(req, res) {
    const { body } = req;
    const isEmployee = await DbQuery.selectByField("email", body.email);
    if (!isEmployee)
      return res
        .status(500)
        .json({ status: 500, message: "there is an error on db operation" });
    if (isEmployee.count == 0)
      return res.status(404).json({
        status: 404,
        message: `employee you are looking not found`,
      });
    res.status(200).json({
      status: 200,
      message: `search employ done successful!`,
      data: isEmployee.row[0],
    });
  }
  async searchEmployeeByPosition(req, res) {
    const { body } = req;
    const isEmployee = await DbQuery.selectByField("position", body.position);
    if (!isEmployee)
      return res
        .status(500)
        .json({ status: 500, message: "there is an error on db operation" });
    if (isEmployee.count == 0)
      return res.status(404).json({
        status: 404,
        message: `employee you are looking not found`,
      });
    res.status(200).json({
      status: 200,
      message: `search employee done successful!`,
      data: isEmployee.row[0],
    });
  }
}
