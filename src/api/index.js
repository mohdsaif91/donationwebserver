const express = require("express");

const emojis = require("./emojis");
const login = require("./login");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/login", login);

module.exports = router;
