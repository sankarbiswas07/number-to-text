let http = require('http');


http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    // phantomJS
    
     res.end("hello")


     var options = {
        host: 'https://www.omniglot.com',
        port: 80,
        path: '/language/numbers/kannada.htm'
      };
      
      http.get(options, function(res) {
        console.log("Got response: " + res.statusCode);
      }).on('error', function(e) {
        console.log("Got error: " + e.message);
      });

}).listen(1338, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1338/');

