const { PrismaClient } = require("@prisma/client");
const PostRepository = require("../repositories/PostRepository");
const prisma = new PrismaClient();

class PostService {
  constructor() {
    this.Post = new PostRepository();
  }
  async getAllPost(type) {
    try {
      if (!type) {
        return await this.Post.get();
      }
      return await this.Post.get({ type });
    } catch (err) {
      throw err;
    }
  }
  async getPost(searcher) {
    try {
      return await this.Post.get(searcher);
    } catch (err) {
      throw err;
    }
  }
  async savePost(data) {
    try {
      return this.Post.create({
        data,
      });
    } catch (err) {
      throw err;
    }
  }
  async editPost(id, data) {
    try {
      return await this.Post.update(+id, data);
    } catch (e) {
      throw e;
    }
  }
  async deletePost(id) {
    try {
      return await this.Post.delete(id);
    } catch (err) {
      throw err;
    }
  }
}

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
        redacture: {
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

/**
 *
 * @returns Latest Tabloids
 */

const getAllTabloid = async () => {
  try {
    const res = await prisma.posts.findMany({
      select: {
        id: true,
        title: true,
        redacture: {
          select: {
            name: true,
            role: true,
          },
        },
        editor: true,
        thumbnail_url: true,
        writer: true,
        tags: true,
        body: true,
        created_at: true,
        update_at: true,
      },
      orderBy: {
        update_at: "desc",
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

// module.exports = {
//   getTabloid,
//   getAllTabloid,
//   PostTabloid,
//   EditTabloid,
//   DeleteTabloid,
// };
module.exports = PostService;
