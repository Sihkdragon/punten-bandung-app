const { Router } = require("express");
const FavPlaces = require("../app/controllers/FavPlaceControllers");
const upload = require("../app/helpers/Parser/fileParser");
const { isAuthenticated, AuthorizeAs } = require("../app/middlewares/AuthMiddleware");

const FavPlaceRouter = Router();

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

FavPlaceRouter.get("/", FavPlaces.index);

/**
 * @Authenticate
 */

FavPlaceRouter.use(isAuthenticated, AuthorizeAs["admin"]);

/**
 * ====================================================================
 * * Private URL
 * ? Minimum Role admin
 * ====================================================================
 */

FavPlaceRouter.get("/:id", FavPlaces.index);
FavPlaceRouter.post("/", upload("gallery").single("image"), FavPlaces.store);
FavPlaceRouter.patch("/:id", FavPlaces.update);
FavPlaceRouter.delete("/:id", FavPlaces.delete);

module.exports = FavPlaceRouter;
