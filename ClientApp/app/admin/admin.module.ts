import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { OverviewComponent } from "./overview.component";
import { AdminComponent } from "./admin.component";
import { PatientAdminComponent } from "./patientAdmin.component";
import { AppUserAdminComponent } from "./appUserAdmin.component";
import { PatientDetailAdminComponent } from "./patientDetailAdmin.component";
import { AppUserDetailAdminComponent } from "./AppUserDetailAdmin.component";
import { AppUserRequestAdminComponent } from "./AppUserRequestAdmin.component";
import { AppUserEditAdminComponent } from "./AppUserEditAdmin.component";
import { VisitDetailAdminComponent } from "./visitsDetailAdmin.component"
import { VisitAdminComponent } from "./visitsAdmin.component"
import { AppUserCreateAdminComponent } from "./appUserCreateAdmin.Component";
import { RolesTableComponent } from "./rolestable.component";
import { RoleDetailComponent } from "./roledetail.component";
import { RoleManagerComponent } from "./usersrolemanager.component";
import { CreateRoleComponent } from "./createrole.component";


@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule],
    declarations: [AdminComponent, OverviewComponent, PatientAdminComponent,
        AppUserAdminComponent, PatientDetailAdminComponent,
        AppUserDetailAdminComponent, AppUserRequestAdminComponent,
        AppUserEditAdminComponent, VisitDetailAdminComponent,
        VisitAdminComponent, AppUserCreateAdminComponent,
        RolesTableComponent, RoleDetailComponent, RoleManagerComponent,
        CreateRoleComponent]
})

export class AdminModule{}