var data = {
  title: 'Hello World',
  group: {
    list: ['Array Index 0', 'Array Index 1']
  },
  people: [
    { firstName: 'Laura', lastName:'C' },
    { firstName: 'Donna', lastName:'B' },
    { firstName: 'George', lastName:'Farlan' }
  ],
  things: [
    { name: 'Thing 1' },
    { name: 'Thing 2' },
    { name: 'Thing 3' }
  ]
};

Handlebars.registerHelper('list', function(items, options) {
  var out = "<p>";

  for(var i=0, l=items.length; i<l; i++) {
    out = out + options.fn(items[i]) + "</p>";
  };

  return out;
});

// Create template function and output to DOM
var entryHTML = $('#partial').html();
var entryTemplate = Handlebars.compile(entryHTML);
var entryOutput = entryTemplate(data);
$('#hb-output').append(entryOutput);
