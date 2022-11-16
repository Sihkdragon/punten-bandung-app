const API_RESPONSE = require("../resources/APIResponse");
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

  static async store(req, res) {
    const { title } = req.body;
    const Input = {
      ...req.body,
      thumbnail_url: `${req.protocol}://${req.get("Host")}/assets/img/${req.body.image}`,
    };
    delete Input.image;
    // await PostTabloid(Input);
    return API_RESPONSE(res, 201, req.body, "Success Store Tabloid");
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
    return API_RESPONSE(res, 200, "Success Delete Tabloid ID: " + id);
  }
}

module.exports = Tabloid;
