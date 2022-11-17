const { Router } = require("express");
const Auth = require("../app/controllers/AuthControllers");

const UserRouter = Router();

UserRouter.post("/login", Auth.login);
UserRouter.post("/register", Auth.register);

module.exports = UserRouter;
