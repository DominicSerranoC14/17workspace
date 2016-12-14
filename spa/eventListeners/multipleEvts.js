var outputDiv = document.querySelector('#output-div');
var inputEl = document.querySelector('#input');
var currentEl = null;
var currentDesc = null;

outputDOM();
activateEvts();

function outputDOM () {
  var html = '';
  for (var i = 0; i < 3; i++) {
    html += '<div class="container">';
    html += '<h3>Title</h3>';
    html += '<h4>Sub Title</h4>';
    html += `<p>Description P ${i + 1}</p>`;
    html += '</div>';
  };
  outputDiv.innerHTML = html;
};


function activateEvts () {
  var elList = document.querySelectorAll('.container');

  for (var i = 0; i < elList.length; i++) {
    elList[i].addEventListener('click', function(e) {

      if (e.target.classList[0] === 'container') {
        currentEl = e.target;
        currentDesc = currentEl.lastChild;
        input.value = currentDesc.innerText;
        inputMirror();
      } else if (e.target.parentElement.classList[0] === 'container') {
        currentEl = e.target.parentElement;
        currentDesc = currentEl.lastChild;
        input.value = currentDesc.innerText;
        inputMirror();
      }
    });
  };
};

// If element is passed into function then addEventListener is cloned?
function inputMirror () {
  inputEl.addEventListener('keyup', function(e) {
    currentDesc.innerText = input.value;
  });
};
