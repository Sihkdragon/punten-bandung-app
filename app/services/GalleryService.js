const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getGallery = async () => {
  try {
    return await prisma.gallery.findMany({
      take: 16,
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
    await prisma.gallery.create({
      data,
    });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getGallery,
  PostImage,
};
