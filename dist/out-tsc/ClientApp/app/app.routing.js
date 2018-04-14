"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var patientTable_component_1 = require("./structure/patientTable.component");
var patientDetail_component_1 = require("./structure/patientDetail.component");
var visitDetail_component_1 = require("./structure/visitDetail.component");
var visitTable_component_1 = require("./structure/visitTable.component");
//import { PatientCreateComponent } from "./structure/patientCreate.component";
var patient_component_1 = require("./structure/patient.component");
var admin_component_1 = require("./admin/admin.component");
var overview_component_1 = require("./admin/overview.component");
var appUserCreate_Component_1 = require("./structure/appUserCreate.Component");
var userstable_component_1 = require("./admin/userstable.component");
var authentication_guard_1 = require("./auth/authentication.guard");
var authentication_component_1 = require("./auth/authentication.component");
var userdetail_component_1 = require("./admin/userdetail.component");
var userrequest_component_1 = require("./admin/userrequest.component");
var user_component_1 = require("./admin/user.component");
//import { AppUserCreateAdminComponent } from "./admin/appUserCreateAdmin.Component";
var forgotpassword_component_1 = require("./auth/forgotpassword.component");
var resetpassword_component_1 = require("./auth/resetpassword.component");
var rolestable_component_1 = require("./admin/rolestable.component");
var roledetail_component_1 = require("./admin/roledetail.component");
var usersrolemanager_component_1 = require("./admin/usersrolemanager.component");
var createrole_component_1 = require("./admin/createrole.component");
var passwordresetconfirmation_component_1 = require("./structure/passwordresetconfirmation.component");
var forgotpasswordconfirm_component_1 = require("./structure/forgotpasswordconfirm.component");
var requestconfirmation_component_1 = require("./structure/requestconfirmation.component");
var patientVisitCreate_component_1 = require("./structure/patientVisitCreate.component");
//import { PatientResolver } from "./models/resolver.model";
var routes = [
    { path: "login", component: authentication_component_1.AuthenticationComponent },
    { path: "passwordresetconfirm", component: passwordresetconfirmation_component_1.PasswordResetConfirmComponent },
    { path: "forgotpasswordconfirm", component: forgotpasswordconfirm_component_1.ForgotPasswordConfirmComponent },
    { path: "requestconfirm", component: requestconfirmation_component_1.RequestConfirmComponent },
    { path: "forgotpassword", component: forgotpassword_component_1.ForgotPasswordComponent },
    { path: "resetpassword", component: resetpassword_component_1.ResetPasswordComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: admin_component_1.AdminComponent,
        canActivateChild: [authentication_guard_1.AuthenticationGuard],
        data: {
            expectedRole: 'Admin'
        },
        children: [
            { path: "overview", component: overview_component_1.OverviewComponent },
            { path: "roleslist", component: rolestable_component_1.RolesTableComponent },
            { path: "createrole", component: createrole_component_1.CreateRoleComponent },
            { path: "roledetail/:id", component: roledetail_component_1.RoleDetailComponent },
            { path: "rolemanager/:id", component: usersrolemanager_component_1.RoleManagerComponent },
            { path: "userdetails/:id", component: userdetail_component_1.UserDetailComponent },
            { path: "user", component: user_component_1.UserComponent },
            { path: "user/:id", component: user_component_1.UserComponent },
            { path: "userslist", component: userstable_component_1.UsersTableComponent },
            { path: "usersrequests", component: userrequest_component_1.UserRequestComponent },
            { path: "", component: overview_component_1.OverviewComponent },
            { path: "**", redirectTo: "/admin/overview" }
        ]
    },
    //{ path: "login", component: PatientTableComponent, canActivate: [AuthenticationGuard] },
    { path: "", component: visitTable_component_1.VisitTableComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "table", component: patientTable_component_1.PatientTableComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "patient/:id", component: patient_component_1.PatientComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "patient", component: patient_component_1.PatientComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "visittable", component: visitTable_component_1.VisitTableComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "visitcreate/:id", component: patientVisitCreate_component_1.PatientVisitCreate, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "patientdetail/:id", component: patientDetail_component_1.PatientDetailComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "visitdetail/:id", component: visitDetail_component_1.VisitDetailComponent, canActivate: [authentication_guard_1.AuthenticationGuard], data: { expectedRole: 'Nurse' } },
    { path: "accountcreate", component: appUserCreate_Component_1.AppUserCreateComponent },
    { path: "**", redirectTo: "/login" }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map