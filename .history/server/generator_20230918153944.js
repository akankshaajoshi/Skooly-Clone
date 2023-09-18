const fs = require('fs');
const faker = require('faker');

const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      phoneNumber: faker.phone.phoneNumber(),
      website: faker.internet.url(),
      email: faker.internet.email(),
      timezone: faker.address.timeZone(),
      currency: faker.finance.currencyCode(),
      schoolAddress: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
      },
    });
    number--;
  }
  return persons;
};
fs.writeFileSync('server/db.json', JSON.stringify({ users: generatePersonsData(20) }));
