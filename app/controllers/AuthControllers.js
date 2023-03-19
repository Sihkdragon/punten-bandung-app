const { API_RESPONSE } = require("../resources/APIResponse");
const { Login, Register } = require("../services/AuthService");

class Auth {
  static async login(req, res) {
    const { username, password } = req.body;

    const { statusCode, payload, message } = await Login(username, password);

    return API_RESPONSE(res, payload, statusCode, message);
  }
  static async register(req, res) {
    const { statusCode, payload, message } = await Register(req.body);

    return API_RESPONSE(res, payload, statusCode, message);
    // return API_RESPONSE(res, 200, req.body);
  }
}

module.exports = Auth;
