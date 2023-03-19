const { Router } = require('express')
const PostRouter = require('./PostRouter')
const GalleryRouter = require('./GalleryRouter')
const API_urls = require('../app/resources/urls')
const AuthRouter = require('./AuthRouter')
const CommentRouter = require('./CommentRouter')
const UserRouter = require('./UserRouter')
const router = Router()

// ================================================
// |           Autehentication URL                |
// ================================================
router.use(API_urls.auth.url, AuthRouter)

// ================================================
// |                Tabloid URL                   |
// ================================================
router.use(API_urls.tabloid.url, PostRouter)

// ================================================
// |                Gallery URL                   |
// ================================================
router.use(API_urls.gallery.url, GalleryRouter)

// ================================================
// |                Comments URL                  |
// ================================================
router.use(API_urls.comment.url, CommentRouter)

// ================================================
// |                Users URL                     |
// ================================================
router.use(API_urls.users.url, UserRouter)

module.exports = router
