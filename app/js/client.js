const angular = require('angular');
const router = require('angular-ui-router');
//Scope properties ONLY inherit down state chains if views are nested


var portfolioApp = angular.module('portfolioApp' , ['ui.router'] );

//Add in Services, Controllers, Directives
require( __dirname + '/services')(portfolioApp);
require( __dirname + '/controllers')(portfolioApp);
require( __dirname + '/directives')(portfolioApp);


//Set Up UI-router for pictureApp
//This controls what views are seen at specific urls
portfolioApp.config( function($stateProvider , $urlRouterProvider) {

  //All incorrect roads lead to 404
  $urlRouterProvider.otherwise("/");

  $stateProvider.state('main' , {
    url: '/',
    template: '<master-main>'
  }).state('projects' , {
    url: '/projects',
    template: '<view-project>'
  })

});
