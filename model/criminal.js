const { Schema, model } = require("mongoose");
const crimi_codes = new Schema({
  name: {
    type: String,
    required: true,
    uired: true,
  },
  code: {
    type: Number,
  },
});
module.exports = model("crime_codes", crimi_codes);
