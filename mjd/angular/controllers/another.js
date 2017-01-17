'use strict';

app.controller('AnotherCtrl', function($scope, $http) {

  $scope.message = 'I am from AnotherCtrl!';

  $scope.list = ['Marlin', 'George', 'Lisa'];

  // Populate $scope.list with a local $http call
  $http.get('list.json')
  .then(listData => {
    $scope.list = listData.data.list.map(each => `${each.name} from $http!`);
  });

});
