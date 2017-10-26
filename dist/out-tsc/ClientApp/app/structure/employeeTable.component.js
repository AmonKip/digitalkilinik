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
var EmployeeTableComponent = (function () {
    function EmployeeTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(EmployeeTableComponent.prototype, "employees", {
        get: function () {
            return this.repo.employees;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeTableComponent.prototype.selectEmployee = function (id) {
        this.repo.getEmployee(id);
        this.router.navigateByUrl("/employeedetail");
    };
    return EmployeeTableComponent;
}());
EmployeeTableComponent = __decorate([
    core_1.Component({
        selector: "employee-table",
        templateUrl: "employeeTable.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router])
], EmployeeTableComponent);
exports.EmployeeTableComponent = EmployeeTableComponent;
//# sourceMappingURL=employeeTable.component.js.map