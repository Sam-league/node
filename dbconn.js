const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(
       
    )
    .then((res) => console.log("connected to mongodb"))
    .catch((err) => console.log(err));
};

module.exports = connectDb;
