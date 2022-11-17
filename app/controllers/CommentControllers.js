const { API_RESPONSE } = require("../resources/APIResponse");
const {
  getAllCommentofPost,
  getCommentofPost,
  PostComment,
  DeleteComment,
} = require("../services/CommentService");

class Comment {
  static async index(req, res) {
    const { postID, id } = req.params;

    if (!id) {
      return API_RESPONSE(
        res,
        200,
        await getAllCommentofPost(+postID),
        "Get All Comment Success"
      );
    }

    return API_RESPONSE(
      res,
      200,
      await getCommentofPost(+postID, +id),
      "Get a Comment of Post Success"
    );
  }
  static async store(req, res) {
    const { postID } = req.params;
    const { name, email, comment } = req.body;

    return API_RESPONSE(
      res,
      201,
      await PostComment({ name, email, comment, post_id: +postID }, "Post Comment Success")
    );
  }
  static async delete(req, res) {
    const { id } = req.params;

    return API_RESPONSE(res, 200, await DeleteComment(+id), "Success Delete Comment");
  }
}

module.exports = Comment;
