const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

mongoose
  .connect(`mongodb+srv://jensengbg:jensengbg@cluster0-lhhov.mongodb.net/where-its?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Connected to MongoDB Where-its`);
    app.listen(3000, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
    console.log(`Error connecting to the database`);
  });
