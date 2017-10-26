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
import { AuthenticationComponent } from "./auth/authentication.component";
import { AppUserDetailAdminComponent } from "./admin/AppUserDetailAdmin.component";
import { AppUserRequestAdminComponent } from "./admin/AppUserRequestAdmin.component";
import { AppUserEditAdminComponent } from "./admin/AppUserEditAdmin.component";
import { VisitDetailAdminComponent } from "./admin/visitsDetailAdmin.component"
import { VisitAdminComponent } from "./admin/visitsAdmin.component"
import { AppUserCreateAdminComponent } from "./admin/appUserCreateAdmin.Component";

const routes: Routes = [
    { path: "login", component: AuthenticationComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: AdminComponent,
        canActivateChild: [AuthenticationGuard],
        children: [
            { path: "overview", component: OverviewComponent },
            { path: "patientdetail/:id", component: PatientDetailAdminComponent },
            { path: "patientslist", component: PatientAdminComponent },
            { path: "visitdetail/:id", component: VisitDetailAdminComponent },
            { path: "visitslist", component: VisitAdminComponent },
            { path: "userdetails/:id", component: AppUserDetailAdminComponent },
            { path: "useredit/:id", component: AppUserEditAdminComponent },
            { path: "userslist", component: AppUserAdminComponent },
            { path: "usersrequests", component: AppUserRequestAdminComponent },
            { path: "usercreate", component: AppUserCreateAdminComponent },
            { path: "", component: OverviewComponent }]

    },
    {
        path: "", component: PatientTableComponent,
        canActivateChild: [AuthenticationGuard],
        children: [
            { path: "", component: PatientTableComponent },
            { path: "table", component: PatientTableComponent },
            { path: "patientedit/:id", component: PatientEditComponent },
            { path: "visittable/:id", component: VisitTableComponent },
            { path: "visittable", component: VisitTableComponent },
            { path: "detail/:id", component: PatientDetailComponent },
            { path: "visitdetail/:id", component: VisitDetailComponent },
            { path: "detail", component: PatientDetailComponent },
            { path: "visitdetail", component: VisitDetailComponent },
            { path: "patientcreate", component: PatientCreateComponent },
            { path: "accountcreate", component: AppUserCreateComponent }]
    }
    ]

export const RoutingConfig = RouterModule.forRoot(routes);