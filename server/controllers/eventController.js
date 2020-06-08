const express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  db = mongoose.connection,
  ticketSchema = db.ticketSchema,
  fs = require("fs");

const Event = require("../models/event");

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
  console.log("HÄR KOMMER ALLA EVENTS");

  return response.json(events);
};
