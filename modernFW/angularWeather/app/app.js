'use strict';

angular
  .module('weather', ['ngRoute'])
  .config(($routeProvider) => {

    // Object to pass to $routeProvider for resolve arg
    const checkForAuth = {
      checkForAuth: ($location) => {
        firebase.auth().onAuthStateChanged(user => {
          (user) ? alert('Welcome'): $location.url('/');
        });
      }
    };

    $routeProvider
      .when('/', {
        controller: 'RootCtrl',
        templateUrl: 'partials/root.html'
      })
      .when('/weather/:zipcode', {
        controller: 'WeatherCtrl',
        templateUrl: 'partials/weather.html',
        // Will run first, on bind
        resolve: checkForAuth
      })
      .otherwise('/');

  })
  .run(($location) => {



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
  .controller('WeatherCtrl', function($scope, $routeParams, WeatherFactory) {

    $scope.zipcode = $routeParams.zipcode;

    // Using WeatherFactory.getWeather to return current temp
    WeatherFactory.getWeather($routeParams.zipcode)
    .then(obj => {
      $scope.temperature = obj.temp;
      $scope.city = obj.city;
    })

  })
  .factory('WeatherFactory', function($http) {

    // Function which accepts a zipcode and returns the temp and city
    function getWeather(zipcode) {
      return $http.get(`http://api.wunderground.com/api/d4fce7fe5acf4720/conditions/q/${zipcode}.json`)
      .then(httpData => ({
        temp: httpData.data.current_observation.temp_f,
        city: httpData.data.current_observation.display_location.full
      }))
    };

    return { getWeather };

  });
