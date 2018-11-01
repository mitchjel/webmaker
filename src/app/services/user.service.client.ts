import { Injectable } from '@angular/core';


// injecting service into module

@Injectable()


export class UserService {


  constructor() { }


users = [
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


  createUser(user: any) {
    user._id = Math.random().toString;;
    this.users.push(user);
    return user;
  }
  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {
            return this.users[x]; 
        }
    }
  }
     // finding user by username
  findUserByUsername(username: string) { 
    for ( let j =0; j < this.users.length; j++){
        if ( this.users[j].username === username){
               return this.users[j];
        }
    }

}
  findUserByCredentials(username: string, password: string) { 
    for ( let j =0; j < this.users.length; j++){
        if ( this.users[j].username === username && this.users[j].password === password){
               return this.users[j];
        }
    }
  }
  updateUser(userId, user) { 
      const oldUser = this.findUserById(user._id);
      const index = this.users.indexOf(oldUser);
      this.users[index] = user;
   }
 
}

