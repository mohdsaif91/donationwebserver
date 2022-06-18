const express = require("express");
const multer = require("multer");

const donationController = require("../controller/donationController");

const router = express.Router();

const multerStorage = multer.memoryStorage({
  destination: function (req, file, callBack) {
    callBack(null, "");
  },
});

const uploadImage = multer({ storage: multerStorage }).single("recevierImages");

router.post("/create", uploadImage, donationController.createDonation);
router.patch("/update", donationController.updateDonation);
router.get("/", donationController.getAllDonation);

module.exports = router;
