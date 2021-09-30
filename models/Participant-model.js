const mongoose = require("mongoose");

ParticipantSchemas = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, " Full name is required"],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE"],
    required: true,
    message: "{VALUE} is not a valid",
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{4}-\d{3}-\d{4}/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid phone number (0807-382-2737)!`,
    },
    required: [true, "User phone number required"],
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email xyz@xyz.com!`,
    },
    required: [true, "Email Address is required"],
  },
  interest: {
    type: Array,
  },
});

// (ParticipantModel = new mongoose.model("Participant", ParticipantSchemas)),
module.exports = {
  ParticipantSchemas,
  // ParticipantModel,
};
