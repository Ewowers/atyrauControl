const { Schema, model } = require("mongoose");
const schema = new Schema({
  title_rus: String,
  title_kaz: String,
  address_rus: String,
  address_kaz: String,
  contacts: String,
  work_time: String,
  description_rus: String,
  description_kaz: String,
  region: String,
  type: String,
});
module.exports = model("directory_organizations", schema);
