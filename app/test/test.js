const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const mongoose = require('mongoose');
process.env.MONGOLAB_URI = 'mongodb://localhost/pictures_test';
const server = require(__dirname + '/../server');
const Picture = require(__dirname + '/../models/picture');

describe('The Pictures API' , () => {
  after( (done) => {
    mongoose.connection.db.dropDatabase( () => {
      done();
    });
  });

  it('should respond to a GET request' , (done) => {
    chai.request('localhost:5000')
    .get('/api/')
    .end( (err, res) => {
      expect(typeof res.body).to.eql('object');
      done();
    });
  });
  it('should create a picture entry on a POST request' , (done) => {
    chai.request('localhost:5000')
    .post('/api/')
    .send({link: "test" , description: "test"})
    .end( (err , res) => {
      expect(res.body.link).to.eql('test');
      done();
    });
  });
});
