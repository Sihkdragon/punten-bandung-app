const { Router } = require("express");
const API_urls = require("../app/resources/urls");
const Tabloid = require("../app/controllers/TabloidControllers");
const upload = require("../app/helpers/Parser/fileParser");

const TabloidRouter = Router();

TabloidRouter.get("/", Tabloid.index);
TabloidRouter.get("/:id", Tabloid.index);
TabloidRouter.post("/", upload("tabloid").single("image"), Tabloid.store);
// TabloidRouter.post('/, Tabloid.store);
TabloidRouter.patch("/:id", Tabloid.update);
TabloidRouter.delete("/:id", Tabloid.delete);

module.exports = TabloidRouter;
