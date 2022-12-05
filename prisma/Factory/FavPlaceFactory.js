const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker/locale/id_ID");

const prisma = new PrismaClient();

async function createFavPlace() {
  for (let i = 1; i <= 10; i++) {
    await prisma.favPlaces.upsert({
      where: { id: i },
      update: {},
      create: {
        category: faker.random.words(2),
        image_url: faker.image.imageUrl(),
        location: faker.address.county() + ", " + faker.address.city(),
      },
    });
  }
}

module.exports = createFavPlace;
