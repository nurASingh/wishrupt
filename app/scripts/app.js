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
  .module('wishruptApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'

  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .when('/Product', {
        templateUrl: 'views/sector.html',
        controller: 'HomeCtrl',
        controllerAs: 'about'
      })
      .when('/Contact', {
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
	  
  $locationProvider.html5Mode(false);
  })
  
  
 

