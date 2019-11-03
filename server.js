require("dotenv").config();
var express = require("express");
var db = require("./models");
const routes = require("./routes");

var app = express();
var PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Routes
// Add routes, both API and view
app.use(routes);


console.clear();
var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;

// Starting the server, syncing our models ------------------------------------/
db.sequelizeConnection.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
