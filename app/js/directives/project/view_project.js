module.exports = function(app){
  app.directive('viewProject' , function(){
    return{
      replace: true,
      restrict: 'AEC',
      templateUrl: '/templates/views/view_projects.html',
      scope: true
    };
  });
};
