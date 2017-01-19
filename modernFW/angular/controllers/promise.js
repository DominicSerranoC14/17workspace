'use strict';

app.controller('PromiseCtrl', function($scope, $http) {

  // Parsing data multiple times with promises
  $http.get('json/mushrooms.json')
  .then(httpData => httpData.data.mushrooms)
  .then(shroomArray => shroomArray.map(shroom => Object.values(shroom)[0]))
  .then(shroomObj => shroomObj.filter(obj => obj.edible === true))
  .then(edibleShroomList => edibleShroomList.sort((a,b) => a.description.length - b.description.length))
  .then(shroomDescSortedByLength => $scope.shroomList = shroomDescSortedByLength)
  .catch(console.error);

});
