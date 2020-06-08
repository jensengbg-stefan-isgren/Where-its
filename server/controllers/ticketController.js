const mongoose = require("mongoose"),
  Event = require("../models/event"),
  Ticket = require("../models/ticket");

exports.addTicket = async (req, res) => {
  try {
    const user_id = req.body.user_id,
      event_id = req.body.event_id,
      ticket_number = req.body.ticket_number,
      date = new Date();

    let sold_tickets = req.body.sold_tickets;
    sold_tickets++;

    // Upd antal sålda biljetter
    Event.updateOne(
      { _id: event_id },
      { $set: { sold_tickets: sold_tickets } },
      (err) => {
        if (err) console.log(err);
      }
    );

    // Skapa ny ticket
    const ticket = new Ticket({
      ticket_number: ticket_number,
      event_id: event_id,
      created_at: date,
      user_id: user_id,
    });
    ticket.save();

    res.send(ticket);
  } catch (err) {
    console.log(err);
  }
};
