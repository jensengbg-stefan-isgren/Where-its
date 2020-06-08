const express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
db = mongoose.connection,
ticketSchema = db.ticketSchema,
fs = require('fs')

const Event = require("../models/event");


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
  const events = await Event.find();
  console.log("HÄR KOMMER ALLA EVENTS")

  return response.json(events);
};
