const { Router } = require("express"),
router = new Router();

const ticketController = require("../controllers/ticketController");

router.route("/").post(ticketController.addTicket);

module.exports = router;
