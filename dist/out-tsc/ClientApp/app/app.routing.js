"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var patientTable_component_1 = require("./structure/patientTable.component");
var patientDetail_component_1 = require("./structure/patientDetail.component");
var visitDetail_component_1 = require("./structure/visitDetail.component");
var visitTable_component_1 = require("./structure/visitTable.component");
var patientCreate_component_1 = require("./structure/patientCreate.component");
var patientEdit_component_1 = require("./structure/patientEdit.component");
var admin_component_1 = require("./admin/admin.component");
var overview_component_1 = require("./admin/overview.component");
var appUserCreate_Component_1 = require("./structure/appUserCreate.Component");
var patientAdmin_component_1 = require("./admin/patientAdmin.component");
var appUserAdmin_component_1 = require("./admin/appUserAdmin.component");
var patientDetailAdmin_component_1 = require("./admin/patientDetailAdmin.component");
var authentication_guard_1 = require("./auth/authentication.guard");
var authentication_component_1 = require("./auth/authentication.component");
var AppUserDetailAdmin_component_1 = require("./admin/AppUserDetailAdmin.component");
var AppUserRequestAdmin_component_1 = require("./admin/AppUserRequestAdmin.component");
var AppUserEditAdmin_component_1 = require("./admin/AppUserEditAdmin.component");
var visitsDetailAdmin_component_1 = require("./admin/visitsDetailAdmin.component");
var visitsAdmin_component_1 = require("./admin/visitsAdmin.component");
var appUserCreateAdmin_Component_1 = require("./admin/appUserCreateAdmin.Component");
var forgotpassword_component_1 = require("./auth/forgotpassword.component");
var resetpassword_component_1 = require("./auth/resetpassword.component");
var routes = [
    { path: "login", component: authentication_component_1.AuthenticationComponent },
    { path: "forgotpassword", component: forgotpassword_component_1.ForgotPasswordComponent },
    { path: "resetpassword", component: resetpassword_component_1.ResetPasswordComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: admin_component_1.AdminComponent,
        canActivateChild: [authentication_guard_1.AuthenticationGuard],
        children: [
            { path: "overview", component: overview_component_1.OverviewComponent },
            { path: "patientdetail/:id", component: patientDetailAdmin_component_1.PatientDetailAdminComponent },
            { path: "patientslist", component: patientAdmin_component_1.PatientAdminComponent },
            { path: "visitdetail/:id", component: visitsDetailAdmin_component_1.VisitDetailAdminComponent },
            { path: "visitslist", component: visitsAdmin_component_1.VisitAdminComponent },
            { path: "userdetails/:id", component: AppUserDetailAdmin_component_1.AppUserDetailAdminComponent },
            { path: "useredit/:id", component: AppUserEditAdmin_component_1.AppUserEditAdminComponent },
            { path: "userslist", component: appUserAdmin_component_1.AppUserAdminComponent },
            { path: "usersrequests", component: AppUserRequestAdmin_component_1.AppUserRequestAdminComponent },
            { path: "usercreate", component: appUserCreateAdmin_Component_1.AppUserCreateAdminComponent },
            { path: "", component: overview_component_1.OverviewComponent },
            { path: "**", redirectTo: "/admin/overview" }
        ]
    },
    { path: "table", component: patientTable_component_1.PatientTableComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "patientedit/:id", component: patientEdit_component_1.PatientEditComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "visittable/:id", component: visitTable_component_1.VisitTableComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "visittable", component: visitTable_component_1.VisitTableComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "detail/:id", component: patientDetail_component_1.PatientDetailComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "visitdetail/:id", component: visitDetail_component_1.VisitDetailComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "patientcreate", component: patientCreate_component_1.PatientCreateComponent, canActivate: [authentication_guard_1.AuthenticationGuard] },
    { path: "accountcreate", component: appUserCreate_Component_1.AppUserCreateComponent },
    { path: "**", redirectTo: "/table" }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map