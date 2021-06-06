const express = require("express");
const router = express.Router();
const { getEvents,createEvent } = require("./controllers/eventController")
router.route("/:id")
.get(getEvents)
.post(createEvent)
module.exports = router;