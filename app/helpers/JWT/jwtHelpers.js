const jwt = require("jsonwebtoken");

const SecretKey = "asndongnerionasmprgn134nio24n61oin!*^!T$*&%jbakjsdakjs";
// const SecretKey = process.env.JWT_SECRET ;

function Init_JWT(payload) {
  return jwt.sign(payload, SecretKey, { expiresIn: "2h" });
}

function Verify_JWT(token) {
  try {
    return jwt.verify(token, SecretKey);
  } catch (e) {
    return e;
  }
}

module.exports = {
  Init_JWT,
  Verify_JWT,
};
