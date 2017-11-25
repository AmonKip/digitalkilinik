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
var AppUserDetailAdminComponent = (function () {
    function AppUserDetailAdminComponent(repo, router, activeRoute) {
        var _this = this;
        this.repo = repo;
        this.router = router;
        this.activeRoute = activeRoute;
        this.request = "";
        this.returnUrl = "";
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'];
        });
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.request = params['request'];
        });
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getUser(id);
            // if not from request get user roles from db
            if (!this.request) {
                this.repo.getRolesByUser(id);
            }
        }
        else {
            this.router.navigateByUrl("/table");
        }
    }
    Object.defineProperty(AppUserDetailAdminComponent.prototype, "user", {
        get: function () {
            return this.repo.appUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppUserDetailAdminComponent.prototype, "userRoles", {
        get: function () {
            var result = this.repo.userRoles ? this.repo.userRoles.join() : "";
            return result;
        },
        enumerable: true,
        configurable: true
    });
    AppUserDetailAdminComponent.prototype.approveRequest = function (id) {
        var index = this.repo.appUserRequests.indexOf(id);
        if (index > -1) {
            this.repo.appUserRequests.slice(index, 1);
        }
        this.repo.toggleAccount(id, true);
        this.router.navigateByUrl("/admin/overview");
    };
    AppUserDetailAdminComponent.prototype.rejectRequest = function (id) {
        // code to add user to reject list of users
        //this.repo.toggleAccount(id);
        this.router.navigateByUrl("/admin/overview");
    };
    return AppUserDetailAdminComponent;
}());
AppUserDetailAdminComponent = __decorate([
    core_1.Component({
        selector: "user-detail",
        templateUrl: "AppUserDetailAdmin.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router,
        router_1.ActivatedRoute])
], AppUserDetailAdminComponent);
exports.AppUserDetailAdminComponent = AppUserDetailAdminComponent;
//# sourceMappingURL=AppUserDetailAdmin.component.js.map