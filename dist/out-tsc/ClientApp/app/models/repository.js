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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
//import 'rxjs/add/operator/delay';
var configClasses_repository_1 = require("./configClasses.repository");
var errorHandler_service_1 = require("../services/errorHandler.service");
require("rxjs/add/operator/catch");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
var patientsUrl = "api/patients";
var employeesUrl = "api/employees";
var visitsUrl = "api/visits";
var addRequestUrl = "api/addrequest";
var Repository = (function () {
    function Repository(http, spinnerService) {
        this.http = http;
        this.spinnerService = spinnerService;
        this.filterObject = new configClasses_repository_1.Filter();
        this.getPatients();
        this.getVisits();
        this.getCheckedInPatients();
    }
    Repository.prototype.getPatient = function (id) {
        var _this = this;
        return this.sendRequest(http_1.RequestMethod.Get, "/api/patients/" + id)
            .subscribe(function (response) { _this.patient = response; });
    };
    Repository.prototype.get_Patient = function () {
        return this.patient;
    };
    Repository.prototype.getEmployee = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/employees/" + id)
            .subscribe(function (response) { _this.employee = response; });
    };
    Repository.prototype.getPatients = function () {
        var _this = this;
        var url = patientsUrl;
        if (this.filter.category && this.filter.search) {
            url += "?category=" + this.filter.category + "&search=" + this.filter.search;
        }
        if (this.filter.category && !this.filter.search) {
            url += "?category=" + this.filter.category;
        }
        if (!this.filter.category && this.filter.search) {
            url += "?search=" + this.filter.search;
        }
        //this.spinnerService.show();
        this.sendRequest(http_1.RequestMethod.Get, url)
            .subscribe(function (response) { _this.patients = response; });
    };
    Repository.prototype.getPatientByVisitId = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/patientbyVisitId/" + id)
            .subscribe(function (response) { _this.patient = response; });
    };
    Repository.prototype.getAllPatients = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(_this.patients);
        });
    };
    Repository.prototype.getEmployees = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, employeesUrl)
            .subscribe(function (response) { _this.employees = response; });
    };
    // get all visits
    Repository.prototype.getVisits = function () {
        return this.sendRequest(http_1.RequestMethod.Get, visitsUrl);
        //.subscribe(response => { this.visits = response; });
    };
    // get single visit by visit id
    Repository.prototype.getVisit = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/visits/" + id)
            .subscribe(function (response) { _this.visit = response; });
    };
    // get vital signs by visit id
    Repository.prototype.getVitalSigns = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/vitalsignsbyVisitId/" + id)
            .subscribe(function (response) { _this.vitalSigns = response; });
    };
    // get doctor's assessment notes by visit id
    Repository.prototype.getAssessment = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/assessmentbyVisitId/" + id)
            .subscribe(function (response) { _this.assessment = response; });
    };
    // get doctor's orders by visit id
    Repository.prototype.getDoctorOrders = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/ordersbyVisitId/" + id)
            .subscribe(function (response) { _this.doctorOrders = response; });
    };
    // get single user by id
    Repository.prototype.getUser = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/users/" + id)
            .subscribe(function (response) { _this.appUser = response; });
    };
    // get app users
    Repository.prototype.getUsers = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/users")
            .subscribe(function (response) { _this.appUsers = response; });
    };
    Repository.prototype.getNurseByVisitId = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/nurse/" + id)
            .subscribe(function (response) { _this.nurse = response; });
    };
    Repository.prototype.getDoctorByVisitId = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/doctor/" + id)
            .subscribe(function (response) { _this.doctor = response; });
    };
    // get all roles
    Repository.prototype.getRoles = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/roles")
            .subscribe(function (response) { _this.appRoles = response; });
    };
    // get roles by user
    Repository.prototype.getRolesByUser = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/rolesbyuser/" + id)
            .subscribe(function (response) { _this.userRoles = response; });
    };
    // get account requests
    Repository.prototype.getAccountRequests = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/getrequests")
            .subscribe(function (response) { _this.appUserRequests = response; });
    };
    // creates patient
    Repository.prototype.createPatient = function (pat) {
        var _this = this;
        var data = {
            firstName: pat.firstName, lastName: pat.lastName, middleName: pat.middleName, dob: pat.dob,
            placeOfBirth: pat.placeOfBirth, sublocation: pat.sublocation, phone: pat.phone, email: pat.email,
            idNumber: pat.idNumber, gender: pat.gender
        };
        this.sendRequest(http_1.RequestMethod.Post, patientsUrl, data)
            .subscribe(function (response) {
            pat.patientID = response;
            _this.patients.push(pat);
        });
    };
    // create visit
    Repository.prototype.createVisit = function (visit) {
        var data = {
            complaint: visit.complaint, background: visit.background, patientID: visit.patientID
        };
        return this.sendRequest(http_1.RequestMethod.Post, "/api/addVisit", data);
        //.subscribe(response => {
        //visit.visitId = response;
        // this.visits = response;
        // })
    };
    // create vital signs
    Repository.prototype.createVitalSigns = function (signs) {
        var data = {
            temperature: signs.temperature, pulse: signs.pulse, respiration: signs.respiration,
            bloodPressure: signs.bloodPressure, oxygenSaturation: signs.oxygenSaturation,
            visitId: signs.visitId, userDetailsID: signs.userDetailsID, patientID: signs.patientID
        };
        return this.sendRequest(http_1.RequestMethod.Post, "/api/addVitalSigns", data);
        //.subscribe(response => {
        //visit.visitId = response;
        // this.vitalSigns = response;
        //})
    };
    // create assessment
    Repository.prototype.createAssessment = function (assessment) {
        var data = { notes: assessment.notes, patientID: assessment.patientID };
        return this.sendRequest(http_1.RequestMethod.Post, "/api/addAssessment", data);
        //  .subscribe(response => {
        //  this.assessment = response;
        // })
    };
    // create doctors orders
    Repository.prototype.createOrders = function (orders) {
        console.log(orders);
        return this.sendRequest(http_1.RequestMethod.Post, "api/addDoctorOrders", orders);
    };
    // creates appUser
    Repository.prototype.createUser = function (user) {
        var _this = this;
        var data = {
            title: user.title, firstName: user.firstName, lastName: user.lastName, idNumber: user.idNumber, username: user.username, phoneNumber: user.phoneNumber, biography: user.biography,
            imageUrl: user.imageUrl, gender: user.gender, email: user.email, reason: user.reason
        };
        this.sendRequest(http_1.RequestMethod.Post, addRequestUrl, data)
            .subscribe(function (response) {
            user.email = response;
            _this.patients.push(user);
        });
    };
    // create employee
    Repository.prototype.createEmployee = function (emp) {
        var _this = this;
        var data = {
            title: emp.title, firstName: emp.firstName, lastName: emp.lastName, idNumber: emp.idNumber, email: emp.email, username: emp.username, phone: emp.phone, biography: emp.biography,
            imageUrl: emp.imageUrl
        };
        this.sendRequest(http_1.RequestMethod.Post, employeesUrl, data)
            .subscribe(function (response) {
            emp.employeeID = response;
            _this.employees.push(emp);
        });
    };
    // update method
    Repository.prototype.replacePatient = function (pat) {
        var _this = this;
        var data = {
            firstName: pat.firstName, lastName: pat.lastName, middleName: pat.middleName, dob: pat.dob,
            placeOfBirth: pat.placeOfBirth, sublocation: pat.sublocation, phone: pat.phone, email: pat.email,
            idNumber: pat.idNumber, gender: pat.gender
        };
        this.sendRequest(http_1.RequestMethod.Put, "api/patients/" + pat.patientID, data)
            .subscribe(function (response) { return _this.getPatients(); });
    };
    // after update, the patients/employees array is repopulated using another request to server  ---very inefficient  process
    //todo: dynamically update only the changed patient to avoid round trip to the server
    Repository.prototype.replaceUser = function (user) {
        var _this = this;
        var data = {
            title: user.title, firstName: user.firstName, lastName: user.lastName, idNumber: user.idNumber, email: user.email,
            username: user.username, phoneNumber: user.phoneNumber, reason: user.reason, biography: user.biography,
            imageUrl: user.imageUrl, gender: user.gender, enabled: user.enabled
        };
        this.sendRequest(http_1.RequestMethod.Put, "api/edituser/" + user.userDetailsID, data)
            .subscribe(function (response) { return _this.getUsers(); });
    };
    // delete patient by id
    Repository.prototype.deletePatient = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, patientsUrl + "/" + id)
            .subscribe(function (response) { return _this.getPatients(); });
    };
    // delete employee by id
    Repository.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Delete, employeesUrl + "/" + id)
            .subscribe(function (response) { return _this.getEmployees(); });
    };
    // consolidated request method
    Repository.prototype.sendRequest = function (verb, url, data) {
        var authToken = sessionStorage.getItem('auth_token');
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + authToken);
        var request = new http_1.Request({
            method: verb, url: url, body: data, headers: headers
        });
        return this.http.request(request)
            .map(function (response) {
            //this.spinnerService.hide();
            return response.headers.get("Content-Length") != "0"
                ? response.json() : null;
        })
            .catch(function (errorResponse) {
            //this.spinnerService.hide();
            if (errorResponse.status == 400) {
                var jsonData_1;
                try {
                    jsonData_1 = errorResponse.json();
                }
                catch (e) {
                    throw new Error("Network Error");
                }
                var messages = Object.getOwnPropertyNames(jsonData_1)
                    .map(function (p) { return jsonData_1[p]; });
                throw new errorHandler_service_1.ValidationError(messages);
            }
            throw new Error("Network Error");
        });
    };
    Repository.prototype.patientVisitsCount = function () {
        return this.singlePatientVisits.length;
    };
    Repository.prototype.getPatientVisits = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "api/patientvisits/" + id)
            .subscribe(function (response) { _this.singlePatientVisits = response; });
    };
    Repository.prototype.getCheckedInPatients = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "api/checkedIn")
            .subscribe(function (response) { return _this.checkedInPatients = response; });
    };
    // cookie login
    //login(name: string, password: string): Observable<Response> {
    //    return this.http.post("/api/account/login",
    //        { name: name, password: password });
    //}
    // jwt token login
    //tokenLogin(name: string, password: string): Observable<boolean> {
    //    return this.http.request(new Request({
    //        method: RequestMethod.Post,
    //        url: "api/token",
    //        body: { name: name, password: password }
    //    })).map(response => {
    //        let r = response.json();
    //        this.auth_token = r.token;
    //        console.log(this.auth_token);
    //        if (this.auth_token) {
    //            return true;
    //        }
    //        return false;
    //    });
    //}
    // email password reset 
    Repository.prototype.resetPassword = function (email, password, confirmpassword, code) {
        return this.http.post("/api/account/resetpassword", { email: email, password: password, confirmpassword: confirmpassword, code: code });
    };
    //logout
    Repository.prototype.logout = function () {
        this.http.post("/api/account/logout", null).subscribe(function (respone) { });
    };
    // send email 
    Repository.prototype.forgotPassword = function (email) {
        return this.http.post("/api/account/forgotpassword", { email: email });
    };
    Repository.prototype.hasAdminRole = function (email) {
        return this.http.post("/api/account/isadmin", { email: email });
    };
    // enable / disable user
    Repository.prototype.toggleAccount = function (id, fromrequest) {
        var _this = this;
        if (fromrequest === void 0) { fromrequest = false; }
        this.sendRequest(http_1.RequestMethod.Post, "/api/account/toggle/" + id + "?fromrequest=" + fromrequest)
            .subscribe(function (response) { return _this.getUsers(); });
    };
    // get user roles
    Repository.prototype.getUsersInRole = function (rolename) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/usersrole/" + rolename)
            .subscribe(function (response) { _this.roleUsers = response; });
    };
    // add user to role
    Repository.prototype.addUserToRole = function (id, rolename) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/addtorole/" + id + "?rolename=" + rolename)
            .subscribe(function (response) { _this.roleUsers = response; });
    };
    // remove user from role
    Repository.prototype.removeUserFromRole = function (id, rolename) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/removefromrole/" + id + "?rolename=" + rolename)
            .subscribe(function (response) { _this.roleUsers = response; });
    };
    // add new role to roles table
    Repository.prototype.addRole = function (approle) {
        var _this = this;
        var data = { name: approle.name };
        this.sendRequest(http_1.RequestMethod.Post, "/api/addrole/", data)
            .subscribe(function (response) { return _this.appRoles = response; });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    return Repository;
}());
Repository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, ng4_loading_spinner_1.Ng4LoadingSpinnerService])
], Repository);
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map