var http = require('http');
http.createServer(function (req, res) {
    console.log('Got request for ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Wow - can really publish chnage in VS Code to Azure Web site!</h1><br>Also saving old stuff');
}).listen(process.env.PORT);