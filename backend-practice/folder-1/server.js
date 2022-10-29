import express from "express";
import connectDB from "./dbconn.js";
import router from "./routes/testRoute.js";
import login from "./controller/authController.js";
import dotenv from "dotenv";
const app = express();
connectDB();
dotenv.config();
app.use(express.json());
app.use("/test", router);
app.use("/auth", login);

app.listen(4000, () => {
  console.log("server has started on port 4000");
});
