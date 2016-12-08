// Reference to DOM elements
var body = document.body;
var newDivButton = document.getElementById('new-div-button');
var displayDiv = document.getElementById('display-div');
// Reference to all button elements on pageload
var buttonList = document.getElementsByTagName('button');



// When a div button is clicked, the button element and parentElement name are displayed
function displayButtonClicked (e) {
  displayDiv.innerText = `You clicked ${e.target.innerText}\n`;
  displayDiv.innerText += `${e.target.parentElement.innerText.split(':')[0]} is the parentElement`;
};


// Add event listeners to all buttons on the page when page is loaded
function activateButtons () {
  for (var i = 0; i < buttonList.length; i++) {
    // Adding an event listener to each button element
    buttonList[i].addEventListener('click', displayButtonClicked)
  };
};
activateButtons();


// Add an event listener on the body element
body.addEventListener('click', function (e) {
  console.log("//// body eventListener")
  // logs the target of the element clicked
  console.log("event.target", e.target);
  // logs the currentTarget of the element clicked
  console.log("event.currentTarget", e.currentTarget);
  // logs the parentElement of the element clicked
  console.log("Parent", e.target.parentElement);
});


// Event listener for new div button
newDivButton.addEventListener('click', function(e) {
  // Use buttonList (which holds all buttons in the DOM) to dynamically increase
  // the DIV id for a new div
  var newDivId = buttonList.length + 1;
  // Create a new HTML button element
  var button = document.createElement('button');
  // Add the displayButtonClicked event listener to the button
  button.addEventListener('click', displayButtonClicked);
  // Set the button's text
  button.innerText = `Button ${newDivId}`;
  // Create a new HTML div element
  var div = document.createElement('div');
  // Set the div's text
  div.innerText = `DIV ${newDivId}:  `;
  // Add a 'div' class to the new div
  div.setAttribute('class', 'divs');
  // Append the button to the div
  div.appendChild(button);
  // Append the div to the outputDiv
  outputDiv.appendChild(div);
});
