const express = require("express");
const dbcon = require("./config/db-con");
const eventRoute = require("./routes/Event-route");
const participantRoute = require("./routes/Participant-route");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(require("cors")());

const PORT = process.env.PORT;
try {
  dbcon();
  app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
  });
} catch (error) {
  console.error(err);
}

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome",
//     data: [],
//   });
// });

// app.use("/api/v1/participant", participantRoute);
app.use("/api/v1/event", eventRoute);
