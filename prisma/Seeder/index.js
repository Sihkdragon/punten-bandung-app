const { PrismaClient } = require("@prisma/client");
const createUser = require("../Factory/UserFactory");
const createTabloid = require("../Factory/TabloidFactory");
const createGallery = require("../Factory/GalleryFactory");
const createTags = require("../Factory/PostTagFactory");
const createComments = require("../Factory/CommentFactory");
const createFavPlace = require("../Factory/FavPlaceFactory");

const prisma = new PrismaClient();

async function main() {
  await createUser();
  // await createTabloid();
  await createGallery();
  // await createTags();
  // await createComments();
  await createFavPlace();
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.error("Database Seeded Sucessfully");
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
