//мероприятия города
const { Schema, model } = require("mongoose");
const schema = new Schema({
  id: { type: String, index: true },
  title_kz: String,
  comment_kz: String,
  geom: Object,
  edate: Date,
  comment_rus: String,
  title_rus: String,
});
module.exports = model("event", schema);
