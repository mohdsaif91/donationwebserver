const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
  userName: "",
  password: "",
});

const loginModal = mongoose.model("donationLogin", loginSchema);

module.exports = loginModal;
