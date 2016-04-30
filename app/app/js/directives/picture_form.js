module.exports = function(app) {
  app.directive('pictureForm' , function(){
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/templates/submit_form.html',
      scope: true
    };
  });
};
