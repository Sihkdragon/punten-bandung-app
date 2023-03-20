const { Router } = require("express");
const Post = require("../../app/controllers/v2/PostController");
const upload = require("../../app/helpers/Parser/fileParser");
const { isAuthenticated, AuthorizeAs } = require("../../app/middlewares/AuthMiddleware");

const PostRouter = Router();

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

PostRouter.get("/", Post.index);
PostRouter.get("/:slug", Post.show);

/**
 * @Authenticate
 */

// PostRouter.use(isAuthenticated, AuthorizeAs["contributors"]);

/**
 * ====================================================================
 * * Private URL
 * ? Minimum Role contributors
 * ====================================================================
 */

PostRouter.post("/", upload("tabloid").single("image"), Post.store);
PostRouter.patch("/:id", Post.update);
PostRouter.delete("/:id", Post.delete);

module.exports = PostRouter;
