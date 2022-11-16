const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker/locale/id_ID");

const prisma = new PrismaClient();

async function createTabloid() {
  for (let i = 1; i <= 10; i++) {
    await prisma.posts.upsert({
      where: { id: i },
      update: {},
      create: {
        title: faker.random.words(8),
        writer: faker.name.fullName(),
        editor: faker.name.fullName(),
        thumbnail_url: faker.image.imageUrl(900, 500, "bandung"),
        body: Seedparagraph(),
        author_id: 1,
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
