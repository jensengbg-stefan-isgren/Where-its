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
    // måste snacka med crypto om dom gör ett ticketNumber
    // så vi kan ha en array här som genererar nya tickets beroende på antal sålda biljetter.)
    for (i = 0; i < ticketNumber.length; i++) {
      const ticket = new Ticket({
        ticketNumber: ticketNumber[i],
        eventId: eventId,
        createdAt: date,
        userId: userId,
      });
      ticket.save();
    }

    const message = {
      "Number of tickets: ": numberOfTickets,
      "Success ": true,
      "Message: ": `You bought ${numberOfTickets}!  `,
    };
    res.send(message);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
