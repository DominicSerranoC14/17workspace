// Reference to the output-div in the HTML
var outputDiv = document.getElementById('output-div');
// Reference to the button in the html
var buttonEl = document.getElementById('button');


// Create a XHR request object
var myRequest = new XMLHttpRequest();
// Open the request object, specify file or url
myRequest.open("GET", "songList.json");
// Send the request for the object
myRequest.send();
// Add event listener for the response to load
myRequest.addEventListener("load", loadSongList);


// Function that is called once XHR comes back
function loadSongList(XHRloadEvent) {
  // Store parsed JSON
  var data = JSON.parse(XHRloadEvent.target.responseText);
  // Store array of messages
  var songList = data.songList;
  // Loop through songList and build html strings and output to dom
  // songList list is being passed to the outputMessages function
  outputMessages(songList);
};


// Add event listenr to the button
buttonEl.addEventListener("click", function () {
  // When there is a click, fire off second XHR request
  var myRequest2 = new XMLHttpRequest();
  // Open the request object, specify file or url
  myRequest2.open("GET", "moreSongs.json");
  // Send the request for the object
  myRequest2.send();
  // Add event listener for the response to load
  myRequest2.addEventListener("load", loadSongList);

  buttonEl.setAttribute('disabled', true);
});


// Function that takes songList from JSON and outputs them to the DOM
function outputMessages (list) {
  // Var to build HTML string
  var html = "";
  for (var i = 0; i < list.length; i++) {
    // Store current object when iterating through array
    var currentSong = list[i];
    // Concatenating message data into HTML div tags
    html += "<div>";
    html += "Song: " + currentSong.songName;
    html += ", Album: " + currentSong.album;
    html += ", Artist: " + currentSong.artist;
    html += "</div>";
  };
  // Output all div's to the DOM, inside of the outputDiv
  outputDiv.innerHTML += html;
};
