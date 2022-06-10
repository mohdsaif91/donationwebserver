const express = require("express");

const emojis = require("./emojis");
const login = require("./login");
const donation = require("./donation");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/login", login);
router.use("/donation", donation);

module.exports = router;
