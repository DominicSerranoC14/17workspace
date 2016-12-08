// Reference the output dom element
var outputDiv = document.getElementById('output-div');
// Reference the buttons
var saveButton = document.getElementById('save-user');
var displayButton = document.getElementById('display-user');
// Declare a variable for user info
var user = "";


// This function creates the XHR request and sends it
function requestUser () {
  // Create new request object, open and send it
  var request = new XMLHttpRequest();
  request.open('GET', 'https://randomuser.me/api');
  request.send();
  // Add event listener to the XHR load
  request.addEventListener('load', saveUser);
};


// This function is fired when the XHR request resonds
function saveUser (e) {
  // Parse JSON string and store in variable
  user = JSON.parse(e.target.responseText).results[0];
  outputDiv.innerHTML = '<br>Your user is loaded! Click display random user button!'
};


function displayUser () {
  // Built HTML string to output to DOM
  if (!user) {
    console.log("No user");
  };
  var html = "";
  html += `<h1>`;
  html += `${user.name.title}. ${user.name.first} ${user.name.last} `;
  html += `<br><img src="${user.picture.large}">`;
  html += `</h1>`;
  html += `<p>Click get random user button to display another user!</p>`;

  // Output html to DOM
  outputDiv.innerHTML = html;
};


// Add event listener to save user button
saveButton.addEventListener('click', requestUser)
// Add event listener to display user button
displayButton.addEventListener('click', displayUser)
