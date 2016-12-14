$.getJSON('messages.json', loadPage);


function handleClick(e) {
  console.log(`You clicked the ${$(e.target).html()}`);
};


function loadPage (data)  {
  var foods = data.messages;

  for (var i = 0; i < foods.length; i++) {
    $('div').append(`<h1>${foods[i]}</h1>`);
    $('div').append(`<button>${foods[i]} Button</button>`);
  };

  $('button').click(handleClick);
};
