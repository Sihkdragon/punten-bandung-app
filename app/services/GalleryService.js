const { PrismaClient } = require('@prisma/client')
const GalleryRepository = require('../repositories/GalleryRepository')

const prisma = new PrismaClient()

class GalleryService {
  constructor() {
    this.Gallery = new GalleryRepository()
  }

  async getAllGallery() {
    try {
      return await this.Gallery.get()
    } catch (err) {
      throw err
    }
  }
  async getGallery(searcher) {
    try {
      return await this.Gallery.get(searcher)
    } catch (err) {
      throw err
    }
  }
  async saveGallery(data) {
    try {
      return this.Gallery.create(data)
    } catch (err) {
      throw err
    }
  }
  async editGallery(id, data) {
    try {
      return await this.Gallery.update(+id, data)
    } catch (e) {
      throw e
    }
  }
  async deleteGallery(id) {
    try {
      return await this.Gallery.delete(id)
    } catch (err) {
      throw err
    }
  }
}

module.exports = GalleryService
