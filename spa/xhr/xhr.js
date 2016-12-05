var songDiv = document.getElementById('song-div');
var html = "";

function executeThisCodeAfter (e) {
  if (e.lengthComputable) {

    var data = JSON.parse(e.target.responseText);
    console.log("Test data", data.songs);
    
    for (var i = 0; i < data.songs.length; i++) {
      html += `<p>${data.songs[i]}</p>`;
      songDiv.innerHTML = html;
    }

  }
  console.log("XHR is here!");
};

var myRequest = new XMLHttpRequest();

myRequest.addEventListener('load', executeThisCodeAfter);

myRequest.open('GET', 'songs.json');

myRequest.send();
