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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var configClasses_repository_1 = require("./configClasses.repository");
var errorHandler_service_1 = require("../services/errorHandler.service");
require("rxjs/add/operator/catch");
var patientsUrl = "api/patients";
var employeesUrl = "api/employees";
var visitsUrl = "api/visits";
var addRequestUrl = "api/addrequest";
var Repository = (function () {
    function Repository(http) {
        this.http = http;
        this.filterObject = new configClasses_repository_1.Filter();
        //this.filter.category = "";
        this.getPatients();
        this.getEmployees();
        this.getVisits();
        this.getUsers();
        this.getRoles();
        this.getAccountRequests();
    }
    Repository.prototype.getPatient = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/patients/" + id)
            .subscribe(function (response) { _this.patient = response; });
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
        this.sendRequest(http_1.RequestMethod.Get, url)
            .subscribe(function (response) { _this.patients = response; });
    };
    Repository.prototype.getEmployees = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, employeesUrl)
            .subscribe(function (response) { _this.employees = response; });
    };
    // get all visits
    Repository.prototype.getVisits = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, visitsUrl)
            .subscribe(function (response) { _this.visits = response; });
    };
    // get single visit by visit id
    Repository.prototype.getVisit = function (id) {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/visits/" + id)
            .subscribe(function (response) { _this.visit = response; });
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
    // get all roles
    Repository.prototype.getRoles = function () {
        var _this = this;
        this.sendRequest(http_1.RequestMethod.Get, "/api/roles")
            .subscribe(function (response) { _this.appRoles = response; });
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
            idNumber: pat.idNumber
        };
        this.sendRequest(http_1.RequestMethod.Post, patientsUrl, data)
            .subscribe(function (response) {
            pat.patientID = response;
            _this.patients.push(pat);
        });
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
            idNumber: pat.idNumber
        };
        this.sendRequest(http_1.RequestMethod.Put, patientsUrl + "/" + pat.patientID, data)
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
        return this.http.request(new http_1.Request({ method: verb, url: url, body: data }))
            .map(function (response) {
            return response.headers.get("Content-Length") != "0"
                ? response.json() : null;
        })
            .catch(function (errorResponse) {
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
    Repository.prototype.login = function (name, password) {
        return this.http.post("/api/account/login", { name: name, password: password });
    };
    Repository.prototype.logout = function () {
        this.http.post("/api/account/logout", null).subscribe(function (respone) { });
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
    __metadata("design:paramtypes", [http_1.Http])
], Repository);
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map