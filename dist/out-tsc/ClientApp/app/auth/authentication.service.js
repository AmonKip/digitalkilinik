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
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
require("rxjs/add/observable/of");
var AuthenticationService = (function () {
    function AuthenticationService(repo, router, route) {
        this.repo = repo;
        this.router = router;
        this.route = route;
        this.authenticated = false;
        this.isAdmin = false;
    }
    AuthenticationService.prototype.ngOnInit = function () {
    };
    AuthenticationService.prototype.login = function () {
        var _this = this;
        this.authenticated = false;
        return this.repo.login(this.name, this.password)
            .map(function (response) {
            if (response.ok) {
                _this.authenticated = true;
                _this.password = null;
                //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                _this.router.navigateByUrl(_this.callbackUrl || "/");
            }
            return _this.authenticated;
        })
            .catch(function (e) {
            console.log(e);
            _this.authenticated = false;
            return Observable_1.Observable.of(false);
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.authenticated = false;
        this.repo.logout();
        this.router.navigateByUrl("/login");
    };
    AuthenticationService.prototype.resetPassword = function () {
        var _this = this;
        this.authenticated = false;
        return this.repo.resetPassword(this.email, this.password, this.confirmpassword, this.code)
            .map(function (response) {
            if (response.ok) {
                _this.authenticated = false;
                _this.password = null;
                _this.confirmpassword = null;
                _this.email = null;
                _this.code = null;
                //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                _this.router.navigateByUrl(_this.callbackUrl || "/login");
            }
            return _this.authenticated;
        })
            .catch(function (e) {
            console.log(e);
            _this.authenticated = false;
            return Observable_1.Observable.of(false);
        });
    };
    AuthenticationService.prototype.forgotPassword = function () {
        var _this = this;
        this.authenticated = false;
        return this.repo.forgotPassword(this.email)
            .map(function (response) {
            if (response.ok) {
                _this.authenticated = false;
                _this.email = null;
                //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                _this.router.navigateByUrl(_this.callbackUrl || "/forgotpasswordconfirmation");
            }
            return _this.authenticated;
        })
            .catch(function (e) {
            _this.authenticated = false;
            return Observable_1.Observable.of(false);
        });
    };
    AuthenticationService.prototype.hasAdminRole = function () {
        var _this = this;
        this.isAdmin = false;
        return this.repo.hasAdminRole(this.name)
            .map(function (response) {
            if (response.ok) {
                _this.isAdmin = true;
                //this.router.navigateByUrl(this.callbackUrl || "/admin/overview");
                //this.router.navigateByUrl(this.callbackUrl || "/");
            }
            return _this.isAdmin;
        })
            .catch(function (e) {
            console.log(e);
            _this.isAdmin = false;
            return Observable_1.Observable.of(false);
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router, router_1.ActivatedRoute])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map