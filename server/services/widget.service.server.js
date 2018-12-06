module.exports = function(app) {
    var widgetModel = require ("../models/widget/widget.model.server");
// creation of all widget services
app.post("/api/widget",createWidget);
app.get("/api/page/:pid/widget", findAllWidgetsForPage);
app.get("/api/widget/:wgid", findWidgetById );
app.put("/api/widget", updateWidget );
app.delete("/api/widget/:wgid",deleteWidget);

  async function createWidget(req, res){
        // getting this item from the json body
    let  widget = req.body;
    const data = await widgetModel.create(widget);
    res.json(data);
  }
  async function findAllWidgetsForPage(req, res) {
  
    const pid = req.params["pid"];
  const data = await widgetModel.findAllWidgetsForPage(pid);
res.json(data);
  }

  async function findWidgetById(req, res){
    const wgid =req.params["wgid"];
    const data = await widgetModel.findWidgetById(wgid);
    res.json(data);
  }

async function updateWidget(req, res){
    const widget = req.body;
    const wgid = widget._id;
    const data = await widgetModel.updateWidget(wgid, widget);
    res.json(data);
}
async function deleteWidget (req, res){
    const wgid = req.params["wgid"];
    const data = await widgetModel.deleteWidget(wgid);
    res.json(data);
    
}
};