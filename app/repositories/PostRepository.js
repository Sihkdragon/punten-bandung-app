const { PrismaClient } = require("@prisma/client");

const Post = new PrismaClient().posts;

class PostRepository {
  async get(key) {
    try {
      if (!key)
        return await Post.findMany({
          select: {
            id: true,
            title: true,
            writer: {
              select: {
                name: true,
                role: true,
              },
            },
            thumbnail_url: true,
            tags: true,
            body: true,
            created_at: true,
            update_at: true,
          },
          orderBy: {
            update_at: "desc",
          },
        });
      const postData = await Post.findFirst({
        where: key,
        select: {
          id: true,
          title: true,
          writer: {
            select: {
              name: true,
              role: true,
            },
          },
          thumbnail_url: true,
          tags: true,
          body: true,
          created_at: true,
          update_at: true,
        },
        orderBy: {
          update_at: "desc",
        },
      });
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
      if (err.code === "P2025") {
        return null;
      }
      return err.message;
    }
  }
}

module.exports = PostRepository;
