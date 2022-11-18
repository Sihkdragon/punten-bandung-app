const { Router } = require("express");
const API_urls = require("../app/resources/urls");
const Tabloid = require("../app/controllers/TabloidControllers");
const upload = require("../app/helpers/Parser/fileParser");
const { isAuthenticated, AuthorizeAs } = require("../app/middlewares/AuthMiddleware");

const TabloidRouter = Router();

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

TabloidRouter.get("/", Tabloid.index);
TabloidRouter.get("/:id", Tabloid.index);

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

TabloidRouter.post("/", upload("tabloid").single("image"), Tabloid.store);
TabloidRouter.patch("/:id", Tabloid.update);
TabloidRouter.delete("/:id", Tabloid.delete);

module.exports = TabloidRouter;
