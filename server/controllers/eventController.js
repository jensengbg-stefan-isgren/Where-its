const event = require("../models/event");

exports.addEvent = async (request, response) => {
  const eventItem = new event({
    name: "TEST",
    place: "STOCKHOLM",
    startDateTime: new Date(),
    endDateTime: new Date(),
    tickets: 100,
    price: 20,
    soldTickets: 2000,
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
  response.send("HÄR KOMMER ALLA EVENTS");
};
