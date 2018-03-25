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
var VisitDetailComponent = (function () {
    function VisitDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getVisit(id);
            this.repo.getPatientByVisitId(id);
            this.repo.getVitalSigns(id);
            this.repo.getAssessment(id);
            this.repo.getDoctorOrders(id);
            this.repo.getNurseByVisitId(id);
            this.repo.getDoctorByVisitId(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(VisitDetailComponent.prototype, "visit", {
        get: function () {
            return this.repo.visit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "patient", {
        get: function () {
            return this.repo.patient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "vitalSigns", {
        get: function () {
            return this.repo.vitalSigns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "assessment", {
        get: function () {
            return this.repo.assessment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "orders", {
        get: function () {
            return this.repo.doctorOrders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "nurse", {
        get: function () {
            return this.repo.nurse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "doctor", {
        get: function () {
            return this.repo.doctor;
        },
        enumerable: true,
        configurable: true
    });
    return VisitDetailComponent;
}());
VisitDetailComponent = __decorate([
    core_1.Component({
        selector: "visit-detail",
        templateUrl: "visitDetail.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router,
        router_1.ActivatedRoute])
], VisitDetailComponent);
exports.VisitDetailComponent = VisitDetailComponent;
//# sourceMappingURL=visitDetail.component.js.map