import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import {Http, Response, RequestOptions} from "@angular/http" ;
import { map } from "rxjs/operators"; 
import { environment} from "../../environments/environment";
import { SharedService } from "./shared.service.client";
import { Router } from '@angular/router';

// injecting service into module

@Injectable()
export class UserService {
  constructor( private http: Http, private sharedService: SharedService, private router: Router) { }
  Uurl = environment.Uurl;
  options = new RequestOptions();

  // Implementation Login function
  login(username: string, password: string) {
    // use this to authenticate
    this.options.withCredentials = true;
 
    const url = this. Uurl + "/api/login";
    const user = {
      username: username,
      password: password
    };
 // Enable Cross_Origin features
    return this.http.post(url, user, this.options).pipe(
      map((res: Response) => {
        return res.json();
      })
    );
  }
  // Log out Function Implementation
  logout() {
    this.options.withCredentials = true;
    const url = this.Uurl + "/api/logout";
    return this.http.post(url, "", this.options).pipe(
      map((res: Response) => {
        // Send user feedback log out
        this.sharedService.user = 0;
        return res;
      })
    );
  }
 // Funct Register 
 register(user: User) {
  // this communication will be secured
  this.options.withCredentials = true;
  const url = this.Uurl + "/api/register";
  return this.http.post(url, user, this.options).pipe(
    map((res: Response) => {
      return res.json();
    })
  );
}
  // LoggedIn Function implementation
  loggedIn() {
    this.options.withCredentials = true;
    return this.http
      .post(this. Uurl + "/api/loggedIn", "", this.options)
      .pipe(
        map((res: Response) => {
          const user = res.json();
          // Check if user alredy logged In
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            return true;
          } else {
            // Otherwise send user to login page to authenticate
            this.router.navigate(["/login"]);
            return false;
          }
        })
      );
  }
  // Admin Log in
  adminLoggedIn() {
    this.options.withCredentials = true;
    return this.http
      .post(this. Uurl + "/api/loggedIn", "", this.options)
      .pipe(
        map((res: Response) => {
          const user = res.json();
          // Check if loggedIn user is admin user
          if (user !== 0 && user.adminLoggedIn) {
            return true;
            
          } else {
            // Otherwise send user to login page to authenticate
            this.router.navigate(["/profile"]);
            return false;
          }
        })
      );
  }
 
 
  createUser(user: User) {
   // Send post request to the server
   const url = this.Uurl + "/api/user";
  return  this.http.post(url,user).pipe(map(
    (res: Response) =>{
      return res.json();
    })
  );
    }

  findUserById(userId: string) {
    const url = this.Uurl + "/api/user/" + userId;
    return this.http.get(url).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );
  }
     // finding user by username
  findUserByUsername(username: string) { 
    const url = this.Uurl + "/api/user?username=" + username;
    return this.http.get(url).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );
}
  findUserByCredentials(username: string, password: string) { 
    const url = this.Uurl + "/api/user?username=" + username + "&passsword=" + password;
    return this.http.get(url).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );

  }
  updateUser(user: User) { 
    const url = this.Uurl + "/api/user/";
    return this.http.put(url,user).pipe(map
      ((res:Response) => {
        return res.json();
      })
    );
    }
  }