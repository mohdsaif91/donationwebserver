const mongoose = require("mongoose");

const donationSchema = mongoose.Schema({
  recevierName: {
    type: String,
    required: true,
  },
  recevierImages: {
    type: String,
    required: true,
  },
  // type: [{ type: String }],
  // validate: [arrayLimit, `{Path} exceed the limit of 4`],
  createdAt: { type: Date, required: true, default: new Date() },
  requiredAmount: { type: String, required: true },
  recevierSummary: { type: String, required: true },
  recevierAddress: { type: String, required: true },
  reciverPhoneNumber: {
    type: String,
    required: true,
  },
});

const donationModal = mongoose.model("donationModal", donationSchema);
module.exports = donationModal;
