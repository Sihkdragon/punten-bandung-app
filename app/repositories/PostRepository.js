const { PrismaClient } = require("@prisma/client");

const Post = new PrismaClient().posts;

class PostRepository {
  constructor() {
    this.selectedFieldDetail = {
      id: true,
      title: true,
      slug: true,
      type: true,
      thumbnail_url: true,
      body: true,
      tags: true,
      writer: {
        select: {
          name: true,
          role: true,
        },
      },
      comments: {
        select: { comment: true, name: true },
      },
      created_at: true,
      update_at: true,
    };
    this.selectedField = {
      id: true,
      title: true,
      slug: true,
      type: true,
      thumbnail_url: true,
      body: true,
      tags: true,
      writer: {
        select: {
          name: true,
          role: true,
        },
      },
      created_at: true,
      update_at: true,
    };
  }

  async get(key) {
    try {
      if (!key)
        return await Post.findMany({
          select: this.selectedField,
          orderBy: {
            update_at: "desc",
          },
        });

      const postData = await Post.findFirst({
        where: key,
        select: this.selectedFieldDetail,
      });
      return postData;
    } catch (err) {
      return err.message;
    }
  }

  async create(data) {
    try {
      return await Post.create(data);
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
      if (err.code === "P2025") {
        return null;
      }
      return err.message;
    }
  }
}

module.exports = PostRepository;
