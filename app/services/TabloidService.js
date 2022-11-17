const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getTabloid = async (TabloidID) => {
  try {
    const res = await prisma.posts.findFirst({
      where: { id: TabloidID },
      select: {
        _count: true,
        id: true,
        title: true,
        writer: true,
        editor: true,
        body: true,
        thumbnail_url: true,
        tags: {
          select: {
            tag1: true,
            tag2: true,
            tag3: true,
            tag4: true,
            tag5: true,
          },
        },
        author: {
          select: {
            name: true,
            role: true,
          },
        },
        comments: true,
        created_at: true,
        update_at: true,
      },
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
    return await prisma.posts.create({
      data,
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
