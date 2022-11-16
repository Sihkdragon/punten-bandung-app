const { Router } = require("express");
const TabloidRouter = require("./TabloidRouter");
const GalleryRouter = require("./GalleryRouter");
const router = Router();

router.use("/api", TabloidRouter);
router.use("/api", GalleryRouter);

module.exports = router;
