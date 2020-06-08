const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticket_number: {
    type: Number,
    required: true
  },
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  user_id: {
      type: Number,
      required: true
  }

});

module.exports = mongoose.model("Ticket", ticketSchema);
