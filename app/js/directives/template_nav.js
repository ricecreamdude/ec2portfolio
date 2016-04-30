module.exports = function(app){
  app.directive('templateNav' , function(){
    return{
      replace: true,
      transclude: true,
      restrict: 'E',
      templateUrl: '/templates/template_nav.html',
      scope: true
    };
  });
};
