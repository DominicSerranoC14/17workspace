// Reference to DOM elements
var body = document.body;
var newDivButton = document.getElementById('new-div-button');
var displayDiv = document.getElementById('display-div');
// Reference to all button elements on pageload
var buttonList = document.getElementsByTagName('button');

function activateSingleButton (e) {
  displayDiv.innerText = `You clicked ${e.target.innerText}\n`;
  displayDiv.innerText += `${e.target.parentElement.innerText.split(':')[0]} is the parentElement`;
};

// Add event listeners to all buttons on the page
function activateButtons () {
  for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', function(e) {
      activateSingleButton(e);
    });
  };
};
activateButtons();

body.addEventListener('click', function (e) {
  console.log("//// body eventListener")
  console.log("event.target", e.target);
  console.log("event.currentTarget", e.currentTarget);
  console.log("Parent", e.target.parentElement);
});

newDivButton.addEventListener('click', function(e) {
  var newDivId = buttonList.length + 1;
  var button = document.createElement('button');
  button.addEventListener('click', activateSingleButton);
  button.innerText = `Button ${newDivId}`;
  var div = document.createElement('div');
  div.innerText = `DIV ${newDivId}:  `;
  div.setAttribute('class', 'div');
  div.appendChild(button);
  outputDiv.appendChild(div);
});
