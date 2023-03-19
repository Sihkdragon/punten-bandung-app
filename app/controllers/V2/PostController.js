const ParseBody = require('../../helpers/Parser/tabloidParser')
const { API_RESPONSE } = require('../../resources/APIResponse')
const PostService = require('../../services/TabloidService')
class PostController {
  constructor() {
    this.Service = new PostService()
    this.scope = 'Post'
  }

  index = async (req, res) => {
    const posts = await this.Service.getAllPost()

    return API_RESPONSE(res, posts, 200, 'Success get All Post', this.scope)
  }

  show = async (req, res) => {
    const { slug } = req.params
    return API_RESPONSE(
      res,
      this.Service.getPost({ slug }),
      200,
      'Success get All Post',
      this.scope
    )
  }

  store = async (req, res) => {
    const data = ParseBody(req.body, req)
    const savedPost = await this.Service.savePost(data)
    return API_RESPONSE(res, savedPost, 201, 'Berhasil menambahkan berita', this.scope)
  }

  update = async (req, res) => {
    const { id } = req.params
    const updatedpost = await this.Service.editPost(id, req.body)
    return API_RESPONSE(res, updatedpost, 201, 'Berhasil mengubah berita', this.scope)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const deletedPost = await this.Service.deletePost(+id)
    return API_RESPONSE(res, deletedPost, 200, 'Berhasil menghapus berita', this.scope)
  }
}

const Post = new PostController()

module.exports = Post
