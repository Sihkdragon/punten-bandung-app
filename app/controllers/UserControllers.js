const { API_RESPONSE } = require("../resources/APIResponse");
const UserService = require("../services/UserService");

class User {
  static async index(req, res) {
    const { id } = req.params;
    if (!id) {
      return API_RESPONSE(res, await UserService.getAllUser(), 200, "Get All User Success");
    }
    return API_RESPONSE(res, await UserService.getUser(+id), 200, "Get User Success");
  }

  static async store(req, res) {
    return API_RESPONSE(res, 201, await UserService.PostUser(req.body), "Add User Success");
  }

  static async update(req, res) {
    const { id } = req.params;
    return API_RESPONSE(
      res,

      await UserService.UpdateUser(req.body, 200, +id),
      "Update User Success"
    );
  }

  static async delete(req, res) {
    const { id } = req.params;
    return API_RESPONSE(res, await UserService.DeleteUser(+id), 200, "Delete User Success");
  }
}

module.exports = User;
