"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var overview_component_1 = require("./overview.component");
var admin_component_1 = require("./admin.component");
//import { PatientAdminComponent } from "./patientAdmin.component";
var userstable_component_1 = require("./userstable.component");
//import { PatientDetailAdminComponent } from "./patientDetailAdmin.component";
var userdetail_component_1 = require("./userdetail.component");
var userrequest_component_1 = require("./userrequest.component");
var user_component_1 = require("./user.component");
//import { VisitDetailAdminComponent } from "./visitsDetailAdmin.component"
//import { VisitAdminComponent } from "./visitsAdmin.component"
var rolestable_component_1 = require("./rolestable.component");
var roledetail_component_1 = require("./roledetail.component");
var usersrolemanager_component_1 = require("./usersrolemanager.component");
var createrole_component_1 = require("./createrole.component");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule],
        declarations: [admin_component_1.AdminComponent, overview_component_1.OverviewComponent,
            userstable_component_1.UsersTableComponent, userdetail_component_1.UserDetailComponent,
            userrequest_component_1.UserRequestComponent,
            user_component_1.UserComponent, rolestable_component_1.RolesTableComponent,
            roledetail_component_1.RoleDetailComponent, usersrolemanager_component_1.RoleManagerComponent,
            createrole_component_1.CreateRoleComponent]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map