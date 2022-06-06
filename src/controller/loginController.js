const loginModal = require("../modal/loginModal");

const loginAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const foundUserName = await loginModal.findOne({ userName });
    if (!foundUserName) {
      throw "No user found !";
    }
    const foundPassword = await loginModal.findOne({ password });
    if (!foundPassword) {
      throw "No password found !";
    }
    res.status(200).send("user found");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const creatAdmin = async (req, res) => {
  try {
    const userCreated = await loginModal.insertMany(req.body);
    if (!userCreated) {
      throw "user not created";
    }
    res.status(201).send(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  creatAdmin,
  loginAdmin,
};
