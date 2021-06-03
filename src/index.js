var http = require("http");
var url = require("url");

const httpServer = http.createServer(handleServer);
var data = {
    phone : '18602100000',
    email : 'guestcaredominos@jublfood.com'
}


function handleServer(req, res) {
    if(req.url == "/welcome"){
        res.writeHead(200,{"Content-type":"text/plain"},"Welcome to Dominos!");
        res.end();
    }else if(req.url == "/contact"){
        res.writeHead(200,{"Content-type":"application/json"},data);
        res.end();
    }else{
        res.writeHead(404);
    }
}
httpServer.listen(8001,() =>{

});
module.exports = httpServer;