import { Component } from '@angular/core';
import { Repository } from "../models/repository";
import { AppRole } from "../models/AppRole.model";
import { AppUser } from "../models/AppUser.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: "rolemanager-table",
    templateUrl: "usersrolemanager.component.html"
})
export class RoleManagerComponent {
    userId: number;
    unassignedRoles = [];
    constructor(private repo: Repository, private router: Router, activeRoute: ActivatedRoute) {

        let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getRolesByUser(id);
            this.userId = id;
        } else {
            router.navigateByUrl("/");
        }
        
    }
       
    

    get roles(): AppRole[] {
        return this.repo.appRoles;
    }
    get userRoles(): any {
        var x = this.repo.userRoles;
    
        return x;
    }
    get user(): AppUser {
        return this.repo.appUsers? this.repo.appUsers.find(u => u.userDetailsID == this.userId): [];
    }

    // toggle on/off button
    isAssigned(rolename: string): boolean
    {
        if (this.userRoles.indexOf(rolename) != - 1)
        {
            return true;
        }
        return false;
    }
    addToRole(id: number, rolename: string) {
        this.repo.addUserToRole(id, rolename);
        this.userRoles.push(rolename);
    }
    removeFromRole(id: number, rolename: string) {
        this.repo.removeUserFromRole(id, rolename);
        var index = this.userRoles.indexOf(rolename);
        if (index > -1) {
            this.userRoles.splice(index, 1);
        }
        
    }
 
}