const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker/locale/id_ID");
const { getPostUrl } = require("../../app/helpers/URL/SlugGenerator");

const prisma = new PrismaClient();

async function createTabloid() {
  for (let i = 1; i <= 10; i++) {
    let title = faker.random.words(8);
    await prisma.posts.upsert({
      where: { id: i },
      update: {},
      create: {
        title,
        writer: faker.name.fullName(),
        editor: faker.name.fullName(),
        thumbnail_url: faker.image.imageUrl(900, 500, "bandung"),
        body: Seedparagraph(),
        redacture_id: 1,
      },
    });
  }
}

const Seedparagraph = () => {
  let paragraph = "<p>";
  for (let i = 1; i <= 10; i++) {
    paragraph += `${faker.lorem.paragraphs(5, "</p> <p>")}`;
  }

  return paragraph;
};

module.exports = createTabloid;
