'use strict';

angular
  .module('weather', ['ngRoute'])
  .config(($routeProvider) => {

    $routeProvider
      .when('/', {
        controller: 'RootCtrl',
        templateUrl: 'partials/root.html'
      })
      .when('/weather/:zipcode', {
        controller: 'WeatherCtrl',
        templateUrl: 'partials/weather.html'
      })
      .otherwise('/');

  })
  .controller('RootCtrl', function($scope) {

    $scope.searchForecast = (search) => {
      console.log("search", search);
    };

  })
  .controller('WeatherCtrl', function($scope) {


  })
