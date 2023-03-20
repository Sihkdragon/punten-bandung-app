const { Router } = require("express");
const API_urls = require("../app/resources/urls");
const Tabloid = require("../app/controllers/TabloidControllers");
const Post = require("../app/controllers/v2/PostController");
const upload = require("../app/helpers/Parser/fileParser");
const { isAuthenticated, AuthorizeAs } = require("../app/middlewares/AuthMiddleware");

const TabloidRouter = Router();

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

TabloidRouter.get("/", Post.index);
TabloidRouter.get("/:slug", Post.show);

/**
 * @Authenticate
 */

// TabloidRouter.use(isAuthenticated, AuthorizeAs["contributors"]);

/**
 * ====================================================================
 * * Private URL
 * ? Minimum Role contributors
 * ====================================================================
 */

TabloidRouter.post("/", upload("tabloid").single("image"), Post.store);
TabloidRouter.patch("/:id", Post.update);
TabloidRouter.delete("/:id", Post.delete);

module.exports = TabloidRouter;
