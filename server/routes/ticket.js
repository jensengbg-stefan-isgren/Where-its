const { Router } = require("express"),
router = new Router();

const ticketController = require("../controllers/ticketController");

router.route("/").post(ticketController.addTicket);
router.route("/:ticket_number").get(ticketController.getTicket);

module.exports = router;
