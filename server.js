const express = require('express'); 
const app = express();
// bodyparser allow us to read user request
const bodyParser = require('body-parser');
// libraries that allow us to crete http server and services
const http = require('http');
const path = require('path');
// Initialize or turn on bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Point static path to dist --for building purposes
app.use(express.static(path.join(__dirname, 'dist')));
// CORS-- Meaning Server side only allows User reqquest(s) from the same domain
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });
  // Run Our Server side on local port 3100 or Heroku given port
  const port = process.env.PORT || '3100';
  app.set('port', port);
  // Create HTTP server and parsing the app express
const server = http.createServer(app);

// For Build: Catch all other routes and return the index file -- BUILDING
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// server.listen(port);
server.listen( port , function()
 {
   console.log('Running on ' + app.get('port'));
  });
  
