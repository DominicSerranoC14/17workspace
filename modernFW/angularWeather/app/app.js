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
        templateUrl: 'partials/weather.html',
        // Resolve will run first, on bind
        // Object to pass to $routeProvider for resolve arg
        resolve: { checkForAuth: (AuthFactory) => AuthFactory.onAuth() }
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
    const getWeather = (zipcode) => {
      return $http.get(`http://api.wunderground.com/api/d4fce7fe5acf4720/conditions/q/${zipcode}.json`)
      .then(httpData => ({
        temp: httpData.data.current_observation.temp_f,
        city: httpData.data.current_observation.display_location.full
      }))
    };

    return { getWeather };

  })
  .factory('AuthFactory', function($location) {

    const onAuth = () => {
      const authReady = firebase.auth().onAuthStateChanged(user => {
        // Voids the authReady onAuthState listener
        authReady();
        (user) ? true: $location.url('/');
      });
    };

    return { onAuth };

  });
