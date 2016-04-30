module.exports = function(app) {
  app.directive('pictureDisplay' , function(){
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: '/templates/picture_card.html',
      scope: true
    };
  });
};
