
const event = require("../models/event");

exports.addEvent = async (request, response) => {
  const eventItem = new event({
    name: request.body.name,
    place: request.body.place,
    startDateTime: request.body.startDateTime,
    endDateTime: request.body.endDateTime,
    tickets: request.body.tickets,
    price: request.body.price,
    soldTickets: request.body.soldTickets,
  });
  eventItem
    .save()
    .then((eventItem) => {
      response.send(eventItem);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getEvents = async (request, response) => {
  const events = await Event.find();
  return response.json(events);


};
