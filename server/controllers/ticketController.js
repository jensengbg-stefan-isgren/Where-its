const mongoose = require("mongoose"),
  db = mongoose.connection,
  Event = require("../models/event");

exports.addTicket = async (req, res) => {
  let user_id = req.body.user_id,
    event_id = req.body.event_id,
    sold_tickets = req.body.sold_tickets,
    sold_tickets = sold_tickets + 1,
    date = new Date();

  // Upd antal sålda biljetter
  Event.updateOne(
    { _id: req.body.event_id },
    { $set: { sold_tickets: sold_tickets } },
    (err) => {
      if (err) console.log(err);
    }
  );

  // Skapa ny ticket
  const ticket = new Ticket({
    event_id: event_id,
    created_at: date,
    user_id: user_id,
  });
  ticket.save();

  res.send(ticket);
};
