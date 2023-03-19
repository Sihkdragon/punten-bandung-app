const { PrismaClient } = require("@prisma/client");

const Post = new PrismaClient().posts;

class PostRepository {
  async get(key) {
    try {
      if (!key) return await Post.findMany();
      const postData = await Post.findFirst({ where: key });
      return postData;
    } catch (err) {
      return err.message;
    }
  }

  async create(data) {
    try {
      return await Post.create(data);
      // return data;
    } catch (err) {
      throw err;
    }
  }

  async update(id, data) {
    try {
      return await Post.update({ where: { id }, data });
    } catch (err) {
      return err.message;
    }
  }

  async delete(id) {
    try {
      return await Post.delete({ where: { id } });
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = PostRepository;
