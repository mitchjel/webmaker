import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import {Http, Response} from "@angular/http" ;
import { map } from "rxjs/operators"; 
import { environment} from "../../environments/environment";
// injecting service into module

@Injectable()
export class UserService {
  constructor( private http: Http) { }
  Uurl = environment.Uurl;

 users: User [] = [
        {_id: "123", 
        username: "alice",
         password: "alice", 
         firstName: "Alice", 
         lastName: "Wonder",
          email: "alice@gmail.com"
        },
        {_id: "234",
         username: "bob",
          password: "bob", 
          firstName: "Bob",
           lastName: "Marley",
            email: "bob@whatever.com"
        },
        {_id: "345", 
        username: "charly",
         password: "charly",
        firstName: "Charly", 
        lastName: "Garcia",
         email: "charly@hotmail.com"
        },
        {_id: "456", 
        username: "shiyu", 
        password: "shiyu", 
        firstName: "Shiyu", 
        lastName: "Wang",
        email: "swang@ulem.org"
        }
        ];
 
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