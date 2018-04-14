"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var repository_1 = require("../models/repository");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../auth/authentication.service");
var CheckInPatientComponent = (function () {
    function CheckInPatientComponent(repo, router, authService) {
        this.repo = repo;
        this.router = router;
        this.authService = authService;
        this.repo.getPatients();
    }
    Object.defineProperty(CheckInPatientComponent.prototype, "patients", {
        get: function () {
            // this.spinnerService.hide();
            return this.repo.checkedInPatients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckInPatientComponent.prototype, "patientsCount", {
        get: function () {
            return this.repo.checkedInPatients.length;
        },
        enumerable: true,
        configurable: true
    });
    CheckInPatientComponent.prototype.selectPatient = function (id) {
        this.repo.getPatient(id);
        this.router.navigateByUrl("/detail");
    };
    CheckInPatientComponent.prototype.criteriaChange = function (value) {
        if (value != '[object Event]')
            this.listFilter = value;
    };
    return CheckInPatientComponent;
}());
CheckInPatientComponent = __decorate([
    core_1.Component({
        selector: "checkedIn-table",
        templateUrl: "checkinpatients.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router, authentication_service_1.AuthenticationService])
], CheckInPatientComponent);
exports.CheckInPatientComponent = CheckInPatientComponent;
//# sourceMappingURL=checkinpatients.components.js.map