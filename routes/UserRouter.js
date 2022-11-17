const { Router } = require("express");
const Auth = require("../app/controllers/AuthControllers");
const User = require("../app/controllers/UserControllers");
const UserRouter = Router();

UserRouter.post("/login", Auth.login);
UserRouter.post("/register", Auth.register);

UserRouter.get("/", User.index);
UserRouter.get("/:id", User.index);
UserRouter.post("/", User.store);
UserRouter.patch("/:id", User.update);
UserRouter.delete("/:id", User.delete);

module.exports = UserRouter;
