module.exports = function(app){
  app.directive('templateFooter' , function(){
    return{
      replace: true,
      transclude: true,
      restrict: 'AEC',
      templateUrl: '/templates/template_footer.html',
      scope: true
    };
  });
};
