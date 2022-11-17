const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCommentofPost = async (post_id) => {
  try {
    return await prisma.comments.findMany({
      where: {
        post_id,
      },
    });
  } catch (e) {
    throw e;
  }
};

const getCommentofPost = async (post_id, id) => {
  try {
    return prisma.comments.findFirst({
      where: {
        id,
        post_id,
      },
    });
  } catch (e) {
    throw e;
  }
};

const PostComment = async (data) => {
  try {
    return await prisma.comments.create({
      data,
    });
  } catch (e) {
    throw e;
  }
};

const DeleteComment = async (id) => {
  try {
    return await prisma.comments.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getAllCommentofPost,
  getCommentofPost,
  PostComment,
  DeleteComment,
};
