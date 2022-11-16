const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker/locale/id_ID");

const prisma = new PrismaClient();

async function createTags() {
  for (let i = 1; i <= 10; i++) {
    await prisma.posts_Tags.upsert({
      where: { id: i },
      update: {},
      create: {
        tag1: faker.word.adjective(),
        tag2: faker.word.adjective(),
        tag3: faker.word.adjective(),
        tag4: faker.word.adjective(),
        tag5: faker.word.adjective(),
        post_id: i,
      },
    });
  }
}

module.exports = createTags;
