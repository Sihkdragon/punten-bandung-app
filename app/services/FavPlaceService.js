const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getFavPlace = async () => {
  try {
    return await prisma.favPlaces.findMany({
      take: 3,
      orderBy: {
        update_at: "desc",
      },
    });
  } catch (e) {
    throw e;
  }
};

const PostImage = async (data) => {
  try {
    await prisma.favPlaces.create({
      data,
    });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getFavPlace,
  PostImage,
};
