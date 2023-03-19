const { PrismaClient } = require("@prisma/client");
const CommentRepository = require("../repositories/CommentRepository");
const prisma = new PrismaClient();
class CommentService {
  constructor() {
    this.Comment = new CommentRepository();
  }
  async getComments(post_id = null) {
    try {
      if (!post_id) {
        return await this.Comment.get();
      }
      return await this.Comment.get({ post_id });
    } catch (err) {
      throw err;
    }
  }
  async getComment(searcher) {
    try {
      return await this.Comment.get(searcher, true);
    } catch (err) {
      throw err;
    }
  }
  async saveComment(data) {
    try {
      return this.Comment.create({
        data,
      });
    } catch (err) {
      throw err;
    }
  }
  async editComment(id, data) {
    try {
      return await this.Comment.update(+id, data);
    } catch (e) {
      throw e;
    }
  }
  async deleteComment(id) {
    try {
      return await this.Comment.delete(id);
    } catch (err) {
      throw err;
    }
  }
}

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

module.exports = CommentService;
