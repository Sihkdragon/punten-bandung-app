const { Router } = require("express");
const Comment = require("../../app/controllers/v2/CommentController");
const { isAuthenticated, AuthorizeAs } = require("../../app/middlewares/AuthMiddleware");

const CommentRouter = Router();

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

CommentRouter.get("/:postID", Comment.index);
CommentRouter.get("/:postID/:id", Comment.index);
CommentRouter.post("/:postID", Comment.store);

/**
 * @Authenticate
 */

CommentRouter.use(isAuthenticated, AuthorizeAs["admin"]);

/**
 * ====================================================================
 * * Private URL
 * ? Minimum Role admin
 * ====================================================================
 */

CommentRouter.delete("/:id", Comment.delete);

module.exports = CommentRouter;
