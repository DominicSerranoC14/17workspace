var outputDiv = document.getElementById('output-div');

var elements = [
  `div`,
  `div`,
  `div`,
  `div`,
  `div`,
  `div`
];

function createElement(elArray) {
  var div;
  for (var i = 0; i < elements.length; i++) {
    div = document.createElement(elArray[i]);
    div.innerText = `I am DIV ${i}`;
    div.setAttribute('class', 'div');
    outputDiv.appendChild(div);
  };
};

createElement(elements);
