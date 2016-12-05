'use strict';

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',
'y','z'];

// Create function to log each letter with POJO
function alphastacker(array) {
  var log = '';
  for ( var i = 0; i < array.length; i++ ) {
    log += array[i];
    if ((i + 1) % 3 === 0) {
      log += ' ';
    }
    console.log("Test print", log);
  };
}

// alphastacker(alphabet);

/////////////////////////////////////////


// Alphastacker exercise completed with ES6
const alphastackerES6 = (array) => {
  let log = '';
  // Use forEach method to loop through array
  // forEach accepts a callback function which takes a parameter for the current value being looped over and a second value which is an iterator
  array.forEach((each, i) => {
    log += each;
    log += (i + 1) % 3 === 0 ? ' ' : '';
    console.log(log);
  });
};


alphastackerES6(alphabet);
