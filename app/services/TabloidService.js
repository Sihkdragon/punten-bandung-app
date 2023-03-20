const { slugify } = require('../helpers/String')
const PostRepository = require('../repositories/PostRepository')

class PostService {
  constructor() {
    this.Post = new PostRepository()
  }
  async getAllPost(type) {
    try {
      if (!type) {
        return await this.Post.get()
      }
      return await this.Post.get({ type })
    } catch (err) {
      throw err
    }
  }
  async getPost(searcher) {
    try {
      return await this.Post.get(searcher)
    } catch (err) {
      throw err
    }
  }
  async savePost(data) {
    try {
      return this.Post.create({
        data
      })
    } catch (err) {
      throw err
    }
  }
  async editPost(id, data) {
    if (data.title) {
      data.slug = slugify(data.title) // Slugify title
    }

    try {
      return await this.Post.update(+id, data)
    } catch (e) {
      throw e
    }
  }
  async deletePost(id) {
    try {
      return await this.Post.delete(id)
    } catch (err) {
      throw err
    }
  }
}

module.exports = PostService
