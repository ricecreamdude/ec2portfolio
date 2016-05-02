const angular = require('angular');
const router = require('angular-ui-router');
const bootstrapUI = require('angular-ui-bootstrap');
//Scope properties ONLY inherit down state chains if views are nested


var portfolioApp = angular.module('portfolioApp' , ['ui.router', 'ui.bootstrap'] );


//Set Up UI Router config for pictureApp
//This controls what views are seen at specific urls
// portfolioApp.config( ($stateProvider , $urlRouterProvider) => {
//
//   $urlRouterProvider.otherwise("/");
//
// })

require( __dirname + '/services')(portfolioApp);

require( __dirname + '/controllers')(portfolioApp);

require( __dirname + '/directives')(portfolioApp);
