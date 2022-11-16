const API_RESPONSE = require("../resources/APIResponse");
const { getAllTabloid, getTabloid } = require("../services/TabloidService");
class Tabloid {
  static async index(req, res) {
    const { id } = req.params;
    if (id) {
      return API_RESPONSE(res, 200, await getTabloid(+id), "success get Tabloid ID: " + id);
    }
    return API_RESPONSE(res, 200, await getAllTabloid(), "success get Tabloids");
  }

  static store(req, res) {
    return API_RESPONSE(res, 201, "success get store");
  }

  static update(req, res) {
    const { id } = req.params;
    return API_RESPONSE(res, 200, "success get update " + id);
  }

  static delete(req, res) {
    const { id } = req.params;
    return API_RESPONSE(res, 200, "success get delete " + id);
  }
}

module.exports = Tabloid;
