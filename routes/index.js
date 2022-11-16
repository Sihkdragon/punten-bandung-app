const { Router } = require("express");
const TabloidRouter = require("./TabloidRouter");
const router = Router();

router.use("/api", TabloidRouter);

module.exports = router;
