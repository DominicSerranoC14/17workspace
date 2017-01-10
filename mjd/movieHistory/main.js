'use strict';

var url = 'http://www.omdbapi.com/';
var FBurl = 'https://js-space-adventure.firebaseio.com/';
var movieSearchHTML;

function getSearch(searchWord) {
  $.ajax({
    url: `${url}/${searchWord}`
  })
  .then(function(data) {
    var search = data.Search;

    search.forEach((each, i) => {
      $('#output').append(`
        <div id="${i}" class="card">
        <h4>${each.Title}</h4>
        <p>${each.Year}</p>
        <img src="${each.Poster}"></img>
        </div>
      `);
    });

    $('.card').click(function(e) {
      var currentCardId = $(e.currentTarget).attr('id');
      var currentCardObj = search[currentCardId];

      postMovie(currentCardObj);
    });
  });
};

function postMovie(movieObj) {
  $.ajax({
    method: 'POST',
    url: `${FBurl}movie.json`,
    data: JSON.stringify(movieObj)
  })
  .then(function(status) {
    console.log(status);
  });
};

getSearch('?s=Godzilla');
