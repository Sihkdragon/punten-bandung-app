const { Router } = require("express");
const Comment = require("../app/controllers/CommentControllers");
const { API_RESPONSE } = require("../app/resources/APIResponse");

const CommentRouter = Router();

CommentRouter.get("/:postID", Comment.index);
CommentRouter.get("/:postID/:id", Comment.index);
CommentRouter.post("/:postID", Comment.store);
CommentRouter.delete("/:id", Comment.delete);

/**
 * @NotFoundCommentRoutes
 */

CommentRouter.all("*", (req, res) => {
  return API_RESPONSE(res, 404, undefined);
});

module.exports = CommentRouter;
