const { PrismaClient } = require("@prisma/client");
const { HashPassword } = require("../../app/helpers/Hash/hashHelpers");

const prisma = new PrismaClient();

async function createUser() {
  await prisma.users.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      name: "Admin 1",
      username: "admin",
      email: "admin@mail.com",
      password: await HashPassword("admin"),
      role: "admin",
    },
  });
}

module.exports = createUser;
