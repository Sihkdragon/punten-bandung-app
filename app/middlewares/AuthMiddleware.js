const { Verify_JWT } = require("../helpers/JWT/jwtHelpers");
const { API_RESPONSE } = require("../resources/APIResponse");

const isAuthenticated = (req, res, next) => {
  try {
    const AuthHeader = req.header("authorization").split(" ");

    if (!AuthHeader) {
      return API_RESPONSE(res, 400, undefined, "Authorization Needed");
    }

    const TokenType = AuthHeader[0];
    const AccessToken = AuthHeader[1];

    if (!TokenType || TokenType !== "Bearer") {
      return API_RESPONSE(res, 400, undefined, "Invalid Token Type");
    }
    const { username, role } = Verify_JWT(AccessToken);

    if (!username || !role) {
      return API_RESPONSE(res, 400, undefined, "Invalid Token Payload");
    }

    return next();
  } catch (e) {
    if (e.name === "TokenExpiredError") {
      return API_RESPONSE(res, 401, undefined, "Login Expired, Please Login");
    }

    return API_RESPONSE(res, 401, undefined, e.message || "Invalid Signature");
  }
};

// class Authorize

module.exports = { isAuthenticated };
