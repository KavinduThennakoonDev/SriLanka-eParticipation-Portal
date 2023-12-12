const express = require("express");
const newspressReleaseController = require("../controllers/newspressReleaseController");

const router = express.Router();
router.get("/news", newspressReleaseController.getnews);

module.exports = router;
