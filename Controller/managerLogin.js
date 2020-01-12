import Helper from "../Helper/managerHelper";
import DbOperation from "../Model/db";

const Helpers = new Helper();
const DbQuery = new DbOperation("employees");
export default async function(req, res) {
  try {
    const { body } = req;
    const { error } = await Helper.credentialValidation(body);
    if (error)
      return res
        .status(404)
        .json({ status: 404, message: error.details[0].message });
    const checkEmail = await DbQuery.selectByField("email", body.email);
    if (!checkEmail.count > 0)
      return res.status(401).json({
        status: 401,
        message: ` this ${body.email} is not registered, use correct email `
      });
    const checkPassword = await Helper.comparePassword(
      body.password,
      checkEmail.row[0].password
    );
    const managerName = checkEmail.row[0].empl_name;
    const managerEmail = checkEmail.row[0].email;
    if (!checkPassword)
      return res
        .status(401)
        .json({ status: 401, message: "password is incorrect" });
    const generateToken = await Helper.generateToken(checkEmail.row[0]);
    return res.status(200).json({
      status: 200,
      message: "manager  login successful",
      data: {
        managerName,
        managerEmail
      },
      token: generateToken
    });
  } catch (error) {
    throw error;
  }
}
