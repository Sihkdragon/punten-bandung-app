const { Router } = require('express')
const Auth = require('../../app/controllers/V2/AuthController')

const AuthRouter = Router()

/**
 * ====================================================================
 * * Public URL
 * ====================================================================
 */

AuthRouter.post('/login', Auth.login)
AuthRouter.post('/register', Auth.register)

module.exports = AuthRouter
