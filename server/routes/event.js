const { Router } = require("express");
const router = new Router();

const eventController = require("../controllers/eventController");

router.route("/").post(eventController.addEvent).get(eventController.getEvents);

module.exports = router;
