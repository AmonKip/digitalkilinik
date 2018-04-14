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
var angular_4_data_table_1 = require("angular-4-data-table");
var VisitTableComponent = (function () {
    function VisitTableComponent(repo, router) {
        var _this = this;
        this.repo = repo;
        this.router = router;
        this.items = [];
        this.repo.getVisits()
            .subscribe(function (visits) {
            _this.visits = visits;
            _this.initializeTable(visits);
        });
    }
    /*     get visits(): Visit[] {
            return this.repo.visits;
        } */
    VisitTableComponent.prototype.selectVisit = function (id) {
        this.repo.getVisit(id);
        this.router.navigateByUrl("/visitdetail");
    };
    VisitTableComponent.prototype.initializeTable = function (visits) {
        var _this = this;
        this.tableResource = new angular_4_data_table_1.DataTableResource(visits);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    VisitTableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    return VisitTableComponent;
}());
VisitTableComponent = __decorate([
    core_1.Component({
        selector: "visit-table",
        templateUrl: "visitTable.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router])
], VisitTableComponent);
exports.VisitTableComponent = VisitTableComponent;
//# sourceMappingURL=visitTable.component.js.map