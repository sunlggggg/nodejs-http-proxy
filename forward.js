var http = require('http');
var url = require('url');
var util = require('util');
var qs = require('querystring'); 

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("forword success");
}).listen(3000);
