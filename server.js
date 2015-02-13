/**
 * Main application file. This is the entrance point of the server.
 */
'use strict'

var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);

// Server settings : no restriction for all files.
app.use(express.static(path.resolve(__dirname)));

// Start server
server.listen(9000, function() {
	var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
