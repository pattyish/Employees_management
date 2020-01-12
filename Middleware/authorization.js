import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class Authorisation {
  async auth(req, res, next) {
    try {
      const token = req.headers.authentication.split(" ")[1];
      if (!token)
        return res
          .status(404)
          .json({ status: 404, message: "there is no token provided" });
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      if (!verifyToken)
        return res
          .status(400)
          .json({ status: 400, message: "invalid token provided" });
      req.user = verifyToken;
      next();
    } catch (error) {
      console.log(error);
    }
  }
}

export { Authorisation as default };
