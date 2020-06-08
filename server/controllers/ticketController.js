const express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
db = mongoose.connection,
ticketSchema = db.ticketSchema;



exports.addTicket = async (req, res) => {
    const user_id = req.body.user_id,
    event_id = req.body.event_id,
    date = new Date();
  
    const ticket = new Ticket({
      event_id: event_id,
      created_at: date,
      user_id: user_id
    });
  
    ticket.save();
    res.send(ticket);
  };
