var foods = ['Apple', 'Banana', 'Orange'];

for (var i = 0; i < foods.length; i++) {
  $('div').append(`<h1>${foods[i]}</h1>`);
  $('div').append(`<button>${foods[i]} Button</button>`);
};

function handleClick(e) {
  console.log(`You clicked the ${$(e.target).html()}`);
}

$('button').click(handleClick);
