import DbOperation from "../Model/db";

const DbQuery = new DbOperation("employees");
export default async function(req, res) {
  try {
    const employeeList = await DbQuery.selectAll();
    if (!employeeList.count > 0)
      return res
        .status(404)
        .json({ status: 404, message: "employees not found" });
    const listOfEmployees = employeeList.allEmployee;
    res
      .status(200)
      .json({
        status: 200,
        message: "all registered employee",
        listOfEmployees
      });
  } catch (error) {
    throw error;
  }
}

