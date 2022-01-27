const ahh = require('http');
const reallll = require('fs');

ahh.createServer(function(req, res){
    reallll.readFile('whatever.html', function(err, data){
        res.writeHead (200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);