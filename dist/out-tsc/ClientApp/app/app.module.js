"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var model_module_1 = require("./models/model.module");
var patientTable_component_1 = require("./structure/patientTable.component");
var categoryFilter_component_1 = require("./structure/categoryFilter.component");
var patientDetail_component_1 = require("./structure/patientDetail.component");
var visitTable_component_1 = require("./structure/visitTable.component");
var visitDetail_component_1 = require("./structure/visitDetail.component");
var employeeTable_component_1 = require("./structure/employeeTable.component");
var employeeDetail_component_1 = require("./structure/employeeDetail.component");
var patientCreate_component_1 = require("./structure/patientCreate.component");
var patientEdit_component_1 = require("./structure/patientEdit.component");
var app_routing_1 = require("./app.routing");
var admin_module_1 = require("./admin/admin.module");
var appUserCreate_Component_1 = require("./structure/appUserCreate.Component");
var patient_pipe_1 = require("./filter/patient.pipe");
var search_component_1 = require("./shared/search.component");
var core_2 = require("@angular/core");
var errorHandler_service_1 = require("./services/errorHandler.service");
var auth_module_1 = require("./auth/auth.module");
var header_component_1 = require("./layout/header.component");
var footer_component_1 = require("./layout/footer.component");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
var resolver_model_1 = require("./models/resolver.model");
var passwordresetconfirmation_component_1 = require("./structure/passwordresetconfirmation.component");
var forgotpasswordconfirm_component_1 = require("./structure/forgotpasswordconfirm.component");
var requestconfirmation_component_1 = require("./structure/requestconfirmation.component");
var patientVisitCreate_component_1 = require("./structure/patientVisitCreate.component");
var eHandler = new errorHandler_service_1.ErrorHandlerService();
function handler() {
    return eHandler;
}
exports.handler = handler;
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [app_component_1.AppComponent, patientTable_component_1.PatientTableComponent,
            visitTable_component_1.VisitTableComponent, visitDetail_component_1.VisitDetailComponent,
            categoryFilter_component_1.CategoryFilterComponent, patientDetail_component_1.PatientDetailComponent,
            employeeTable_component_1.EmployeeTableComponent, employeeDetail_component_1.EmployeeDetailComponent,
            patientCreate_component_1.PatientCreateComponent, appUserCreate_Component_1.AppUserCreateComponent,
            patient_pipe_1.PatientFilterPipe, search_component_1.SearchComponent, patientEdit_component_1.PatientEditComponent,
            header_component_1.HeaderComponent, footer_component_1.FooterComponent, passwordresetconfirmation_component_1.PasswordResetConfirmComponent,
            forgotpasswordconfirm_component_1.ForgotPasswordConfirmComponent, requestconfirmation_component_1.RequestConfirmComponent, patientVisitCreate_component_1.PatientVisitCreate],
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule,
            http_1.HttpModule, model_module_1.ModelModule, app_routing_1.RoutingConfig, admin_module_1.AdminModule, auth_module_1.AuthModule, ng4_loading_spinner_1.Ng4LoadingSpinnerModule],
        providers: [{ provide: errorHandler_service_1.ErrorHandlerService, useFactory: handler },
            { provide: core_2.ErrorHandler, useFactory: handler }, resolver_model_1.PatientResolver],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map