const DonationModal = require("../modal/donationModal");

const createDonation = (req, res) => {
  try {
    console.log(req.body);
    console.log("called !");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const updateDonation = (req, res) => {
  try {
    console.log();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createDonation,
  updateDonation,
};
