const mongoose = require("mongoose"),
  Event = require("../models/event"),
  Ticket = require("../models/ticket");

exports.addTicket = async (req, res) => {
  try {
    const userId = req.body.userId,
      eventId = req.body.eventId,
      ticketNumber = req.body.ticketNumber,
      numberOfTickets = req.body.NumberOfTickets,
      date = new Date();

    let soldTickets = req.body.soldTickets;
    soldTickets += numberOfTickets;

    // Upd antal sålda biljetter
    Event.updateOne(
      { _id: event_id },
      { $set: { soldTickets: soldTickets } },
      (err) => {
        if (err) console.log(err);
      }
    );

    // Skapa ny ticket
    const ticket = new Ticket({
      ticketNumber: ticketNumber,
      eventId: eventId,
      created_at: date,
      userId: userId,
    });
    ticket.save();

    res.send(ticket);
  } catch (err) {
    console.log(err);
    res.send(err)
  }
};
