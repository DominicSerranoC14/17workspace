'use strict';

const app = angular.module('myApp', ['ngRoute']);

app.config(($routeProvider) => {

  $routeProvider
  .when('/', {
    controller: 'HomeCtrl',
    templateUrl: 'views/home.html'
  })
  .when('/another', {
    controller: 'AnotherCtrl',
    templateUrl: 'views/another.html'
  })
  .when('/promise', {
    controller: 'PromiseCtrl',
    templateUrl: 'views/promise.html'
  })
  .when('/:id', {
    controller: 'DescCtrl',
    templateUrl: 'views/desc.html'
  })
  .otherwise('/');

});
