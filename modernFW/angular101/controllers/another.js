'use strict';

app.controller('AnotherCtrl', function($scope, $http) {

  $scope.message = 'I am from AnotherCtrl!';

  $scope.list = ['Marlin', 'George', 'Lisa'];

  $scope.sayMyName = (name) => alert(name);

  // Populate $scope.list with a local $http call
  $http.get('json/list.json')
  .then(( {data: { list }} ) => {
    $scope.list = list;
  });

  $http.get('json/mushrooms.json')
  .then(( {data: {mushrooms}} ) => {

    $scope.mush = mushrooms;

  });


});
