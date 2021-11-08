// Use the Express package.
const express = require("express");

// Creates an Express object from the Express package.
const app = express();

// Allows Express to use the HTTP module of Node.
const http = require("http").Server(app);

// Tells Express/HTTP what port to listen to.
http.listen(3000); // Common Development Ports: 8080, 3000 = Node.

console.log("Express server is running on port 3000.");