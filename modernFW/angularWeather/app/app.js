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
        resolve: {
          weather: (WeatherFactory, $route) => {
            return WeatherFactory.getWeather($route.current.params.zipcode)
          },
          // If user is signed in, resolve user
          // Else redirect to '/' and alert err msg
          user: (AuthFactory, $location) => AuthFactory.getUser().catch((err) => {
            alert(err);
            $location.url('/');
          })
        }

      })
      .otherwise('/');

  })
  .controller('RootCtrl', function($scope, $location) {

    $scope.searchForecast = (search) => {
      if (search.length > 5 || search.length < 5) {
        $scope.searchInput = "";
        alert('Zipcode must be 5 digits long.');
        return;
      }
      $location.url(`/weather/${search}`);
    };

  })
  .controller('WeatherCtrl', function($scope, weather, user) {

    $scope.zipcode = weather.zipcode;
    $scope.temperature = weather.temp;
    $scope.city = weather.city;

  })
  .factory('WeatherFactory', function($http) {

    // Function which accepts a zipcode and returns the temp and city
    const getWeather = (zipcode) => {
      return $http.get(`http://api.wunderground.com/api/d4fce7fe5acf4720/conditions/q/${zipcode}.json`)
      .then(httpData => ({
        "zipcode": zipcode,
        temp: httpData.data.current_observation.temp_f,
        city: httpData.data.current_observation.display_location.full
      }))
    };

    return { getWeather };

  })
  .factory('AuthFactory', function($location, $q) {

    const getUser = () => {
      return $q((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          unsubscribe();
          (user) ? resolve(user): reject('Please sign in.');
        });
      });
    };

    return { getUser };

  });
