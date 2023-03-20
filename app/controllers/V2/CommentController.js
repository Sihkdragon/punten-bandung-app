const { API_RESPONSE } = require("../../resources/APIResponse");
const CommentService = require("../../services/CommentService");

class CommentController {
  constructor() {
    this.Service = new CommentService();
    this.scope = "komentar";
  }
  index = async (req, res) => {
    const posts = await this.Service.getComments();

    return API_RESPONSE(res, posts, 200, "Sukses mengambil data", this.scope);
  };

  show = async (req, res) => {
    const { id } = req.params;
    return API_RESPONSE(
      res,
      await this.Service.getComment({ id }),
      200,
      "Berhasil mengambil data",
      this.scope
    );
  };

  store = async (req, res) => {
    const { postID } = req.params;
    const { name, email, comment } = req.body;

    const savedResult = await this.Service.saveComment({
      post_id: +postID,
      name,
      email,
      comment,
    });
    return API_RESPONSE(res, savedResult, 201, "Berhasil menambahkan komentar", this.scope);
  };

  update = async (req, res) => {
    const { id } = req.params;
    const updatedResult = await this.Service.editComment(id, req.body);
    return API_RESPONSE(res, updatedResult, 201, "Berhasil mengubah komentar", this.scope);
  };

  delete = async (req, res) => {
    const { id } = req.params;
    const deletedResult = await this.Service.deleteComment(+id);
    return API_RESPONSE(res, deletedResult, 200, "Berhasil menghapus komentar", this.scope);
  };
}

const Comment = new CommentController();

module.exports = Comment;
