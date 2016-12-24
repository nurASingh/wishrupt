'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('wishruptApp')
  .controller('HomeCtrl', function ($scope) {
      $scope.header = '';
      $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
      });
  });