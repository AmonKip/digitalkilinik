import { Routes, RouterModule } from "@angular/router";
import { PatientTableComponent } from "./structure/patientTable.component";
import { PatientDetailComponent } from "./structure/patientDetail.component";
import { VisitDetailComponent } from "./structure/visitDetail.component";
import { VisitTableComponent } from "./structure/visitTable.component";
import { EmployeeDetailComponent } from "./structure/employeeDetail.component";
import { EmployeeTableComponent } from "./structure/employeeTable.component";
//import { PatientCreateComponent } from "./structure/patientCreate.component";
import { PatientComponent } from "./structure/patient.component";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { AppUserCreateComponent } from "./structure/appUserCreate.Component";
import { PatientAdminComponent } from "./admin/patientAdmin.component";
import { UsersTableComponent } from "./admin/userstable.component";
import { PatientDetailAdminComponent } from "./admin/patientDetailAdmin.component";
import { AuthenticationGuard } from "./auth/authentication.guard";
import { AdminAuthGuard } from "./auth/adminauthentication.guard";
import { AuthenticationComponent } from "./auth/authentication.component";
import { UserDetailComponent } from "./admin/userdetail.component";
import { UserRequestComponent } from "./admin/userrequest.component";
import { UserComponent } from "./admin/user.component";
import { VisitDetailAdminComponent } from "./admin/visitsDetailAdmin.component"
import { VisitAdminComponent } from "./admin/visitsAdmin.component"
//import { AppUserCreateAdminComponent } from "./admin/appUserCreateAdmin.Component";
import { ForgotPasswordComponent } from "./auth/forgotpassword.component";
import { ResetPasswordComponent } from "./auth/resetpassword.component";
import { RolesTableComponent } from "./admin/rolestable.component";
import { RoleDetailComponent } from "./admin/roledetail.component";
import { RoleManagerComponent } from "./admin/usersrolemanager.component";
import { CreateRoleComponent } from "./admin/createrole.component";
import { PasswordResetConfirmComponent } from "./structure/passwordresetconfirmation.component";
import { ForgotPasswordConfirmComponent } from "./structure/forgotpasswordconfirm.component";
import { RequestConfirmComponent } from "./structure/requestconfirmation.component";
import { PatientVisitCreate } from "./structure/patientVisitCreate.component";

//import { PatientResolver } from "./models/resolver.model";


const routes: Routes = [
    { path: "login", component: AuthenticationComponent },
    { path: "passwordresetconfirm", component: PasswordResetConfirmComponent },
    { path: "forgotpasswordconfirm", component: ForgotPasswordConfirmComponent },
    { path: "requestconfirm", component: RequestConfirmComponent },
    { path: "forgotpassword", component: ForgotPasswordComponent },
    { path: "resetpassword", component: ResetPasswordComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: AdminComponent,
        canActivateChild: [AuthenticationGuard],
        data: {
            expectedRole: 'Admin'
        }, 
        children: [
            { path: "overview", component: OverviewComponent },
            { path: "roleslist", component: RolesTableComponent },
            { path: "createrole", component: CreateRoleComponent },
            { path: "roledetail/:id", component: RoleDetailComponent },
            { path: "rolemanager/:id", component: RoleManagerComponent },
            { path: "userdetails/:id", component: UserDetailComponent },
            { path: "user", component: UserComponent },
            { path: "user/:id", component: UserComponent },
            { path: "userslist", component: UsersTableComponent },
            { path: "usersrequests", component: UserRequestComponent },
            { path: "", component: OverviewComponent },
            {path: "**", redirectTo: "/admin/overview"}]
    },

    //{ path: "login", component: PatientTableComponent, canActivate: [AuthenticationGuard] },
    { path: "", component: VisitTableComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "table", component: PatientTableComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "patient/:id", component: PatientComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "patient", component: PatientComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    
    { path: "visittable", component: VisitTableComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "visitcreate/:id", component: PatientVisitCreate, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "patientdetail/:id", component: PatientDetailComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "visitdetail/:id", component: VisitDetailComponent, canActivate: [AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "accountcreate", component: AppUserCreateComponent },
    { path: "**", redirectTo: "/login" }
    ]

export const RoutingConfig = RouterModule.forRoot(routes);
