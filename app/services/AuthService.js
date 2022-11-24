const { PrismaClient, Prisma } = require("@prisma/client");
const { VerifyPassword, HashPassword } = require("../helpers/Hash/hashHelpers");
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

const Register = async (data) => {
  data.password = await HashPassword(data.password);
  try {
    const User = await prisma.users.create({
      data,
    });

    delete User.password;
    return BASE_API_RESPONSE(200, "Register Success", User);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === "P2002") {
        return BASE_API_RESPONSE(400, "Username sudah digunakan");
      }
    }
    // throw e;
  }
};
module.exports = {
  Login,
  Register,
};
