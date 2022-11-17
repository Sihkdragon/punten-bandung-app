const { PrismaClient } = require("@prisma/client");
const { VerifyPassword } = require("../helpers/Hash/hashHelpers");
const { Init_JWT } = require("../helpers/JWT/jwtHelpers");
const { BASE_API_RESPONSE } = require("../resources/APIResponse");

const prisma = new PrismaClient();

const Login = async (username, password) => {
  const User = await prisma.users.findFirst({
    where: { username },
  });

  if (!User) {
    return BASE_API_RESPONSE(404, "User Not Found");
  }

  if (await VerifyPassword(User.password, password)) {
    delete User.password;
    return BASE_API_RESPONSE(200, "Login Success", {
      data: User,
      AccessToken: Init_JWT({
        name: User.name,
        username: User.username,
        role: User.role,
        email: User.email,
      }),
      TokenType: "Bearer",
    });
  } else {
    return BASE_API_RESPONSE(401, "Username or Password did not match");
  }
};

module.exports = {
  Login,
};
