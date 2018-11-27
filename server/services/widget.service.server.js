module.exports = function(app) {};
// creation of all widget services
app.post("/api/widget",createWidget);
app.get("/api/page/:pid/widget", findAllWidgetsForPage);
app.get("/api/widget/:wgid", findWidgetById );
app.put("/api/widget", updateWidget );
app.delete("/api/widget/:wgid",deleteWidget);