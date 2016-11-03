'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .when('/services', {
        templateUrl: 'views/sector.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .when('/philosophy', {
        templateUrl: 'views/philosophy.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

