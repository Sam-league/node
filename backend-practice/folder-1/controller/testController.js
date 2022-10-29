import test1 from "../models/test1.js";
import bcrypt from "bcrypt";

const getTest = async (req, res) => {
  try {
    let result = await test1.find().limit(20);
    res.status(200).send(result);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
const createTest = async (req, res) => {
  try {
    let user = await test1.findOne({ email: req.body.email });
    if (user) return res.send("Email already exits");
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(req.body.password, salt);

    let result = await test1.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    res.status(201).send(result);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export { getTest, createTest };
