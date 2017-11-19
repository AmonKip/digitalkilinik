import { Routes, RouterModule } from "@angular/router";
import { PatientTableComponent } from "./structure/patientTable.component";
import { PatientDetailComponent } from "./structure/patientDetail.component";
import { VisitDetailComponent } from "./structure/visitDetail.component";
import { VisitTableComponent } from "./structure/visitTable.component";
import { EmployeeDetailComponent } from "./structure/employeeDetail.component";
import { EmployeeTableComponent } from "./structure/employeeTable.component";
import { PatientCreateComponent } from "./structure/patientCreate.component";
import { PatientEditComponent } from "./structure/patientEdit.component";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { AppUserCreateComponent } from "./structure/appUserCreate.Component";
import { PatientAdminComponent } from "./admin/patientAdmin.component";
import { AppUserAdminComponent } from "./admin/appUserAdmin.component";
import { PatientDetailAdminComponent } from "./admin/patientDetailAdmin.component";
import { AuthenticationGuard } from "./auth/authentication.guard";
import { AdminAuthGuard } from "./auth/adminauthentication.guard";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AppUserDetailAdminComponent } from "./admin/AppUserDetailAdmin.component";
import { AppUserRequestAdminComponent } from "./admin/AppUserRequestAdmin.component";
import { AppUserEditAdminComponent } from "./admin/AppUserEditAdmin.component";
import { VisitDetailAdminComponent } from "./admin/visitsDetailAdmin.component"
import { VisitAdminComponent } from "./admin/visitsAdmin.component"
import { AppUserCreateAdminComponent } from "./admin/appUserCreateAdmin.Component";
import { ForgotPasswordComponent } from "./auth/forgotpassword.component";
import { ResetPasswordComponent } from "./auth/resetpassword.component";
import { RolesTableComponent } from "./admin/rolestable.component";
import { RoleDetailComponent } from "./admin/roledetail.component";
import { RoleManagerComponent } from "./admin/usersrolemanager.component";
import { CreateRoleComponent } from "./admin/createrole.component";
import { PasswordResetConfirmComponent } from "./structure/passwordresetconfirmation.component";

//import { PatientResolver } from "./models/resolver.model";


const routes: Routes = [
    { path: "login", component: AuthenticationComponent },
    { path: "passwordresetconfirm", component: PasswordResetConfirmComponent },
    { path: "forgotpassword", component: ForgotPasswordComponent },
    { path: "resetpassword", component: ResetPasswordComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: AdminComponent,
        canActivateChild: [AdminAuthGuard],
        children: [
            { path: "overview", component: OverviewComponent },
            { path: "patientdetail/:id", component: PatientDetailAdminComponent },
            { path: "roleslist", component: RolesTableComponent },
            { path: "createrole", component: CreateRoleComponent },
            { path: "roledetail/:id", component: RoleDetailComponent },
            { path: "rolemanager/:id", component: RoleManagerComponent },
            { path: "patientslist", component: PatientAdminComponent },
            { path: "visitdetail/:id", component: VisitDetailAdminComponent },
            { path: "visitslist", component: VisitAdminComponent },
            { path: "userdetails/:id", component: AppUserDetailAdminComponent },
            { path: "useredit/:id", component: AppUserEditAdminComponent },
            { path: "userslist", component: AppUserAdminComponent },
            { path: "usersrequests", component: AppUserRequestAdminComponent },
            { path: "usercreate", component: AppUserCreateAdminComponent },
            { path: "", component: OverviewComponent },
            {path: "**", redirectTo: "/admin/overview"}]
    },

    //{ path: "login", component: PatientTableComponent, canActivate: [AuthenticationGuard] },
    { path: "table", component: PatientTableComponent, canActivate: [AuthenticationGuard]},
    { path: "patientedit/:id", component: PatientEditComponent, canActivate: [AuthenticationGuard] },
    { path: "visittable/:id", component: VisitTableComponent, canActivate: [AuthenticationGuard] },
    { path: "visittable", component: VisitTableComponent, canActivate: [AuthenticationGuard] },
    { path: "detail/:id", component: PatientDetailComponent, canActivate: [AuthenticationGuard] },
    { path: "visitdetail/:id", component: VisitDetailComponent, canActivate: [AuthenticationGuard] },
    { path: "patientcreate", component: PatientCreateComponent, canActivate: [AuthenticationGuard] },
    { path: "accountcreate", component: AppUserCreateComponent },
    { path: "**", redirectTo: "/login" }
    ]

export const RoutingConfig = RouterModule.forRoot(routes);