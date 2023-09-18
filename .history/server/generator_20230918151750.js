const faker = require("faker");
const fs = require("fs");
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      name: faker.name.firstName(),
      email: faker.email(),
      password: faker.name.firstName() + "12fds34" ,
    });
    number--;
  }
  return persons;
};
fs.writeFileSync(
  "server/db.json",
  JSON.stringify({ users: generatePersonsData(20) })
);