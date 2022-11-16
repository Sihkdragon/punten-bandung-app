const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker/locale/id_ID");

const prisma = new PrismaClient();

async function createComments() {
  for (let i = 1; i <= 10; i++) {
    await prisma.comments.upsert({
      where: { id: i },
      update: {},
      create: {
        name: faker.name.fullName(),
        email: faker.internet.email(),
        comment: faker.lorem.words(10 + i),
        post_id: i,
      },
    });
  }
}

module.exports = createComments;
