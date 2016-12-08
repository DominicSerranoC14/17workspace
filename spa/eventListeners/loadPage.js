var outputDiv = document.getElementById('output-div');

function populateDOM() {
  var counter = 4;
  var div = "";
  var button;
  for (var i = 0; i < counter; i++) {
    button = document.createElement('button');
    button.innerText = `Button ${i+1}`;
    div = document.createElement('div');
    div.innerText = `DIV ${i+1}:  `;
    div.setAttribute('class', 'div');
    div.appendChild(button);
    outputDiv.appendChild(div);
  };
};

populateDOM();
