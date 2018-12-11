import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {UserService } from "../../../services/user.service.client"; // import UserService from Services
import { User } from 'src/app/models/user.model.client';
import {SharedService} from "../../../services/shared.service.client";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private sharedService: SharedService, private userService: UserService, private router: Router ) { }
    uid : string;
    user:User = {
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        email:""
        };
    oldUsername: string;
    userError: boolean;
    successFlag: boolean;
    users: User[];

  ngOnInit() {
      this.user = this.sharedService.user;
      this.uid = this.user._id;
      this.oldUsername = this.user.username;
      }
      // implement an event handler bound to the logout 
      // button in the profile view and then send back user to login page
      logout() {
        this.userService.logout().subscribe((data: any) => {
          this.router.navigate(["login"]);
        });
      }
     
    update (){
            if(this.user.username === this.oldUsername) {

         this.userService.updateUser(this.user).subscribe
         (
 (user:User) => {
  this.userError = false;
  this.successFlag = true;
});
 }
 else {
  this.userService.findUserByUsername (this.user.username).subscribe(
  (data: any) =>{
    if (!data) {
    this.userService.updateUser (this.user).subscribe(
      (user: User) => {
        this.userError = false;
        this.successFlag = true; 
         });
        }
         else {
          this.userError = true;
          this.successFlag = false;
        } 
      });
     }
  }
}

    
    