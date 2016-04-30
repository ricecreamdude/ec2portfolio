const angular = require('angular');
const router = require('angular-ui-router');
//Scope properties ONLY inherit down state chains if views are nested


var pictureApp = angular.module('pictureApp' , [] );

require( __dirname + '/services')(pictureApp);

require( __dirname + '/controllers')(pictureApp);

require( __dirname + '/directives')(pictureApp);
