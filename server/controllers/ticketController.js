const mongoose = require("mongoose"),
  Event = require("../models/event"),
  Ticket = require("../models/ticket");

exports.addTicket = async (req, res) => {
  try {
    const userId = req.body.userId,
      eventId = req.body.eventId,
      numberOfTickets = req.body.NumberOfTickets,
      date = new Date();

      console.log(req.body.numberOfTickets)

    let soldTickets = req.body.sold_tickets;
    soldTickets += numberOfTickets;

    // Upd antal sålda biljetter
    Event.updateOne(
      { _id: eventId },
      { $set: { soldTickets: soldTickets } },
      (err) => {
        if (err) console.log(err);
      }
    );

    const ticketNumbers = [];

    for (i = 0; i < numberOfTickets; i++) {
      const ticketNumber = Math.random()
        .toString(36)
        .substring(7);

        const ticket = new Ticket({
          ticketNumber: ticketNumber.toLocaleUpperCase(),
          eventId: eventId,
          createdAt: date,
          userId: userId,
        })
        console.log(ticket)
        ticketNumbers.push(ticket);
        ticket.save().catch((error) => {
          console.log(error);
        });

      console.log(ticketNumbers)
    }

    const message = {
      "Number of tickets: ": numberOfTickets,
      "Tickets: ": ticketNumbers,
      "Success ": true,
      "Message: ": "Here is your tickets!",
    };
    res.send(message);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
