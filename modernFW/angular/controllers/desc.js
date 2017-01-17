app.controller('DescCtrl', function($scope, $http, $routeParams) {

  $scope.personId = $routeParams.id;

  $http.get('list.json')
  .then(( {data: { list }} ) => {
    $scope.personObj = list.filter(each => {
      return (each.id === parseInt($scope.personId)) ? each: false
    })[0];
  });

});
