const router = require("express").Router();
const manifestoHeaderRoutes = require("./ManifestoHeader")


router.use("/manifestoHeader", manifestoHeaderRoutes);

module.exports = router;
