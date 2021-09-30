const express = require("express");
const { newParticpant } = require("../controllers/Participant-contr");

const participantRoute = express.Router();

participantRoute.post("/", newParticpant);

module.exports = participantRoute;
