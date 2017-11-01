import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router } from "@angular/router";

@Component({
    selector: "appUserAdmin-table",
    templateUrl: "appUserAdmin.component.html"
})
export class AppUserAdminComponent {
    request = false;
    returnUrl = "/admin/userslist";
    myusers: AppUser[];
    
    constructor(private repo: Repository, private router: Router) {}
    
    get users(): AppUser[] {
        return this.repo.appUsers;

    }
    toggle(userId: number, status){
       if(status){
           this.setToggle(userId, 0);
          }
       else{
          this.setToggle(userId, 1);
        }
       this.repo.toggleAccount(userId, false);
     }

     // toggles enabled value in users array
     setToggle(userId, status) {
       for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].userDetailsID === userId) {
          this.users[i].enabled = status;
          return;
        }
      }
    }

}