'use strict';

angular
  .module('weather', ['ngRoute'])
  .config(($routeProvider) => {

    $routeProvider
      .when('/', {
        controller: 'RootCtrl',
        templateUrl: 'partials/root.html'
      })
      .otherwise('/');

  })
  .controller('RootCtrl', function() {

  });
