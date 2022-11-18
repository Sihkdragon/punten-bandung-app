const { Verify_JWT } = require("../helpers/JWT/jwtHelpers");
const { API_RESPONSE } = require("../resources/APIResponse");

const isAuthenticated = (req, res, next) => {
  if (req.header("authorization")) {
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

      // Set Authorizations Role
      req.UserRole = role;

      return next();
    } catch (e) {
      if (e.name === "TokenExpiredError") {
        return API_RESPONSE(res, 401, undefined, "Login Expired, Please Login");
      }

      return API_RESPONSE(res, 401, undefined, e.message || "Invalid Signature");
    }
  } else {
    return API_RESPONSE(res, 400, undefined, "Authorization Needed");
  }
};

class AuthorizeAs {
  static admin(req, res, next) {
    if (req.UserRole !== "admin") {
      return API_RESPONSE(res, 403, undefined, "Access Unallowed");
    }
    return next();
  }
  static contributors(req, res, next) {
    const role = req.UserRole;

    if (role !== "contributors" && role !== "admin") {
      return API_RESPONSE(res, 403, undefined, "Access Unallowed");
    }
    return next();
  }
}

module.exports = { isAuthenticated, AuthorizeAs };
