var outputDiv = document.getElementById('song-div');

function loadMessages (e) {
  var data = JSON.parse(e.target.responseText).messages;
  var html = "";

  for (var i = 0; i < data.length; i++) {
    html += `<p>${data[i].author}: `;
    html += `${data[i].text}</p>`;
    outputDiv.innerHTML += html;
  }
};

var request = new XMLHttpRequest();
request.open('GET', 'messages.json');
request.send();

request.addEventListener('load', loadMessages);
