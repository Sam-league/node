import jwt from "jsonwebtoken";
import test1 from "../models/test1.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    let user = await test1.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User not found");

    let validate = await bcrypt.compare(req.body.password, user.password);

    if (!validate) return res.status(401).send("Authentication Unsuccessful");

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY
    );
    res.status(200).send({ success: true, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export default login;
