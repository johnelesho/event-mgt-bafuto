const mongoose = require("mongoose");

require("dotenv").config();

const dbcon = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbcon;
