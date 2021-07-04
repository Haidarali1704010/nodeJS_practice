"use strict";

var http = require("http");

var _require = require("https"),
    request = _require.request;

var port = 3001;
var server = http.createServer(function (request, response) {
    response.write("This is response for request !");
    response.end();
}).listen(port);
console.log("Server is running on port : " + port);