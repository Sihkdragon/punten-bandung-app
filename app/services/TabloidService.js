const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getTabloid = async (TabloidID) => {
  try {
    const res = await prisma.posts.findFirst({
      where: { id: TabloidID },
    });

    return res;
  } catch (e) {
    throw e;
  }
};

const getAllTabloid = async () => {
  try {
    const res = await prisma.posts.findMany({
      select: {
        id: true,
        title: true,
        author: {
          select: {
            name: true,
            role: true,
          },
        },
        editor: true,
        thumbnail_url: true,
        writer: true,
        tags: true,
        created_at: true,
      },
    });
    return res;
  } catch (e) {
    throw e;
  }
};

const PostTabloid = async (data) => {
  try {
    await prisma.posts.create({
      data,
    });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getTabloid,
  getAllTabloid,
  PostTabloid,
};
