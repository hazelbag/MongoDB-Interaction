const mongoose = require('mongoose');
// set the schema to a const Schema
const Schema = mongoose.Schema;
// Create the Scema to be used for the database
const carSchema = new Schema({
  model: { type: Number, required: true, unique: true, trim: true, minLength: 4 },
  make: { type: String, required: true, unique: true, trim: true, minLength: 2 },
  color: { type: String, required: true, unique: true, trim: true, minLength: 3 },
  reg_num: { type: String, required: true, unique: true, trim: true, minLength: 4 },
  owner: { type: String, required: true, unique: true, trim: true, minLength: 3 },
  address: { type: String, required: true, unique: true, trim: true, minLength: 4 },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;