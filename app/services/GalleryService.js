const { getAll } = require("./BASESERVICE");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getGallery = async () => {
  try {
    return await getAll("gallery");
  } catch (e) {
    throw e;
  }
};

const PostImage = async (data) => {
  try {
    prisma.gallery.create({
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
