const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const EXPORT = require("./exportPG");
const api = require("./api");
const app = express();
//use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//api
app.use("/api", api);
// EXPORT(); //запуск экспорта
const start = async () => {
  try {
    //const url = "mongodb://localhost:27017/Atyrau"; // ссылка к базе
    const urlProduction = "mongodb+srv://Ewower:Ewower12@cluster0.upmbf.mongodb.net/Atyrau";
    await mongoose.connect(urlProduction, {
      // подключение к монго
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    const port = process.env.PORT || 8001;
    app.listen(port, () => {
      console.log("run " + port);
    });
  } catch (err) {
    console.error;
  }
};
start();
