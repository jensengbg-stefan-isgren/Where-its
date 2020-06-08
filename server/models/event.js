const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  startDateTime: {
      type: Date,
      required: true,
  },
  endDateTime: {
      type: Date,
      required: true
  },
  tickets: {
      type: Number,
      required: true,
  },
  price: {
      type: Number,
      required: true
  }
});

module.exports = mongoose.model("Event", eventSchema);
