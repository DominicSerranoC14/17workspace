// Reference to the output-div element
var outputDiv = document.getElementById('output-div');


// Function that will populate the DOM dynamically
function populateDOM() {
  // Set a counter variable for loop
  var counter = 4;
  var div, button;
  for (var i = 0; i < counter; i++) {
    // Create an HTML button element
    button = document.createElement('button');
    // Set the button's text
    button.innerText = `Button ${i+1}`;
    // Create an HTML div element
    div = document.createElement('div');
    // Set the div's text
    div.innerText = `DIV ${i+1}:  `;
    // Give the div a 'divs' class
    div.setAttribute('class', 'divs');
    // Append the button to the div
    div.appendChild(button);
    // Append the div to the outputDiv
    outputDiv.appendChild(div);
  };
};

// Call the populateDOM function
populateDOM();
