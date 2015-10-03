'use strict';

/**
 * @ngdoc overview
 * @name calculadoraApp
 * @description
 * # calculadoraApp
 *
 * Main module of the application.
 */
angular
  .module('calculadoraApp', [
    'ngAnimate',    
    'ngRoute'    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
