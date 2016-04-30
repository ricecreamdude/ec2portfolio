var config = require( __dirname + '/../config');

var handleSuccess = function(callback) {
  return function(res) {
    callback(null, res.data);
  };
};

var handleFailure = function(callback) {
  return function(res) {
    callback(res);
  };
};

//Generic resource creation service
module.exports = exports = function(app) {
  app.factory('cfResource' , ['$http' , function($http) {
    var Resource = function(resourceName) {
      this.name = resourceName;
    };

    Resource.prototype.get = function(callback) {
      $http.get('http://localhost:' + config.PORT + '/api/')
        .then( handleSuccess(callback) , handleFailure(callback) );
    };

    Resource.prototype.post = function(data , callback) {
      $http.post('http://localhost:' + config.PORT + '/api/', data)
        .then( handleSuccess(callback) , handleFailure(callback) );
    };

    Resource.prototype.delete = function(data , callback) {
      $http.delete('http://localhost:' + config.PORT + '/api/' + '/' + data._id)
        .then( handleSuccess(callback) , handleFailure(callback) );
    };

    return function(resourceName){
      return new Resource(resourceName);
    };

  }]);
}
