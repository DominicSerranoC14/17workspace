// async promise factory
function getJSON() {

  return new Promise(function(resolve, reject) {

    var request = new XMLHttpRequest();
    request.open('POST', 'https://js-space-adventure.firebaseio.com/names.json');
    request.send(JSON.stringify({"a": "b"}));
    request.addEventListener('load', function(data) {
      console.log("Sent");
      console.log('Status code: ', data.target.status);
    });

  });

};

getJSON()
.then(data => console.log(data));
