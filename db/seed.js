import db from "#db/client";
import { createEmployees } from "#db/queries/employees";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  for (let i = 0; i < 10; i++) {
    const employees = {
      name: faker.person.firstName(),
      birthday: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
      salary: faker.number.binary({ min: 25000, max: 105535 }),
    };
    await createEmployees(employees);
  }
  // TODO
}
