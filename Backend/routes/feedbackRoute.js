const express = require("express");
const feedbackController = require("../controllers/feedbackController");
const emailController = require("../controllers/emailController");

const router = express.Router();

router.get("/:content_id", feedbackController.getFeedback);
router.post("/addf", feedbackController.addFeedback);
router.post("/genf", feedbackController.addGeneralFeedback);
router.post("/sendemail", emailController.sendEmail);

module.exports = router;
