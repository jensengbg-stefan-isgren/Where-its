const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: true
  },
  eventId: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  userId: {
      type: String,
      required: true
  }

});

module.exports = mongoose.model("Ticket", ticketSchema);
