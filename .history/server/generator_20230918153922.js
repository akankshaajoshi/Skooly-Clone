import { writeFileSync } from 'fs';
import { phone, internet, address, finance } from 'faker';

const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      phoneNumber: phone.phoneNumber(),
      website: internet.url(),
      email: internet.email(),
      timezone: address.timeZone(),
      currency: finance.currencyCode(),
      schoolAddress: {
        street: address.streetAddress(),
        city: address.city(),
        state: address.state(),
        zipCode: address.zipCode(),
      },
    });
    number--;
  }
  return persons;
};
writeFileSync('server/db.json', JSON.stringify({ users: generatePersonsData(20) }));
