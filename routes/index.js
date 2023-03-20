const { Router } = require("express");
const PostRouter = require("./PostRouter");
const GalleryRouter = require("./GalleryRouter");
const API_urls = require("../app/resources/urls");
const AuthRouter = require("./AuthRouter");
const CommentRouter = require("./CommentRouter");
const UserRouter = require("./UserRouter");
const V2Router = require("./V2");
const router = Router();

// ================================================
// |           V2 URL                |
// ================================================
router.use("/v2", V2Router);
// ================================================
// |           Autehentication URL                |
// ================================================
router.use(API_urls.auth.url, AuthRouter);

// ================================================
// |                Tabloid URL                   |
// ================================================
router.use(API_urls.post.url, PostRouter);

// ================================================
// |                Gallery URL                   |
// ================================================
router.use(API_urls.gallery.url, GalleryRouter);

// ================================================
// |                Comments URL                  |
// ================================================
router.use(API_urls.comment.url, CommentRouter);

// ================================================
// |                Users URL                     |
// ================================================
router.use(API_urls.users.url, UserRouter);

module.exports = router;
