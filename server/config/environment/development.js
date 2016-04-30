'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/ec2portfolio-dev'
  },

  // Seed database on startup
  seedDB: true

};
