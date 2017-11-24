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
var AppUserAdminComponent = (function () {
    function AppUserAdminComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.request = false;
        this.returnUrl = "/admin/userslist";
        this.repo.getUsers();
    }
    Object.defineProperty(AppUserAdminComponent.prototype, "users", {
        get: function () {
            return this.repo.appUsers;
        },
        enumerable: true,
        configurable: true
    });
    AppUserAdminComponent.prototype.toggle = function (userId, status) {
        if (status) {
            this.setToggle(userId, 0);
        }
        else {
            this.setToggle(userId, 1);
        }
        this.repo.toggleAccount(userId, false);
    };
    // toggles enabled value in users array
    AppUserAdminComponent.prototype.setToggle = function (userId, status) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].userDetailsID === userId) {
                this.users[i].enabled = status;
                return;
            }
        }
    };
    return AppUserAdminComponent;
}());
AppUserAdminComponent = __decorate([
    core_1.Component({
        selector: "appUserAdmin-table",
        templateUrl: "appUserAdmin.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router])
], AppUserAdminComponent);
exports.AppUserAdminComponent = AppUserAdminComponent;
//# sourceMappingURL=appUserAdmin.component.js.map