const express = require("express");

const donationController = require("../controller/donationController");

const router = express.Router();

router.post("/create", donationController.createDonation);
router.patch("/update", donationController.updateDonation);

module.exports = router;
