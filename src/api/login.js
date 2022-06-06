const express = require("express");
const router = express.Router();

const loginController = require("../controller/loginController");

router.post("/", loginController.loginAdmin);
router.post("/signup", loginController.creatAdmin);

module.exports = router;
