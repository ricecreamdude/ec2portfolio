//Framework
const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');

const pictureRouter = require( __dirname + '/routes/picture_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/picture_app');

var PORT = 5000;

//Adding routes
app.use('/api' , pictureRouter);

app.use(
  express.static( __dirname + '/build')
).listen(PORT , () => {
  console.log('Server is running on port ' + PORT + '.');
});
