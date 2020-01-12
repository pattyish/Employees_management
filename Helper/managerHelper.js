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

  async hashPassword(mangerPassword) {
    return bcrypt.hashSync(mangerPassword, 10);
  }

  comparePassword(managerPassword, hashedPassword) {
    return bcrypt.compareSync(managerPassword, hashedPassword);
  }
  managerInfoValidation(body) {
    const schema = Joi.object({
      manager_name: Joi.string()
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
        .email({ minDomainSegments: 2 })
        .required(),
      dob: Joi.string()
        .min(5)
        .required(),
      position: Joi.string(),
      status: Joi.string(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
    });
    return schema.validate(body);
  }
  credentialValidation(body) {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
    });
    return schema.validate(body);
  }
}

export default Userhelper;
