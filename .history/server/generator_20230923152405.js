const fs = require('fs');
const { faker } = require('@faker-js/faker');

const generatePersonsData = (number) => {
  const persons = [];
  let pid = 1;
  while (number >= 0) {
    persons.push({
      id: pid,
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
      },
    });
    pid += 1;
    number -= 1;
  }
  return persons;
};

function generateCourseData(count) {
  const courses = [];

  for (let i = 0; i < count; i++) {
    const course = {
      id: i,
      courseName: faker.word.words(2), // Generate a random course name
      classType: faker.helpers
        .uniqueArray(['Group', 'One to one'], 1)
        .toString(),
      category: faker.helpers
        .uniqueArray(['Online school', 'Preschool'], 1)
        .toString(), // Random category
      pricingOption: faker.helpers.uniqueArray(['Free', 'Paid'], 1).toString(), // Random pricing option
      branches: faker.helpers.uniqueArray(['Main', 'Other'], 1).toString(), // Random branches
    };
    courses.push(course);
  }
  return courses;
}

function generateStudentData(count) {
  const students = [];

  for (let i = 0; i < count; i++) {
    const studentId = `TESSE${faker.number.int()}`;
    const student = {
      id: i,
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      gender: faker.helpers.uniqueArray(['Male', 'Female'], 1).toString(),
      ageGroup: faker.helpers.uniqueArray(['Child', 'Adult'], 1).toString(), // Generate a random course name
      status: faker.helpers
        .uniqueArray(['Active', 'New', 'Waitlisted'], 1)
        .toString(),
      studentId,
      dob: faker.date.past().toISOString().substring(0, 10),
      mother: {
        email: faker.internet.email(),
        number: faker.phone.number(),
      },
      father: {
        email: faker.internet.email(),
        number: faker.phone.number(),
      },
    };
    students.push(student);
  }
  return students;
}

function generateStaffData(count) {
  const staffs = [];

  for (let i = 0; i < count; i++) {
    const staff = {
      id: i,
      name: `${faker.person.firstName()} ${faker.person.lastName()}`,
      email: faker.internet.email,
      phone: faker.phone.number,
      designation: faker.helpers
        .uniqueArray(['Intern', 'Employee'], 1)
        .toString(), // Generate a random course name
      status: faker.helpers
        .uniqueArray(['Active', 'New', 'Waitlisted'], 1)
        .toString(),
      studentId,
      dob: faker.date.past().toISOString().substring(0, 10),
      mother: {
        email: faker.internet.email(),
        number: faker.phone.number(),
      },
      father: {
        email: faker.internet.email(),
        number: faker.phone.number(),
      },
    };
    students.push(student);
  }
  return students;
}

fs.writeFile(
  'server/db.json',
  JSON.stringify({
    users: generatePersonsData(20),
    courses: generateCourseData(20),
    students: generateStudentData(10),
  }),
  () => console.log('data written'),
);
