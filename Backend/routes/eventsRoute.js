const express = require("express");

const eventsController = require("../controllers/eventsController");

const router = express.Router();

router.get("/event/:slug", eventsController.getEventBySlug);
router.get("/events", eventsController.getAllEvents);

module.exports = router;
