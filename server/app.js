module.exports = function(app) {

    // import some libraries server side services
 require("./services/user.service.server.js")(app);
 require ("./services/website.service.server")(app);
}
