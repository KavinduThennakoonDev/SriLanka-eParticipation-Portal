const express = require("express");
const searchController = require("../controllers/EsearchController");

const router = express.Router();

router.get("/search-event", searchController.esearchContent);

module.exports = router;
