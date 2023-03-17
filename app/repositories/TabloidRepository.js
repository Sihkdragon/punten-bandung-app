const { PrismaClient } = require('@prisma/client')

const Post = new PrismaClient().posts

class TabloidRepository {
  async get(id = null) {
    try {
      if (!id) return await Post.findMany()
      return await Post.findFirst(id)
    } catch (err) {
      throw err
    }
  }

  async create() {
    try {
      return await Post.create({ data })
    } catch (err) {
      throw err
    }
  }

  async update(id, data) {
    try {
      return await Post.update({ where: { id }, data })
    } catch (err) {
      throw err
    }
  }

  async delete(id) {
    try {
      return await Post.delete({ where: { id } })
    } catch (err) {
      throw err
    }
  }
}

module.exports = TabloidRepository
