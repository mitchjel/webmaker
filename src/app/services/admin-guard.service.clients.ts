import { CanActivate, Router } from "@angular/router";
import { UserService } from "./user.service.client";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminGuard implements CanActivate {
 constructor(private userService: UserService, private adminGuard: AdminGuard) {}

 canActivate() {
   return this.userService.adminLoggedIn();
 }
}