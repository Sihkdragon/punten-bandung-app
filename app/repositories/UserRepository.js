const { PrismaClient } = require('@prisma/client')

const User = new PrismaClient().users

class UserRepository {
  async get(searcher = null) {
    try {
      if (!searcher) return await User.findMany()
      return await User.findFirst({ where: searcher })
    } catch (err) {
      throw err
    }
  }

  async create(data) {
    try {
      return await User.create({ data })
    } catch (err) {
      throw err
    }
  }

  async update(id, data) {
    try {
      return await User.update({ where: { id }, data })
    } catch (err) {
      throw err
    }
  }

  async delete(id) {
    try {
      return await User.delete({ where: { id } })
    } catch (err) {
      throw err
    }
  }
}

module.exports = UserRepository
