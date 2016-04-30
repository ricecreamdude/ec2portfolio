//Frameworks
const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');

//DB
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/portfolio_app');

var PORT = 8080;

//Routes
  //Add routes here

app.use(
  express.static( __dirname + '/dist')
).listen(PORT , () => {
  console.log('Server is running on port ' + PORT + ".");
});
