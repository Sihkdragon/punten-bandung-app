const { API_RESPONSE } = require('../../resources/APIResponse')
const GalleryService = require('../../services/GalleryService')

class GalleryController {
  constructor() {
    this.Service = new GalleryService()
    this.scope = 'galeri'
  }

  index = async (req, res) => {
    const getAllImageResult = await this.Service.getAllGallery()
    return API_RESPONSE(
      res,
      getAllImageResult,
      200,
      'Berhasil mengambil seluruh gambar',
      this.scope
    )
  }

  show = async (req, res) => {
    const { id } = req.params
    const imageResult = await this.Service.getGallery(+id)

    return API_RESPONSE(res, imageResult, 200, 'Berhasil mengambil seluruh gambar', this.scope)
  }

  store = async (req, res) => {
    const finalImageURL =
      req.protocol + '://' + req.get('host') + '/assets/img/gallery/' + req.file.filename

    const galleryData = { ...req.body, image_url: finalImageURL }

    const savedGalleryResult = await this.Service.saveGallery(galleryData)

    return API_RESPONSE(
      res,
      savedGalleryResult,
      201,
      'Berhasil menyimpan gambar galeri',
      this.scope
    )
  }

  update = async (req, res) => {
    const { id } = req.params
    const savedGalleryResult = await this.Service.editGallery(+id, req.body)
    return API_RESPONSE(res, savedGalleryResult, 201, 'Berhasil mengubah gambar galeri', this.scope)
  }

  delete = async (req, res) => {
    const { id } = req.params
    const savedGalleryResult = await this.Service.deleteGallery(id)
    return API_RESPONSE(
      res,
      savedGalleryResult,
      201,
      'Berhasil menghapus gambar galeri',
      this.scope
    )
  }
}

const Gallery = new GalleryController()

module.exports = Gallery
