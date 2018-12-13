import { Injectable } from '@angular/core';
  import { Website } from '../models/website.model.client';
  import {Http, Response} from "@angular/http" ;
  import { map } from "rxjs/operators"; 
  import { environment} from "../../environments/environment";
  // injecting service into module
  
  @Injectable()
  export class WebsiteService {
  constructor (private http: Http){}
  Uurl = environment.Uurl;
  
    createWebsite (website: Website) {
           // Send post request to the server
     const url = this.Uurl + "/api/website";
     return  this.http.post(url,website).pipe(map(
       (res: Response) =>{
         return res.json();
       })
     );
    }
    findWebsitesByUser (userId: string){
      const url = this.Uurl + `/api/user/${userId}/website`;
      return this.http.get(url).pipe(map
        ((res:Response) => {
          return res.json();
        })
      );
    }
    findWebsiteById(websiteId: string){
      const url = this.Uurl + "/api/website/" + websiteId;
      return this.http.get(url).pipe(
          map((res: Response) => {
          return res.json();
      })
    );
  }
    updateWebsite (website: Website) {
      const uUrl = this.Uurl+ "/api/website";
      return this.http.put(uUrl, website).pipe(map
        ((res:Response) => {
          return res.json();
        })
      );
    } 
    deleteWebsite (websiteId: string){
      const uUrl = this.Uurl +"/api/website/" + websiteId;
      return this.http.delete(uUrl,).pipe(map
        ((res:Response) => {
          return res.json();
        })
      );
      }
    }