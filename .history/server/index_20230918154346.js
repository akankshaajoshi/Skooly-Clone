const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const faker = require('faker');

// Add custom routes
server.get('/api/users', (req, res) => {
  const users = [];

  // Generate 10 fake user objects
  for (let i = 0; i < 20; i++) {
    const user = {
      id: i + 1,
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
      }
    };

    users.push(user);
  }

  res.json(users);
});

server.use(middlewares);
server.use(jsonServer.router('db.json')); // Assuming your JSON data is in db.json

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
