const { validationResult } = require("express-validator");
const { API_RESPONSE } = require("../../resources/APIResponse");

const ValidateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return API_RESPONSE(res, 400, {
      ValidationError: errors.array(),
    });
  }

  return next();
};

module.exports = {
  ValidateRequest,
};
