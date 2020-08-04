const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  }, 
  color: {
    type: String,
    required: true 
  },
});

module.exports = mongoose.model('Zone', zoneSchema);