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
  $urlRouterProvider.otherwise("/fourohfour");

  $stateProvider.state('main' , {
    url: '/',
    template: '<master-main>'
  }
  // .state('contact' , {
  //   url: '/contact',
  //   template: '<email>'
  // })
);

      //template: <can be a directive element assignment weird>

    // To Be Added for admin view (Josh-View lol) using Nested Views
    // .state('admin' , {
    //
    // })

});
