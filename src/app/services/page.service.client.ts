import { Injectable } from '@angular/core';
// injecting service into module

@Injectable()
export class PageService {
  constructor() {}
  pages = 
  [
    { _id: "321", 
    name: "Post 1",
     websiteId: "456",
      description: "Lorem"
     },
  
    { _id: "432",
     name: "Post 2",
      websiteId: "456",
       description: "Lorem"
     },
  
    { _id: "543", 
    name: "Post 3",
     websiteId: "456",
      description: "Lorem" 
    }
  ];

  createPage (page) {
      page._id = Math.random().toString;
      this.pages.push(page);
      return page;
  }
  findPageByWebsiteId (websiteId) {
    let Y = [];
    for (let x = 0; x < this.pages.length; x++){
        if ( this.pages[x].websiteId === websiteId) {
                Y.push(this.pages[x]);
        }
    }
            return Y;
     }
     findPageById (pageId) {
        for (let x = 0; x < this.pages.length; x++){
            if (pageId === this.pages[x]._id) {
                return this.pages[x];
            }
        }
     }

     updatePage (page) {
        const oldPage = this.findPageById(page._id);
        const index = this.pages.indexOf(oldPage);
            this.pages[index] = page;
          }
          deletePage (pageId) {
            const oldPage = this.findPageById(pageId);
            const index = this.pages.indexOf(oldPage);
            this.pages.splice(index,1);

          }
     }


    

  