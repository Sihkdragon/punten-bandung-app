const { Router } = require("express");
const API_urls = require("../app/resources/urls");
const Tabloid = require("../app/controllers/TabloidControllers");

const TabloidRouter = Router();

TabloidRouter.get(API_urls.tabloid.url, Tabloid.index);
TabloidRouter.get(API_urls.tabloid.url_withID, Tabloid.index);
TabloidRouter.post(API_urls.tabloid.url, Tabloid.store);
TabloidRouter.patch(API_urls.tabloid.url_withID, Tabloid.update);
TabloidRouter.delete(API_urls.tabloid.url_withID, Tabloid.delete);

module.exports = TabloidRouter;
