const { PrismaClient } = require("@prisma/client");
const { HashPassword } = require("../helpers/Hash/hashHelpers");

const prisma = new PrismaClient();

async function getAllUser() {
  try {
    return prisma.users.findMany({
      select: {
        id: true,
        name: true,
        username: true,
        email: true,
        role: true,
        created_at: true,
        _count: true,
      },
    });
  } catch (e) {
    throw e;
  }
}

async function getUser(id) {
  try {
    return prisma.users.findFirst({
      where: {
        id,
      },
    });
  } catch (e) {
    throw e;
  }
}

async function PostUser(data) {
  data.password = await HashPassword(data.password);
  try {
    return prisma.users.create({
      data,
    });
  } catch (e) {
    throw e;
  }
}

async function UpdateUser(data, id) {
  try {
    return await prisma.users.update({
      where: {
        id,
      },
      data,
    });
  } catch (e) {
    throw e;
  }
}

async function DeleteUser(id) {
  try {
    return prisma.users.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  getAllUser,
  getUser,
  PostUser,
  UpdateUser,
  DeleteUser,
};
