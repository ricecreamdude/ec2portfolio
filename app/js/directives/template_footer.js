module.exports = function(app){
  app.directive('masterFooter' , function(){
    return{
      replace: true,
      transclude: true,
      restrict: 'AEC',
      templateUrl: '/templates/master/master_footer.html',
      scope: true
    };
  });
};
