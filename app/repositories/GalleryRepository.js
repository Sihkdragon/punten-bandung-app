const { PrismaClient } = require('@prisma/client')

const Gallery = new PrismaClient().gallery

class GalleryRepository {
  async get(id = null) {
    try {
      if (!id) return await Gallery.findMany()
      return await Gallery.findFirst({ where: { id } })
    } catch (err) {
      throw err
    }
  }

  async create(data) {
    try {
      return await Gallery.create({ data })
    } catch (err) {
      throw err
    }
  }

  async update(id, data) {
    try {
      return await Gallery.update({ where: { id }, data })
    } catch (err) {
      throw err
    }
  }

  async delete(id) {
    try {
      return await Gallery.delete({ where: { id } })
    } catch (err) {
      throw err
    }
  }
}

module.exports = GalleryRepository
