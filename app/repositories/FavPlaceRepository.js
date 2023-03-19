const { PrismaClient } = require("@prisma/client");

const FavPlaces = new PrismaClient().favPlaces;

class FavPlacesRepository {
  async get(id = null) {
    try {
      if (!id) return await FavPlaces.findMany();
      return await FavPlaces.findFirst({ where: { id } });
    } catch (err) {
      throw err;
    }
  }

  async create() {
    try {
      return await FavPlaces.create({ data });
    } catch (err) {
      throw err;
    }
  }

  async update(id, data) {
    try {
      return await FavPlaces.update({ where: { id }, data });
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      return await FavPlaces.delete({ where: { id } });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = FavPlacesRepository;
