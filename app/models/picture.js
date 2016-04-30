const mongoose = require('mongoose');

pictureSchema = new mongoose.Schema({
  link: {type:String, required:true},
  description: {type:String, default:'Female'},
});

module.exports = exports = mongoose.model('Picture' , pictureSchema);
