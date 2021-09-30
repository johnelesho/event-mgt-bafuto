const mongoose = require("mongoose");
const { ParticipantSchemas } = require("./Participant-model");
// import
EventSchema = new mongoose.Schema(
  {
    eventTitle: {
      type: String,
      required: true,
      unique: true,
    },
    eventDescription: {
      type: String,
    },
    eventEndDate: {
      type: Date,
      required: true,
    },
    eventStartDate: {
      type: Date,
      required: true,
    },
    eventStartTime: {
      type: String,
      required: true,
    },
    eventEndTime: {
      type: String,
      required: true,
    },
    eventCategory: Array,
    attendees: [ParticipantSchemas],
  },
  { timestamp: true },
);

module.exports = new mongoose.model("Event", EventSchema);
