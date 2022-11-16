const { Router } = require("express");
const API_urls = require("../app/resources/urls");
const Gallery = require("../app/controllers/GalleryControllers");

const GalleryRouter = Router();

GalleryRouter.get(API_urls.gallery.url, Gallery.index);
GalleryRouter.get(API_urls.gallery.url_withID, Gallery.index);
GalleryRouter.post(API_urls.gallery.url, Gallery.store);
GalleryRouter.patch(API_urls.gallery.url_withID, Gallery.update);
GalleryRouter.delete(API_urls.gallery.url_withID, Gallery.delete);

module.exports = GalleryRouter;
