const { Router } = require("express");
const Auth = require("../app/controllers/AuthControllers");

const AuthRouter = Router();

AuthRouter.post("/login", Auth.login);
AuthRouter.post("/register", Auth.register);

module.exports = AuthRouter;
