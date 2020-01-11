import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Joi from "@hapi/joi";

dotenv.config();
class Userhelper {
  generateToken(managerInfo) {
    const Token = jwt.sign(
      {
        id: managerInfo.empl_id,
        email: managerInfo.email,
        position: managerInfo.position
      },
      process.env.SECRET_KEY,
      { expiresIn: "2d" }
    );
    return Token;
  }

  async hashPassword(userPassword) {
    return bcrypt.hashSync(userPassword, 10);
  }

  comparePassword(userPassword, hashedPassword) {
    return bcrypt.compareSync(userPassword, hashedPassword);
  }
  managerInfoValidation(body) {
    const schema = Joi.object({
      empl_name: Joi.string()
        .min(5)
        .required(),
      nationalId: Joi.string()
        .min(4)
        .required(),
      phone: Joi.string()
        .min(10)
        .max(13)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net",] } })
        .required(),
      dob: Joi.string()
        .min(5)
        .required(),
      position: Joi.string(),
      status: Joi.string()
    });
    return schema.validate(body);
  }
}

export default Userhelper;
