const ParseBody = require("../helpers/Parser/tabloidParser");
const { API_RESPONSE } = require("../resources/APIResponse");
const {
  getAllTabloid,
  getTabloid,
  PostTabloid,
  EditTabloid,
  DeleteTabloid,
} = require("../services/TabloidService");
class Tabloid {
  /**
   * Main Get All Questions
   * @param {*} req
   * @param {*} res Json of all Tabloid or a Tabloid When @ID is Exist
   * @returns
   */

  static async index(req, res) {
    const { id } = req.params;
    if (id) {
      return API_RESPONSE(res, 200, await getTabloid(+id), "success get Tabloid ID: " + id);
    }
    return API_RESPONSE(res, 200, await getAllTabloid(), "success get Tabloids");
  }

  static async show(req, res) {
    const { tabloidslug } = req.params;
    return API_RESPONSE(res, 200, tabloidslug, "success get Tabloids");
  }

  static async store(req, res) {
    return API_RESPONSE(
      res,
      201,
      await PostTabloid(ParseBody(req.body, req)),
      "Success Store Tabloid"
    );
    // return API_RESPONSE(res, 201, req.body, "Success Store Tabloid");
  }

  static async update(req, res) {
    const { id } = req.params;
    await EditTabloid(+id, req.body);
    return API_RESPONSE(res, 200, "success Update Tabloid ID: " + id);
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await DeleteTabloid(+id);
    } catch (e) {
      throw e;
    }
    return API_RESPONSE(
      res,
      200,
      "Success Delete Tabloid ID: " + id,
      "Success Delete Tabloid"
    );
  }
}

module.exports = Tabloid;
