const {ParticipantModel} = require("../models/Participant-model");

const newParticpant = async (req, res) => {
  try {
    const participant = await ParticipantModel.create(req.body);
    res.status(201).json({
      message: "Sucessfully registered a new participant",
      data: participant,
    });
  } catch (err) {
    res.status(501).json({
      message: "Error",
      data: err.message,
      //   data: {
      //   email: err.errors["email"]["message"],
      //     phone:
      //     email: err["email"]["message"],
      //   },
    });
  }
};

module.exports = {
  newParticpant,
};
