const { Schema, model } = require("mongoose");
const schema = new Schema({
  user_name: String,
  password: String,
  token: String,
  user_roles: String,
  first_name: String,
  last_name: String,
  email: String,
  iin_code: String,
  layer: String,
  has_event_rss: Number,
  has_zt_rss: Number,
  iin: String,
  reset_password_date: String,
  activated: Boolean,
  phone_number: String,
  lockout_end_date: String,
  access_failed_count: Number,
  create_date: Date,
  lockout_enabled: String,
});
module.exports = model("users", schema);
