var outputDiv = document.getElementById('song-div');

function loadMessages (e) {
  // Parse JSON string
  var data = JSON.parse(e.target.responseText).messages;
  var html = "";

  // Loop through data, concat messages and author
  for (var i = 0; i < data.length; i++) {
    html += `<p>${data[i].author}: `;
    html += `${data[i].text}</p>`;
  }
  // then output html
  outputDiv.innerHTML += html;
};

// Create new request object, open and send it
var request = new XMLHttpRequest();
request.open('GET', 'messages.json');
request.send();

// Add event listener to the XHR load
request.addEventListener('load', loadMessages);
