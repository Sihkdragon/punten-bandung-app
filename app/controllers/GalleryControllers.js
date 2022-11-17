const { API_RESPONSE } = require("../resources/APIResponse");
const { getGallery, PostImage } = require("../services/GalleryService");

class Gallery {
  static async index(req, res) {
    return API_RESPONSE(res, 200, await getGallery(), "Success get All Image");
  }
  static async store(req, res) {
    const finalImageURL =
      req.protocol + "://" + req.get("host") + "/assets/img/gallery/" + req.file.filename;

    await PostImage({ author: req.body.author, image_url: finalImageURL });
    return API_RESPONSE(res, 201, undefined, "Success Save Image");
  }
  static async update(req, res) {
    return API_RESPONSE(res, 200, undefined, "Success Update an Image");
  }
  static async delete(req, res) {
    return API_RESPONSE(res, 200, undefined, "Success Delete an Image");
  }
}

module.exports = Gallery;
