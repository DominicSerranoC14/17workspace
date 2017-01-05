var data = {
  title: 'Hello World',
  p1: 'I am the first p tag',
  p2: 'I am the second p tag'
}

var entryHTML = $('#partial').html();

var entryTemplate = Handlebars.compile(entryHTML);

var entryOutput = entryTemplate(data);

$('#hb-output').append(entryOutput);
