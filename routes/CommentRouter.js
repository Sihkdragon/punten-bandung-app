const { Router } = require("express");
const Gallery = require("../app/controllers/GalleryControllers");
const upload = require("../app/helpers/Parser/fileParser");

const CommentRouter = Router();

CommentRouter.get("/", Gallery.index);
CommentRouter.get("/:id", Gallery.index);
CommentRouter.post("/", upload("gallery").single("image"), Gallery.store);
CommentRouter.patch("/:id", Gallery.update);
CommentRouter.delete("/:id", Gallery.delete);

module.exports = CommentRouter;
