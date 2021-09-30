const EventModel = require("../models/Event-model.");

const createEvent = async (req, res) => {
  try {
    const event = await EventModel.create(req.body);
    res.status(201).json({
      message: "Event successfully Added",
      data: event,
    });
  } catch (error) {
    res.status(501).json({
      message: "Error",
      data: error.message,
    });
  }
};

const registerparticipant = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await EventModel.findByIdAndUpdate(
      eventId,
      {
        $push: {
          attendees: req.body,
        },
      },
      { new: true },
    );
    res.status(201).json({
      message: "participant successfully Registered for Event",
      data: event,
    });
  } catch (error) {
    res.status(501).json({
      message: "Error",
      data: error.message,
    });
  }
};

module.exports = {
  createEvent,
  registerparticipant,
};
