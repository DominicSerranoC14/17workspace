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
      if (search.length > 5 || search.length < 5) {
        $scope.searchInput = "";
        alert('Zipcode must be 5 digits long.');
        return;
      }

      location.href = `/#!/weather/${search}`;
    };

  })
  .controller('WeatherCtrl', function($scope, $routeParams, $http) {

    $scope.zipcode = $routeParams.zipcode;

    $http.get(`http://api.wunderground.com/api/d4fce7fe5acf4720/conditions/q/CA/San_Francisco.json`)
    .then(httpData => httpData.data.current_observation)
    .then(weatherObj => weatherObj.temp_f)
    .then(obj => $scope.temperature = obj)
    .then(console.log)

  })
