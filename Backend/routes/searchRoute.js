const express = require("express");
const searchController = require("../controllers/searchController");

const router = express.Router();

router.get("/search-content", searchController.searchContent);

module.exports = router;
