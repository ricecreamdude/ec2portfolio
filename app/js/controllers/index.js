//Main Controller, for Main Scope
module.exports = function(app){
  app.controller('PortfolioController' , ['$scope', 'cfResource' , function($scope , Resource){
    $scope.pictures = {};
    $scope.newPerson = null;
    var pictureService = Resource('/');

    $scope.getAll = function(){
      pictureService.get( (err , res) => {
        if (err) console.log(err);
        $scope.pictures = res;
      })
    };

    $scope.post = function(newPerson){
      pictureService.post( newPerson , (err , res) => {
        if (err) console.log(err);
        $scope.pictures.push(res);
      });
    };

    $scope.delete = function(){

    };
  }]);
};
