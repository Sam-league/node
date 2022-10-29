import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://AbhishekTamang:9041415907@cluster0.jiflw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database connected sucessfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
