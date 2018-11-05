import { Component, OnInit } from '@angular/core';
import {PageService} from "src/app/services/page.service.client";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute){ }
  wid: string;
  pages: any[];
  uid: string;

  ngOnInit() {

  this.activatedRoute.params.subscribe(params =>{
    this.wid= params['wid'];
    this.uid = params['uid'];
    this.pages = this.pageService.findPagesByWebsiteId(this.wid);
  });
  }
}