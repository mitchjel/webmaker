import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';
import {Http, Response} from "@angular/http" ;
import { map } from "rxjs/operators"; 
import { environment} from "../../environments/environment";
// injecting service into module

@Injectable()
export class WidgetService {
    constructor (private http: Http){}
  Uurl = environment.Uurl;
  createWidget (widget: Widget) {}
  
  findWidgetsByPageId (pageId: string) { 
    const url = this.Uurl + `/api/website/${pageId}/page`;
    return this.http.get(url).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );
  }
  findWidgetById (widgetId: string) {
    const url = this.Uurl + "/api/widget/" + widgetId;
    return this.http.get(url).pipe(
        map((res: Response) => {
        return res.json();
    })
  );
  } 
  updateWidget (widget: Widget) {
    const uUrl = this.Uurl+ "/api/widget";
    return this.http.put(uUrl, widget).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );
  }
  deleteWidget (widgetId: string){
    const uUrl = this.Uurl +"/api/widget/" + widgetId;
    return this.http.delete(uUrl,).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );
    }
  } 


