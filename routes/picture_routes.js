//Framework
const express = require('express');

//Middleware
const dbError = require(__dirname + '/../lib/handleServerError');
const bodyParser = require('body-parser').json();
//Mongoose
const mongoose = require('mongoose');
const Picture = require( __dirname + '/../models/picture');


var pictureRouter = module.exports = exports = express.Router();
//We need to use auth.routes to direct users to this route

pictureRouter.route('/')
  .get( (req , res) => {
    Picture.find( {} , (err , data) => {
      if(err) return dbError(err , res);
      console.log('Pictures GET')
      res.status(200).json(data);
    });
  })
  .post( bodyParser , (req, res) => {
    var newPicture = new Picture(req.body);
    newPicture.save( (err , data) => {
      if(err) return dbError(err , res);
      console.log("Picture Saved");
      res.status(200).json(newPicture);
    });
  })

pictureRouter.delete('/delete/:id', (req, res) => {
  Picture.remove({_id: req.params.id} , (err) => {
    if(err) return dbError(err , res);
    console.log('Picture Deleted');
    res.status(200).send('Picture deleted');
  });
});
