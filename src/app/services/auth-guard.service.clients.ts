
// Allows user to log in when true
import { CanActivate, Router } from "@angular/router";
import { UserService } from "./user.service.client";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private userService: UserService) {}

 canActivate() {
   return this.userService.loggedIn();
 }
}

 