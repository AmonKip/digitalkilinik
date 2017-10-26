"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var patientTable_component_1 = require("./structure/patientTable.component");
var patientDetail_component_1 = require("./structure/patientDetail.component");
var visitDetail_component_1 = require("./structure/visitDetail.component");
var visitTable_component_1 = require("./structure/visitTable.component");
var employeeDetail_component_1 = require("./structure/employeeDetail.component");
var employeeTable_component_1 = require("./structure/employeeTable.component");
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
var routes = [
    { path: "login", component: authentication_component_1.AuthenticationComponent },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: admin_component_1.AdminComponent,
        canActivateChild: [authentication_guard_1.AuthenticationGuard],
        children: [
            { path: "overview", component: overview_component_1.OverviewComponent },
            { path: "patientdetail/:id", component: patientDetailAdmin_component_1.PatientDetailAdminComponent },
            { path: "patientslist", component: patientAdmin_component_1.PatientAdminComponent },
            { path: "userdetails/:id", component: AppUserDetailAdmin_component_1.AppUserDetailAdminComponent },
            { path: "userslist", component: appUserAdmin_component_1.AppUserAdminComponent },
            { path: "", component: overview_component_1.OverviewComponent }
        ]
    },
    { path: "table", component: patientTable_component_1.PatientTableComponent },
    { path: "patientedit/:id", component: patientEdit_component_1.PatientEditComponent },
    { path: "visittable/:id", component: visitTable_component_1.VisitTableComponent },
    { path: "visittable", component: visitTable_component_1.VisitTableComponent },
    { path: "employeetable", component: employeeTable_component_1.EmployeeTableComponent },
    { path: "detail/:id", component: patientDetail_component_1.PatientDetailComponent },
    { path: "visitdetail/:id", component: visitDetail_component_1.VisitDetailComponent },
    { path: "employeedetail/:id", component: employeeDetail_component_1.EmployeeDetailComponent },
    { path: "detail", component: patientDetail_component_1.PatientDetailComponent },
    { path: "visitdetail", component: visitDetail_component_1.VisitDetailComponent },
    { path: "employeedetail", component: employeeDetail_component_1.EmployeeDetailComponent },
    { path: "patientcreate", component: patientCreate_component_1.PatientCreateComponent },
    { path: "accountcreate", component: appUserCreate_Component_1.AppUserCreateComponent },
    { path: "", component: patientTable_component_1.PatientTableComponent }
];
exports.RoutingConfig = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map