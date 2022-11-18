const { Router } = require("express");
const Gallery = require("../app/controllers/GalleryControllers");
const upload = require("../app/helpers/Parser/fileParser");
const { isAuthenticated, AuthorizeAs } = require("../app/middlewares/AuthMiddleware");

const GalleryRouter = Router();

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

GalleryRouter.get("/", Gallery.index);

/**
 * @Authenticate
 */

GalleryRouter.use(isAuthenticated, AuthorizeAs["admin"]);

/**
 * ====================================================================
 * * Private URL
 * ? Minimum Role admin
 * ====================================================================
 */

GalleryRouter.get("/:id", Gallery.index);
GalleryRouter.post("/", upload("gallery").single("image"), Gallery.store);
GalleryRouter.patch("/:id", Gallery.update);
GalleryRouter.delete("/:id", Gallery.delete);

module.exports = GalleryRouter;
