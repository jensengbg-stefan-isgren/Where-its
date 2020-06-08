const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  createdTime: {
    type: Date,
    required: true
  },
  user_id: {
      type: Number,
      required: true
  }

});

module.exports = mongoose.model("Ticket", ticketSchema);
