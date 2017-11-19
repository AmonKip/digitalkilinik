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
var RoleDetailComponent = (function () {
    function RoleDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = activeRoute.snapshot.params["id"];
        if (id) {
            this.roleName = id;
            this.repo.getUsersInRole(id);
        }
        else {
            router.navigateByUrl("/admin");
        }
    }
    Object.defineProperty(RoleDetailComponent.prototype, "users", {
        get: function () {
            return this.repo.roleUsers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleDetailComponent.prototype, "role", {
        get: function () {
            var _this = this;
            return this.repo.appRoles ? this.repo.appRoles.find(function (r) { return r.name == _this.roleName; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    return RoleDetailComponent;
}());
RoleDetailComponent = __decorate([
    core_1.Component({
        selector: "role-detail",
        templateUrl: "roledetail.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router,
        router_1.ActivatedRoute])
], RoleDetailComponent);
exports.RoleDetailComponent = RoleDetailComponent;
//# sourceMappingURL=roledetail.component.js.map