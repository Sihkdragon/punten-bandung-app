const { API_RESPONSE } = require("../resources/APIResponse");
const { Login } = require("../services/AuthService");

class Auth {
  static async login(req, res) {
    const { username, password } = req.body;

    const { statusCode, payload, message } = await Login(username, password);

    return API_RESPONSE(res, statusCode, payload, message);
  }
  static async register() {}
}

module.exports = Auth;
