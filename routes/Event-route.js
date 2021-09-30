const express = require("express");
const {
  createEvent,
  registerparticipant,
} = require("../controllers/Event-contr");

const eventRoute = express.Router();

eventRoute.post("/", createEvent);
eventRoute.post("/:eventId", registerparticipant);

module.exports = eventRoute;
