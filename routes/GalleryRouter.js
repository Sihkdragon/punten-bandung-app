const { Router } = require("express");
const Gallery = require("../app/controllers/GalleryControllers");
const upload = require("../app/helpers/Parser/fileParser");

const GalleryRouter = Router();

GalleryRouter.get("/", Gallery.index);
GalleryRouter.get("/:id", Gallery.index);
GalleryRouter.post("/", upload("gallery").single("image"), Gallery.store);
GalleryRouter.patch("/:id", Gallery.update);
GalleryRouter.delete("/:id", Gallery.delete);

module.exports = GalleryRouter;
