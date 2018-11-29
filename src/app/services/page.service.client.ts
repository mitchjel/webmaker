import { Injectable } from '@angular/core';
import { Page } from '../models/page.model.client';
import { Website } from '../models/website.model.client';
import {Http, Response} from "@angular/http" ;
import { map } from "rxjs/operators"; 
import { environment} from "../../environments/environment";
// injecting service into module


@Injectable()
export class PageService {
    constructor (private http: Http){}
    Uurl = environment.Uurl;
  createPage (page) {
           // Send post request to the server
   const url = this.Uurl + "/api/page";
   return  this.http.post(url, page).pipe(map(
     (res: Response) =>{
       return res.json();
     })
   );
  }
  findPagesByWebsiteId (websiteId: string ) {
    const url = this.Uurl + `/api/website/${websiteId}/page`;
    return this.http.get(url).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );
   }
     findPageById (pageId: string) {
        const url = this.Uurl + "/api/page/" + pageId;
        return this.http.get(url).pipe(
            map((res: Response) => {
            return res.json();
        })
      );
     }

     updatePage (page: Page) {
        const url = this.Uurl+ "/api/page";
        return this.http.put(url, page).pipe(map
          ((res:Response) => {
            return res.json();
          })
        );
      }
          deletePage (pageId: string) {
            const url = this.Uurl +"/api/page/" + pageId;
            return this.http.delete(url,).pipe(map
              ((res:Response) => {
                return res.json();
              })
            );
            }
          }
     


    