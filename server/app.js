module.exports = function(app) {
  // linking mongoose database with server
    require ("./models/models.server");
    // import some libraries server side services
 require("./services/user.service.server.js")(app);
 require ("./services/website.service.server")(app);
 require ("./services/page.service.server")(app);
 require ("./services/widget.service.server")(app);

 
}
