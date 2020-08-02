const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  }, 
  zone: {
    type: String,
    required: true 
  }, 
  active: {
    type: Boolean, 
    required: true, 
    default: true
  }
});

module.exports = mongoose.model('Table', tableSchema);