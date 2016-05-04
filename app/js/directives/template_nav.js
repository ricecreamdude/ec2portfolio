module.exports = function(app){
  app.directive('masterNav' , function(){
    return{
      replace: true,
      transclude: true,
      restrict: 'E',
      templateUrl: '/templates/master/master_nav.html',
      scope: true
    };
  });
};
