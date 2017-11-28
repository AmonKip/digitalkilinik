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
var visit_model_1 = require("../models/visit.model");
var vitalSigns_model_1 = require("../models/vitalSigns.model");
var doctorsOrder_model_1 = require("../models/doctorsOrder.model");
var assessment_model_1 = require("../models/assessment.model");
var router_1 = require("@angular/router");
var PatientVisitCreate = (function () {
    function PatientVisitCreate(repo, router, activeRoute) {
        this.repo = repo;
        this.router = router;
        this.newVisit = new visit_model_1.Visit();
        this.newVitalSigns = new vitalSigns_model_1.VitalSigns();
        this.newAssessment = new assessment_model_1.Assessment();
        this.newDoctorsOrder = new doctorsOrder_model_1.DoctorsOrder();
        this.formSubmitted = false;
        var patientId = Number.parseInt(activeRoute.snapshot.params["id"]);
        this.newVisit.patientID = patientId;
    }
    PatientVisitCreate.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            console.log(this.newVisit);
            this.repo.createVisit(this.newVisit);
            this.newVisit = new visit_model_1.Visit();
            form.reset();
            this.formSubmitted = false;
            this.router.navigateByUrl("/requestconfirm");
        }
    };
    PatientVisitCreate.prototype.getValidationMessages = function (state, thingName) {
        var thing = state.path || thingName;
        var messages = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push("The field is required");
                        break;
                    case "minlength":
                        messages.push("A " + thing + " must be at least " + state.errors['minlegth'].requiredLength + " characters");
                        break;
                    case "pattern":
                        messages.push("The " + thing + " contains illegal characters");
                        break;
                }
            }
        }
        return messages;
    };
    return PatientVisitCreate;
}());
PatientVisitCreate = __decorate([
    core_1.Component({
        selector: 'visit-create',
        templateUrl: './patientVisitCreate.component.html'
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router, router_1.ActivatedRoute])
], PatientVisitCreate);
exports.PatientVisitCreate = PatientVisitCreate;
//# sourceMappingURL=patientVisitCreate.component.js.map