const { Router } = require("express");
const Auth = require("../app/controllers/AuthControllers");

const AuthRouter = Router();

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

AuthRouter.post("/login", Auth.login);
AuthRouter.post("/register", Auth.register);

module.exports = AuthRouter;
