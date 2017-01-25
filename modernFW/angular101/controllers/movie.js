'use strict';

app.controller('MovieCtrl', function($scope, $http, $q) {


  $scope.searchMovie = (searchTerm) => {
    $scope.movieList = "";
    $http.get(`http://www.omdbapi.com/?s=${searchTerm}`)
    .then(httpData => httpData.data.Search)
    .then(simpleArray => {
      return simpleArray.map(movieObj => (
        $http.get(`http://www.omdbapi.com/?i=${movieObj.imdbID}`)
      ))
    })
    .then(promiseArray => $q.all(promiseArray))
    .then(promiseArrayData => promiseArrayData.map(each => each.data))
    .then(fullMovieArray => $scope.movieList = fullMovieArray)
    .catch(console.error);
  };

});
