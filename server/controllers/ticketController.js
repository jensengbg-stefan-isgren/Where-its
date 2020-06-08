const express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
router = express.Router(),
db = mongoose.connection,
ticketSchema = db.ticketSchema;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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
