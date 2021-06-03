var http = require("http");
var url = require("url");

const httpServer = http.createServer(handleServer);

var data = {
    phone : '18602100000',
    email : 'guestcaredominos@jublfood.com'
}

function handleServer(req, res) {
    if(req.url == "/welcome"){
        res.writeHead(200);
        res.end("Welcome to Dominos!");
    }else if(req.url == "/contact"){
        res.writeHead(200);
        res.end(data.toString());
    }else{
        res.writeHead(404);
    }
}
httpServer.listen(8001);
module.exports = httpServer;