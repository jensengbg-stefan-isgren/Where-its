const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ticket_number: {
    type: Number
    // kanske behövs om front-end gör ett ticketNumber
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
