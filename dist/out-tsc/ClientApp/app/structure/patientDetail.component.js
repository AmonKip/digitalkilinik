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
var PatientDetailComponent = (function () {
    function PatientDetailComponent(repo, router, activeRoute) {
        var _this = this;
        this.repo = repo;
        this.patient = {};
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (this.id) {
            this.patient = this.repo.patients.filter(function (p) { return p.patientID == _this.id; })[0];
        }
        else {
            router.navigateByUrl("/");
        }
    }
    PatientDetailComponent.prototype.ngOnInit = function () {
        //this.repo.getVisits().subscribe(visits => this.repo.visits == visits);
    };
    Object.defineProperty(PatientDetailComponent.prototype, "totalVisits", {
        get: function () {
            if (this.visits != null) {
                return this.visits.length;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientDetailComponent.prototype, "visits", {
        get: function () {
            var _this = this;
            return this.repo.visits.filter(function (p) { return p.patientID == _this.id; });
        },
        enumerable: true,
        configurable: true
    });
    return PatientDetailComponent;
}());
PatientDetailComponent = __decorate([
    core_1.Component({
        selector: "patient-detail",
        templateUrl: "patientDetail.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router,
        router_1.ActivatedRoute])
], PatientDetailComponent);
exports.PatientDetailComponent = PatientDetailComponent;
//# sourceMappingURL=patientDetail.component.js.map