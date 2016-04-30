const angular = require('angular');
const router = require('angular-ui-router');
const bootstrapUI = require('angular-ui-bootstrap');
//Scope properties ONLY inherit down state chains if views are nested


var pictureApp = angular.module('pictureApp' , ['ui.bootstrap'] );

require( __dirname + '/services')(pictureApp);

require( __dirname + '/controllers')(pictureApp);

require( __dirname + '/directives')(pictureApp);
