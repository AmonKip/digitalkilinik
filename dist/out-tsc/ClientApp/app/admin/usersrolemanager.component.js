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
var RoleManagerComponent = (function () {
    function RoleManagerComponent(repo, router, activeRoute) {
        this.repo = repo;
        this.router = router;
        this.unassignedRoles = [];
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getRolesByUser(id);
            this.userId = id;
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(RoleManagerComponent.prototype, "roles", {
        get: function () {
            return this.repo.appRoles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleManagerComponent.prototype, "userRoles", {
        get: function () {
            var x = this.repo.userRoles;
            return x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleManagerComponent.prototype, "user", {
        get: function () {
            var _this = this;
            return this.repo.appUsers ? this.repo.appUsers.find(function (u) { return u.userDetailsID == _this.userId; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    // toggle on/off button
    RoleManagerComponent.prototype.isAssigned = function (rolename) {
        if (this.userRoles.indexOf(rolename) != -1) {
            return true;
        }
        return false;
    };
    RoleManagerComponent.prototype.addToRole = function (id, rolename) {
        this.repo.addUserToRole(id, rolename);
        this.userRoles.push(rolename);
    };
    RoleManagerComponent.prototype.removeFromRole = function (id, rolename) {
        this.repo.removeUserFromRole(id, rolename);
        var index = this.userRoles.indexOf(rolename);
        if (index > -1) {
            this.userRoles.splice(index, 1);
        }
    };
    return RoleManagerComponent;
}());
RoleManagerComponent = __decorate([
    core_1.Component({
        selector: "rolemanager-table",
        templateUrl: "usersrolemanager.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router, router_1.ActivatedRoute])
], RoleManagerComponent);
exports.RoleManagerComponent = RoleManagerComponent;
//# sourceMappingURL=usersrolemanager.component.js.map