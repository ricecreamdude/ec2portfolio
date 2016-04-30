'use strict';

angular.module('ec2portfolioApp.auth', [
  'ec2portfolioApp.constants',
  'ec2portfolioApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
