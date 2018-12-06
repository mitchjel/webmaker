const mongoose = require ("mongoose");
// import the schema widget created
const WidgetSchema = require ("./widget.schema.server");
// create a model for the widget Schema
let WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

// CRUD Functions Declaration
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

// CRUD Functions Implementation

function createWidget (widget) {
    return WidgetModel.create(widget);
}

function findAllWidgetsForPage(pid) {
    return WidgetModel.find({pageId: pid});
}
function findWidgetById(wgid){
    return WidgetModel.findOne({_id: wgid});
} 
function updateWidget(wgid, widget){
    return WidgetModel.updateOne ({_id:  wgid}, widget);
}
    
 function deleteWidget (wgid){
     return WidgetModel.deleteOne({_id:  wgid});
 }

 module.exports = WidgetModel;




