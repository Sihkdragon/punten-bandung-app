const { PrismaClient } = require("@prisma/client");

const Comment = new PrismaClient().comments;

class CommentRepository {
  async get(searcher = null, isSingle = false) {
    try {
      if (!searcher) return await Comment.findMany();
      if (isSingle) return await Comment.findFirst({ where: searcher });
      return await Comment.findMany({ where: searcher });
    } catch (err) {
      throw err;
    }
  }

  async create(data) {
    try {
      return await Comment.create({ data });
    } catch (err) {
      throw err;
    }
  }

  async update(id, data) {
    try {
      return await Comment.update({ where: { id }, data });
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      return await Comment.delete({ where: { id } });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CommentRepository;
