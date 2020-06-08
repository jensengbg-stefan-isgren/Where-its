const express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
db = mongoose.connection,
ticketSchema = db.ticketSchema;


exports.addEvent = async (request, response) => {
  // här vill vi ta emot input data från frontend adminpanelen och spara eventet i mongoDB
  response.send("TEST");
};

exports.getEvents = async (request, response) => {
  const events= await Event.find();
  res.json(events);
  response.send("HÄR KOMMER ALLA EVENTS");
};
