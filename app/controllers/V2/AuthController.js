const { API_RESPONSE } = require('../../resources/APIResponse')
const AuthService = require('../../services/AuthService')

class AuthController {
  constructor() {
    this.Service = new AuthService()
  }

  login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
      return API_RESPONSE(res, null, 400, 'Username and password required')
    }

    const loginResult = await this.Service.login(username, password)

    if (loginResult === null) {
      return API_RESPONSE(res, null, 404, 'Username atau password tidak dikenal')
    }

    return API_RESPONSE(res, loginResult, 200, 'Login Berhasil')
  }

  register = async (req, res) => {
    const registerResult = await this.Service.register(req.body)
    if (registerResult === 'P2002') {
      return API_RESPONSE(res, null, 409, 'Username sudah digunakan')
    }
    return API_RESPONSE(res, registerResult, 200, 'Register berhasil')
  }
}

const Auth = new AuthController()

module.exports = Auth
