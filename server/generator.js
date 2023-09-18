const fs = require('fs')
const { faker } = require('@faker-js/faker');
const generatePersonsData = (number) => {
    const persons = [];
    let pid = 1;
    while (number >= 0) {
      persons.push({
        id: pid++ ,
        phoneNumber: faker.phone.number(),
        website: faker.internet.url(),
        email: faker.internet.email(),
        timezone: faker.location.timeZone(),
        currency: faker.finance.currencyCode(),
        schoolAddress: {
          street: faker.location.buildingNumber(),
          city: faker.location.city(),
          state: faker.location.state(),
          zipCode: faker.location.zipCode(),
        }
      });
      number--;
    }
    return persons;
  };

  fs.writeFile(
    "server/db.json",
    JSON.stringify({ users: generatePersonsData(20) }),
    ()=>console.log("data written")
  );
