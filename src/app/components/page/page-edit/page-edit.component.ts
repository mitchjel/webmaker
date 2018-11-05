import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service.client';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
uid: string;
wid: string;
pid : string;
page;
  constructor(private activatedRoute: ActivatedRoute, private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe (
      params =>{
        this.wid = params["wid"];
        this.uid = params["uid"];
        this.pid = params["pid"];
          this.page = this.pageService.findPageById(this.pid);
      });
  }
  update (){
    this.pageService.updatePage(this.page);
    this.router.navigate(["user", this.uid,"website", this.uid,"page"]);
  }
  delete () {
    this.pageService.deletePage(this.pid);
    this.router.navigate(["user", this.uid,"website", this.uid,"page"]);
  }
}
