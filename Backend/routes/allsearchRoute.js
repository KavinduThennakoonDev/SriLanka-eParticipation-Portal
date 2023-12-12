const express = require("express");
const searchController = require("../controllers/allsearchController");

const router = express.Router();

router.get("/search-all", searchController.allsearchContent);

module.exports = router;
