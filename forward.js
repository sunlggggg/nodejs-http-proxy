var http = require('http');
var url = require('url');
var util = require('util');
var qs = require('querystring'); 


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("web site: " + params.name);
    res.write("\n");
    res.write("URL: " + params.url);
    res.end();
 
   
   
    var data = { 
        a: 123, 
        time: new Date().getTime()
    }; //这是需要提交的数据 
   
   
    var content = qs.stringify(data); 
   
    var options = { 
        hostname: '127.0.0.1', 
        port: 8888, 
        path: '/pay/pay_callback?' + content, 
        method: 'GET' 
    }; 
   
    var fwreq = http.request(options, function (res) { 
        console.log('STATUS: ' + res.statusCode); 
        console.log('HEADERS: ' + JSON.stringify(res.headers)); 
        res.setEncoding('utf8'); 
        res.on('data', function (chunk) { 
            console.log('BODY: ' + chunk); 
        }); 
    }); 
    
    fwreq.on('error', function (e) { 
        console.log('problem with request: ' + e.message); 
    }); 
    
    fwreq.end();
    
}).listen(3000);