const express = require("express");

const newsletterController = require("../controllers/newsletterController");

const router = express.Router();

router.post("/addnewsletter", newsletterController.addnewsletter);
// router.get("/province", newsletterController.getprovince);

module.exports = router;
