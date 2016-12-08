var songDiv = document.getElementById('song-div');
var html = "";

// Declare function that fires when the XML request is responded to
function executeThisCodeAfter (e) {
    // Store the parsed JSON response in a var
    var data = JSON.parse(e.target.responseText).songs;

    // Loop through the songs array and output to DOM
    for (var i = 0; i < data.length; i++) {
      html += `<p>${data[i]}</p>`;
      songDiv.innerHTML = html;
    }

  }
};

// Create XHR request object
var myRequest = new XMLHttpRequest();

// Add event listeners to request
myRequest.addEventListener('load', executeThisCodeAfter);

//  Open the XHR request with a file path / url
myRequest.open('GET', 'songs.json');

// Sends off the XHR request
//'executeThisCodeAfter' is executed after a response is sent back
myRequest.send();
