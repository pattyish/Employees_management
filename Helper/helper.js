import Joi from "@hapi/joi";
import dotenv from "dotenv";

dotenv.config();
class Userhelper {
  employeeInfoValidation(body) {
    const schema = Joi.object ({
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
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      dob: Joi.string()
        .min(5)
        .required(),
      position: Joi.string()
        .max(150)
        .required(),
      status: Joi.string()
    });
    return schema.validate(body);
  }
}

export default Userhelper;
