const { Router } = require("express");
const Controller = require("../controllers/imageController");

const router = Router();

router.get("/api/upload", Controller.uploadImage);

module.exports = router;
