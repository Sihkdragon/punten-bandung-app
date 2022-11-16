const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAll = async (TableName) => {
  try {
    return await prisma[TableName].findMany();
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getAll,
};
