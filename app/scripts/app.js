'use strict';

/**
 * @ngdoc overview
 * @name arantxaMorcilloApp
 * @description
 * # arantxaMorcilloApp
 *
 * Main module of the application.
 */
angular
  .module('arantxaMorcilloApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
