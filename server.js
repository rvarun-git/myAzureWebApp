// Restify version - just does not work from Azure
    
var restify = require('restify');

var server = restify.createServer();
server.get("/", function(req, res) {
   res.send("Wowie: Server started");
});
server.listen(process.env.PORT || 80, function(){
    console.log("%s listening on %s", server.name, server.url); 
});

// HTTP - version

// var http = require('http');
// http.createServer(function (req, res) {
//     console.log('Got request for ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('<h1>Wow - can really publish change in VS Code to Azure Web site!</h1><br>Also saving old stuff');
// }).listen(process.env.PORT); 