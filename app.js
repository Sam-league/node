const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", async (req, res) => {
  try {
    let { data } = await axios("http://localhost:4000/people");
    res.send(data);
  } catch (error) {
    console.log(error.messages);
  }
});

app.listen(8000, () => {
  console.log("server is running up!!");
});
