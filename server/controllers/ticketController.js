const Event = require("../models/event"),
  Ticket = require("../models/ticket");

exports.addTicket = async (req, res) => {
  try {
    const userId = req.body.userId,
      eventId = req.body.eventId,
      numberOfTickets = req.body.numberOfTickets,
      date = new Date();

    let soldTickets = req.body.soldTickets;
    soldTickets += numberOfTickets;

    Event.updateOne(
      { eventId: eventId },
      { $set: { soldTickets: soldTickets } },
      (err) => {
        if (err) console.log(err);
      }
    );

    let tickets = [];
    for (let i = 0; i < numberOfTickets; i++) {
      const ticketNumber = Math.random()
        .toString(36)
        .substring(7);

      const ticket = new Ticket({
        ticketNumber: ticketNumber.toLocaleUpperCase(),
        eventId: eventId,
        createdAt: date,
        userId: userId,
      });

      ticket.save();

      tickets.push(ticket);
    }

    const message = {
      "Number_of_tickets: ": numberOfTickets,
      "Tickets: ": tickets,
      "Success ": true,
      "Message: ": "Here is your tickets!",
    };

    res.send(message);
  } catch (err) {
    console.log(err);

    res.send(err);
  }
};

exports.getTicket = async (request, response) => {
  try {
    const tickets = await Ticket.findOne({ticket_number: request.params.ticket_number})
    return response.json(tickets);
  } catch (error) {
    console.log(error);

    res.send(err)

  }
};
