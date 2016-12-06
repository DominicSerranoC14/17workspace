// Reference the output dom element
var outputDiv = document.getElementById('output-div');

function loadMessages (xhrEvent) {
  // Parse JSON string
  var data = JSON.parse(xhrEvent.target.responseText).messages;
  var html = "";

  // Loop through data, concat messages and author
  for (var i = 0; i < data.length; i++) {
    html += `<p>${data[i].author}: `;
    html += `${data[i].text}   `;
    html += `<br>${data[i].date}</p>`;
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
