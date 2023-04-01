var url = require('url');
var adr = 'http://www.example.com/index.html';
var q = url.parse(adr, true);
console.log(q);
