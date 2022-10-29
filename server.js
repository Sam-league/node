const express = require("express");
const connectDb = require("./dbconn");
const Person = require("./models/Person");
const generatePerson = require("./seeders/PersonSeeder");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
connectDb();

// Person.insertMany(generatePerson(40));



app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
