import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppUser } from "../models/appuser.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "user-detail",
    templateUrl: "AppUserDetailAdmin.component.html"
})
export class AppUserDetailAdminComponent {
    request ="";
    returnUrl = "";

    constructor(private repo: Repository,
        private router: Router,
        private activeRoute: ActivatedRoute) {
        
        this.activeRoute.queryParams.subscribe(params => {
                 this.returnUrl = params['returnUrl'];
               });
        
        this.activeRoute.queryParams.subscribe(params => {
                 this.request = params['request'];
               });  

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getUser(id);
        } else {
            this.router.navigateByUrl("/");
        }
    }

    get user(): AppUser {
        return this.repo.appUser;
    }
    approveRequest(id: number){
      this.repo.toggleAccount(id, true);
      this.router.navigateByUrl("/admin/overview");
    }
    rejectRequest(id: number){
      // code to add user to reject list of users
      //this.repo.toggleAccount(id);
      this.router.navigateByUrl("/admin/overview");
    }
}