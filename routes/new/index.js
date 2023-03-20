const { Router } = require('express')
const API_urls = require('../../app/resources/urls')
const AuthRouter = require('./v2_AuthRouter')
const CommentRouter = require('./v2_CommentRouter')
const GalleryRouter = require('./v2_GalleryRouter')
const PostRouter = require('./v2_PostRouter')
const UserRouter = require('./v2_UserRouter')

const V2Router = Router()

/**
 * ! Check Only
 */

// ================================================
// |           Autehentication URL                |
// ================================================
V2Router.use(API_urls.auth.url, AuthRouter)

// ================================================
// |                Tabloid URL                   |
// ================================================
V2Router.use(API_urls.post.url, PostRouter)

// ================================================
// |                Gallery URL                   |
// ================================================
V2Router.use(API_urls.gallery.url, GalleryRouter)

// ================================================
// |                Comments URL                  |
// ================================================
V2Router.use(API_urls.comment.url, CommentRouter)

// ================================================
// |                Users URL                     |
// ================================================
V2Router.use(API_urls.users.url, UserRouter)

module.exports = V2Router
