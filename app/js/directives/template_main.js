module.exports = function(app){
  app.directive('masterMain' , function(){
    return{
      replace: true,
      transclude: true,
      restrict: 'AEC',
      templateUrl: '/templates/master/master_main.html',
      scope: true
    };
  });
};
