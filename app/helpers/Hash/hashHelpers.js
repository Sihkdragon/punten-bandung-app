const argon2 = require("argon2");

async function HashPassword(rawText) {
  try {
    const HashedPassword = await argon2.hash(rawText);
    return HashedPassword;
  } catch (e) {
    throw e;
  }
}

async function VerifyPassword(HashedPassword, rawText) {
  try {
    return await argon2.verify(HashedPassword, rawText);
  } catch (e) {
    throw e;
  }
}

module.exports = {
  HashPassword,
  VerifyPassword,
};
