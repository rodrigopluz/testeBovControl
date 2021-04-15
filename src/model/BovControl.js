const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BovControlSchema = Schema({
  name: String,
  type: String,
  weight: String,
  age: String
});

module.exports = mongoose.model('BovControl', BovControlSchema);
