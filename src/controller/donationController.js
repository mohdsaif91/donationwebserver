const { v4: uuidv4 } = require("uuid");
const { google } = require("googleapis");
const { Stream } = require("stream");

const DonationModal = require("../modal/donationModal");

const authClient = new google.auth.OAuth2(
  process.env.google_client_id,
  process.env.google_secret_id,
  process.env.google_redirect_uri
);

const DriveService = google.drive({
  version: "v3",
  auth: authClient,
});

authClient.setCredentials({ refresh_token: process.env.google_refresh_token });

const createDonation = async (req, res) => {
  try {
    if (req.file) {
      const fileName = req.file.originalname.split(".");
      const fileType = fileName[fileName.length - 1];
      const id = uuidv4();
      const imageName = `${id}.${fileType}`;
      const bufferedStream = new Stream.PassThrough();
      bufferedStream.end(req.file.buffer);
      const response = await DriveService.files.create({
        requestBody: {
          name: imageName,
          mimeType: `image/${fileType}`,
        },
        media: {
          mimeType: `image/${fileType}`,
          body: bufferedStream,
        },
      });
      if (response.data.id) {
        await DriveService.permissions.create({
          fileId: response.data.id,
          requestBody: {
            role: "reader",
            type: "anyone",
          },
        });
        req.body.recevierImages = response.data.id;
        console.log(req.body);
        DonationModal.insertMany({ ...req.body }, (err, data) => {
          if (err) throw err;
          res.status(201).send(req.body);
        });
      } else {
        throw "Image upload failed";
      }
    } else {
      throw "Image is required.";
    }
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

const getAllDonation = async (req, res) => {
  try {
    const allDonation = await DonationModal.find({});
    if (!allDonation) {
      throw "getting all donation failed";
    }
    res.status(200).send(allDonation);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = {
  createDonation,
  getAllDonation,
  updateDonation,
};
