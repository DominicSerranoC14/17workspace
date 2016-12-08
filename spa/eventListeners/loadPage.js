var outputDiv = document.getElementById('output-div');

var elements = [
  `div`,
  `div`,
  `div`,
  `div`,
  `div`,
  `div`
];

function populateDOM(elArray) {
  var div;
  var button;
  for (var i = 0; i < elements.length; i++) {
    button = document.createElement('button');
    button.innerText = `I am Button ${i +1}`;
    div = document.createElement('div');
    div.innerText = `I am DIV ${i + 1}`;
    div.setAttribute('class', 'div');
    div.appendChild(button);
    outputDiv.appendChild(div);
  };
};

populateDOM(elements);
