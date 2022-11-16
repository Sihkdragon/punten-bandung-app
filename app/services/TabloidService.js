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
      data: {
        ...data,
        tags: {
          create: {
            tag1: "tag1",
            tag2: "tag2",
            tag3: "tag3",
            tag4: "tag4",
            tag5: "tag5",
          },
        },
      },
    });
  } catch (e) {
    throw e;
  }
};

const EditTabloid = async (id, data) => {
  try {
    await prisma.posts.update({
      where: { id },
      data,
    });
  } catch (e) {
    throw e;
  }
};

const DeleteTabloid = async (id) => {
  try {
    await prisma.posts.delete({
      where: { id },
    });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getTabloid,
  getAllTabloid,
  PostTabloid,
  EditTabloid,
  DeleteTabloid,
};
