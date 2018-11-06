import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';
// injecting service into module

@Injectable()
export class WidgetService {
  constructor() {}
  widgets: Widget [] = [

    { _id: "123",
     widgetType: "HEADING",
      pageId: "321",
       size: 2,
        text: "GIZMODO"},
    { _id: "234",
     widgetType: "HEADING",
      pageId: "321",
       size: 4,
        text: "Lorem ipsum"
    },
  
    { _id: "345",
     widgetType: "IMAGE",
      pageId: "321",
       width: "100%",
        url: "http://lorempixel.com/400/200/"
    },
  
     { _id: "567",
      widgetType: "HEADING",
       pageId: "321",
        size: 4,
         text: "Lorem ipsum"
        },
  
    { _id: "678",
     widgetType: "YOUTUBE",
      pageId: "321",
       width: "100%",
        url: "https://youtu.be/AM2Ivdi9c4E"
     }
  ];
  createWidget (widget: Widget) {
      widget._id = Math.random().toString();
      this.widgets.push(widget);
      return widget;
  }
  findWidgetsByPageId (pageId: string) {
      let result = [];
      for (let x = 0; x < this.widgets.length; x++){
            if (pageId === this.widgets[x].pageId) {
                result.push(this.widgets[x]);
            }
      }
      return result;
  }
  findWidgetById (widgetId: string) {
    for (let x = 0; x < this.widgets.length; x++) {
        if (widgetId === this.widgets[x]._id) {
            return this.widgets[x];
        }
    }      
  }
  updateWidget (widget: Widget) {
      const oldWidget = this.findWidgetById(widget._id);
      const index = this.widgets.indexOf(oldWidget);
          this.widgets[index] = widget;
  }
  deleteWidget (widgetId: string) {
    const oldWidget = this.findWidgetById(widgetId);
    const index = this.widgets.indexOf(oldWidget);
    this.widgets.splice(index,1);
  }
}

