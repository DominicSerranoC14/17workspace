'use strict';

var url = 'http://www.omdbapi.com/';
var movieSearchHTML;


function getSearch(searchWord) {
  $.ajax({
    url: `${url}/${searchWord}`,
    dataType: 'json'
  }).then(function(data) {
    var search = data.Search;

    search.forEach(each => {
      $('#output').append(`
        <div class="card">
        <h4>${each.Title}</h4>
        <p>${each.Year}</p>
        <img src="${each.Poster}"></img>
        </div>
      `);
    });
  });
}


getSearch('?s=Batman');
