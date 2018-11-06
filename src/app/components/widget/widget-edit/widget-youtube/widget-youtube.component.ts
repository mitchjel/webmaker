import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from 'src/app/services/widget.service.client';
import { Widget } from 'src/app/models/widget.model.client';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {


  uid: string;
  wid:string;
  pid: string;
  wgid: string;
  widget: Widget;
    constructor(private activatedRoute: ActivatedRoute, private router:Router, private widgetService: WidgetService) { }
  
    ngOnInit() { 
      this.activatedRoute.params.subscribe(params =>{
        this.uid = params["uid"];
        this.uid = params["wid"];
        this.uid = params["pid"];
        this.uid = params["wgid"];
        this.widget = this.widgetService.findWidgetById(this.wgid);
    });
    }
    update () {
      this.widgetService.updateWidget(this.widget);
      this.widgetService.deleteWidget(this.wgid);
      this.router.navigate([
        "user",
       this.uid,
      "website",
      this.pid,
       "page",
        this.pid, 
       "widget"]);
    }
    delete () {
      this.widgetService.deleteWidget(this.wgid);
      this.router.navigate([
        "user",
       this.uid,
      "website",
      this.pid,
       "page",
        this.pid, 
       "widget"]);
    }
  
  }
  
