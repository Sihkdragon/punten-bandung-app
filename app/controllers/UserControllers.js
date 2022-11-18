const { API_RESPONSE } = require("../resources/APIResponse");
const UserService = require("../services/UserService");

class User {
  static async index(req, res) {
    const { id } = req.params;
    if (!id) {
      return API_RESPONSE(res, 200, await UserService.getAllUser(), "Get All User Success");
    }
    return API_RESPONSE(res, 200, await UserService.getUser(+id), "Get User Success");
  }

  static async store(req, res) {
    return API_RESPONSE(res, 201, await UserService.PostUser(req.body), "Add User Success");
  }

  static async update(req, res) {
    const { id } = req.params;
    return API_RESPONSE(
      res,
      200,
      await UserService.UpdateUser(req.body, +id),
      "Update User Success"
    );
  }

  static async delete(req, res) {
    const { id } = req.params;
    return API_RESPONSE(res, 200, await UserService.DeleteUser(+id), "Delete User Success");
  }
}

module.exports = User;
