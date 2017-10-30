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
var patientAdmin_component_1 = require("./patientAdmin.component");
var appUserAdmin_component_1 = require("./appUserAdmin.component");
var patientDetailAdmin_component_1 = require("./patientDetailAdmin.component");
var AppUserDetailAdmin_component_1 = require("./AppUserDetailAdmin.component");
var AppUserRequestAdmin_component_1 = require("./AppUserRequestAdmin.component");
var AppUserEditAdmin_component_1 = require("./AppUserEditAdmin.component");
var visitsDetailAdmin_component_1 = require("./visitsDetailAdmin.component");
var visitsAdmin_component_1 = require("./visitsAdmin.component");
var appUserCreateAdmin_Component_1 = require("./appUserCreateAdmin.Component");
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule, forms_1.FormsModule],
        declarations: [admin_component_1.AdminComponent, overview_component_1.OverviewComponent, patientAdmin_component_1.PatientAdminComponent,
            appUserAdmin_component_1.AppUserAdminComponent, patientDetailAdmin_component_1.PatientDetailAdminComponent,
            AppUserDetailAdmin_component_1.AppUserDetailAdminComponent, AppUserRequestAdmin_component_1.AppUserRequestAdminComponent,
            AppUserEditAdmin_component_1.AppUserEditAdminComponent, visitsDetailAdmin_component_1.VisitDetailAdminComponent,
            visitsAdmin_component_1.VisitAdminComponent, appUserCreateAdmin_Component_1.AppUserCreateAdminComponent]
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map