const express = require("express");
// import contentsController from "../controllers/contentsController";
const photogalleryController = require("../controllers/photogalleryController");

const router = express.Router();
router.get("/viewgallery", photogalleryController.getPhoto);
// router.get("/viewgalleryphoto", photogalleryController.getGalleryphoto);

module.exports = router;