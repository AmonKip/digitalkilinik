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
var patient_model_1 = require("../models/patient.model");
var PatientCreateComponent = (function () {
    function PatientCreateComponent(repo) {
        this.repo = repo;
        this.newPatient = new patient_model_1.Patient();
        this.formSubmitted = false;
        this.repo.getPatient;
    }
    Object.defineProperty(PatientCreateComponent.prototype, "patient", {
        //router: Router,
        //activeRoute: ActivatedRoute) {
        //let id = Number.parseInt(activeRoute.snapshot.params["id"]);
        //if (id) {
        //    this.repo.getPatient(id);
        //} else {
        //    router.navigateByUrl("/");
        //}
        //}
        get: function () {
            return this.repo.patient;
        },
        enumerable: true,
        configurable: true
    });
    PatientCreateComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.createPatient(this.newPatient);
            this.newPatient = new patient_model_1.Patient();
            form.reset();
            this.formSubmitted = false;
        }
    };
    PatientCreateComponent.prototype.getValidationMessages = function (state, thingName) {
        var thing = state.path || thingName;
        var messages = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push("Required");
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
    return PatientCreateComponent;
}());
PatientCreateComponent = __decorate([
    core_1.Component({
        selector: "patient-create",
        templateUrl: "patientCreate.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository])
], PatientCreateComponent);
exports.PatientCreateComponent = PatientCreateComponent;
//# sourceMappingURL=patientCreate.component.js.map