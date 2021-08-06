const express = require("express");
const mongoose = require("mongoose");
const Users = require("./model/users");
const pg = require("./pg");
const api = require("./api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
//api
app.use("/api", api);

const PGS = async () => {
  const model = await pg.query("select * from users");
  model.rows.forEach(async (item) => {
    const users = new Users({
      user_name: item.user_name,
      password: item.password,
      token: item.token,
      user_roles: item.user_roles,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      iin_code: item.iin_code,
      layer: item.layer,
      has_event_rss: item.has_event_rss,
      has_zt_rss: item.has_zt_rss,
      iin: item.iin,
      reset_password_date: item.reset_password_date,
      activated: item.activated,
      phone_number: item.phone_number,
      lockout_end_date: item.lockout_end_date,
      access_failed_count: item.access_failed_count,
      create_date: item.create_date,
      lockout_enabled: item.lockout_enabled,
    });
    //await users.save();
  });
};
PGS();
const start = async () => {
  try {
    const url = "mongodb://localhost:27017/Atyrau"; // подключение к бд
    await mongoose.connect(url, {
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
