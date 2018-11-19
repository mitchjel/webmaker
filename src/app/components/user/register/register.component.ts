import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service.client";
import { Router } from "@angular/router";
import { User } from 'src/app/models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    username : string;
    password : string;
    verifyPassword : string;
    pwdError : boolean;
    userError : boolean;

  constructor (private userService: UserService, private router : Router) { }

  ngOnInit() {}

 register() {
      if (this.password !== this.verifyPassword) {
              this.pwdError = true;
              this.userError = false;
      }   
      else {
        this.pwdError = false;
        this.userService.findUserByUsername(this.username).subscribe(
          (user: User) => {
              this.userError = true;
          },
          (userError: any) => { 
          const newUser= {
          username: this.username,
          password: this.password,
             firstName:"",
             lastName:"",
            email: ""
          };
          this.userService.createUser(newUser).subscribe
           (
                 (user: User) =>{
            this.router.navigate(["user", user._id]);
                 });
            }
        );
      }
    }
  }
