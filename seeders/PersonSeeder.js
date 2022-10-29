const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

function generatePerson(limit) {
  let persons = [];
  for (i = 1; i < limit; i++) {
    let person = {};
    person.name = faker.name.findName();
    person.isVerified = faker.datatype.boolean();
    person.email = faker.internet.email().toLowerCase();
    person.phone = faker.phone.phoneNumber();
    person.salary = faker.finance.amount();
    persons.push(person);
  }
  return persons;
}

module.exports = generatePerson;
