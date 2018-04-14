import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./overview.component";
import { AdminComponent } from "./admin.component";
//import { PatientAdminComponent } from "./patientAdmin.component";
import { UsersTableComponent } from "./userstable.component";
//import { PatientDetailAdminComponent } from "./patientDetailAdmin.component";
import { UserDetailComponent } from "./userdetail.component";
import { UserRequestComponent } from "./userrequest.component";
import { UserComponent } from "./user.component";
//import { VisitDetailAdminComponent } from "./visitsDetailAdmin.component"
//import { VisitAdminComponent } from "./visitsAdmin.component"
import { RolesTableComponent } from "./rolestable.component";
import { RoleDetailComponent } from "./roledetail.component";
import { RoleManagerComponent } from "./usersrolemanager.component";
import { CreateRoleComponent } from "./createrole.component";


@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule],
    declarations: [AdminComponent, OverviewComponent,
                  UsersTableComponent, UserDetailComponent,
                  UserRequestComponent,
                  UserComponent, RolesTableComponent,
                  RoleDetailComponent, RoleManagerComponent,
                  CreateRoleComponent]
})

export class AdminModule{}
