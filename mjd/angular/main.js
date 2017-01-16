'use strict';

const app = angular.module('myApp', ['ngRoute']);

app.config(($routeProvider) => {

  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: 'views/home.html'
  })
  .otherwise('/');

});
