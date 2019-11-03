const router = require("express").Router();
const manifestoController = require("../../controllers/manifestoController");

// Matches with "/api/manifestoHeader"
router.route("/")
  .post(manifestoController.create)
  .get(manifestoController.findAll);



module.exports = router;