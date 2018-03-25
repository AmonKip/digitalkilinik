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
var forms_1 = require("@angular/forms");
var PatientVisitCreate = (function () {
    function PatientVisitCreate(repo, router, activeRoute, fb) {
        this.repo = repo;
        this.router = router;
        this.fb = fb;
        this.newVisit = new visit_model_1.Visit();
        this.newVitalSigns = new vitalSigns_model_1.VitalSigns();
        this.newAssessment = new assessment_model_1.Assessment();
        this.newDoctorsOrder = new doctorsOrder_model_1.DoctorsOrder();
        this.visitFormSubmitted = false;
        this.vitalSignsFormSubmitted = false;
        this.assessmentFormSubmitted = false;
        this.ordersFormSubmitted = false;
        //  state variables for displaying saved or create component
        this.isVisitSaved = false;
        this.isVitalSignsSaved = false;
        this.isAssessmentSaved = false;
        this.isAddOrdersChecked = false;
        this.isOrdersSaved = false;
        this.isHiddenOrder = true;
        this.formErrors = {
            orders: [
                { type: '', notes: '', patientId: this.patientId }
            ]
        };
        //-------------------------------------
        this.validationMessages = {
            orders: {
                type: {
                    required: 'Type is required.'
                },
                notes: {
                    required: 'Notes is required.'
                }
            }
        };
        var patientId = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (patientId) {
            this.newVisit.patientID = patientId;
            this.newVitalSigns.patientID = patientId;
            this.newAssessment.patientID = patientId;
            this.patient = this.repo.patients ? this.repo.patients.find(function (p) { return p.patientID == patientId; }) : null;
            this.patientId = patientId;
        }
        else {
            router.navigateByUrl("/table");
        }
    }
    PatientVisitCreate.prototype.ngOnInit = function () {
        this.buildForm();
    };
    /**
    * build the initial form
    */
    PatientVisitCreate.prototype.buildForm = function () {
        var _this = this;
        // build our form
        this.form = this.fb.group({
            orders: this.fb.array([
                this.createOrder()
            ])
        });
        // watch for changes and validate
        this.form.valueChanges.subscribe(function (data) { return _this.validateForm(); });
    };
    PatientVisitCreate.prototype.submitVisit = function (form) {
        var _this = this;
        this.visitFormSubmitted = true;
        if (form.valid) {
            this.repo.createVisit(this.newVisit)
                .subscribe(function (res) {
                _this.visit = res;
                _this.isVisitSaved = true;
            });
            this.newVisit = new visit_model_1.Visit();
            form.reset();
            this.visitFormSubmitted = false;
            // this.router.navigateByUrl("/visitcreate");
        }
    };
    PatientVisitCreate.prototype.submitVitalSigns = function (form) {
        var _this = this;
        this.vitalSignsFormSubmitted = true;
        if (form.valid) {
            this.repo.createVitalSigns(this.newVitalSigns)
                .subscribe(function (res) {
                _this.vitalSigns = res;
                _this.isVitalSignsSaved = true;
            });
            this.newVitalSigns = new vitalSigns_model_1.VitalSigns();
            form.reset();
            this.vitalSignsFormSubmitted = false;
            //this.router.navigateByUrl("/visitcreate/" + this.patientId);
        }
    };
    PatientVisitCreate.prototype.submitAssessment = function (form) {
        var _this = this;
        this.assessmentFormSubmitted = true;
        if (form.valid) {
            this.repo.createAssessment(this.newAssessment)
                .subscribe(function (res) {
                _this.assessment = res;
                _this.isAssessmentSaved = true;
            });
            this.newAssessment = new assessment_model_1.Assessment();
            form.reset();
            this.assessmentFormSubmitted = false;
            // this.router.navigateByUrl("/table");
        }
    };
    PatientVisitCreate.prototype.submitOrders = function (form) {
        var _this = this;
        this.ordersFormSubmitted = true;
        if (this.form.valid) {
            var orders = this.form.get('orders').value;
            var jsonData = JSON.stringify(orders);
            this.repo.createOrders(jsonData)
                .subscribe(function (res) {
                _this.doctorsOrder = res;
                _this.isOrdersSaved = true;
                _this.ordersFormSubmitted = false;
            });
            // this.router.navigateByUrl("/table");
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
    /**
     * validate the entire form
     */
    PatientVisitCreate.prototype.validateForm = function () {
        for (var field in this.formErrors) {
            // clear that input field errors
            this.formErrors[field] = '';
            // grab an input field by name
            var input = this.form.get(field);
            if (input.invalid && input.dirty) {
                // figure out the type of error
                // loop over the formErrors field names
                for (var error in input.errors) {
                    // assign that type of error message to a variable
                    this.formErrors[field] = this.validationMessages[field][error];
                }
            }
        }
        this.validateOrders();
    };
    //------------------------------------------------------------------
    /**
     * validate the addresses formarray
     */
    PatientVisitCreate.prototype.validateOrders = function () {
        // grab the addresses formarray
        var orders = this.form.get('orders');
        // clear the form errors
        this.formErrors.orders = [];
        // loop through however many formgroups are in the formarray
        var n = 1;
        while (n <= orders.length) {
            // add the clear errors back
            this.formErrors.orders.push({ type: '', notes: '', patientId: this.patientId });
            // grab the specific group (address)
            var order = orders.at(n - 1);
            // validate that specific group. loop through the groups controls
            for (var field in order.controls) {
                // get the formcontrol
                var input = order.get(field);
                // do the validation and save errors to formerrors if necessary 
                if (input.invalid && input.dirty) {
                    for (var error in input.errors) {
                        this.formErrors.orders[n - 1][field] = this.validationMessages.orders[field][error];
                    }
                }
            }
            n++;
        }
    };
    PatientVisitCreate.prototype.createOrder = function () {
        return this.fb.group({
            type: ['', forms_1.Validators.required],
            notes: ['', forms_1.Validators.required],
            patientId: [this.patientId]
        });
    };
    PatientVisitCreate.prototype.addAddOrder = function () {
        var orders = this.form.get('orders');
        orders.push(this.createOrder());
        //this.isHiddenOrder = true;
    };
    PatientVisitCreate.prototype.removeOrder = function (i) {
        var orders = this.form.get('orders');
        orders.removeAt(i);
    };
    //processForm() {
    //  console.log('processing', this.form.value);
    //}
    PatientVisitCreate.prototype.checkBoxSubmit = function (event) {
        this.isAddOrdersChecked = !this.isAddOrdersChecked;
    };
    PatientVisitCreate.prototype.isOrdersAvailable = function () {
        var orders = this.form.get('orders');
        var count = orders.length;
        if (count > 0)
            return true;
        return false;
    };
    return PatientVisitCreate;
}());
PatientVisitCreate = __decorate([
    core_1.Component({
        selector: 'visit-create',
        templateUrl: './patientVisitCreate.component.html'
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder])
], PatientVisitCreate);
exports.PatientVisitCreate = PatientVisitCreate;
//# sourceMappingURL=patientVisitCreate.component.js.map