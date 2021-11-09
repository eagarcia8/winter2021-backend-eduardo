// Use the Express package.
const express = require("express");

// Creates an Express object from the Express package.
const app = express();

// Allows Express to use the HTTP module of Node.
const http = require("http").Server(app);

const port = 80;

// Tells Express/HTTP what port to listen to.
http.listen(port); // Common Development Ports: 8080, 3000 = Node.

console.log("Express server is running on port " + port + ".");

// Express Routes. Allows us to "redirect" a URL filepath to a specific folder.
app.use("/", express.static("public_html/"));