const { Router } = require("express");
const User = require("../app/controllers/UserControllers");
const { isAuthenticated } = require("../app/middlewares/AuthMiddleware");

const UserRouter = Router();

UserRouter.use(isAuthenticated);
UserRouter.get("/", User.index);
UserRouter.get("/:id", User.index);
UserRouter.post("/", User.store);
UserRouter.patch("/:id", User.update);
UserRouter.delete("/:id", User.delete);

module.exports = UserRouter;
