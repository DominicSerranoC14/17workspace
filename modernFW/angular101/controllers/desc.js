app.controller('DescCtrl', function($scope, $http, $routeParams) {

  $scope.personId = $routeParams.id;

  $http.get('json/list.json')
  .then(( {data: { list }} ) => {
    $scope.personObj = list[$scope.personId];
  });

});
