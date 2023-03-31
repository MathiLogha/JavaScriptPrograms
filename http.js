const http = require("http"); 

// notice below, the first parameter to createServer is a callback function! 

const server = http.createServer(function(req, res, next) { 

  // sending some header info in my response 

  res.writeHead(200, { "Content-type": "text/html" }); 

  // send some data to the client 

  res.write("<h1>Hello World!</h1>"); 

  // end the response 

  return res.end(); 

}); 

// notice below, another callback function! 

server.listen(8080, function() { 

  console.log("Go to localhost:8080"); 

}); 