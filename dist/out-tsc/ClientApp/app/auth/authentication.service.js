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
var Rx_1 = require("rxjs/Rx");
var router_1 = require("@angular/router");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
var http_1 = require("@angular/http");
var jwt_decode_1 = require("jwt-decode");
var AuthenticationService = (function () {
    function AuthenticationService(repo, router, route, http) {
        this.repo = repo;
        this.router = router;
        this.route = route;
        this.http = http;
        // Observable navItem source
        this._authNavStatusSource = new Rx_1.BehaviorSubject(false);
        // Observable navItem stream
        this.authNavStatus$ = this._authNavStatusSource.asObservable();
        this.authenticated = false;
        this.isAdmin = false;
        this.tokenAuthenticated = false;
        this.tokenAuthenticated = !!localStorage.getItem('auth_token');
        // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
        // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        this._authNavStatusSource.next(this.tokenAuthenticated);
    }
    AuthenticationService.prototype.ngOnInit = function () {
    };
    AuthenticationService.prototype.ngOnDestroy = function () {
    };
    // cookie login
    //login(): Observable<boolean> {
    //    this.authenticated = false;
    //    return this.repo.login(this.name, this.password)
    //        .map(response => {
    //            if (response) {
    //                if (response.json().roles.indexOf("Admin") != -1) {
    //                    this.isAdmin = true;
    //                }
    //                this.authenticated = true;
    //                this.password = null;
    //                this.router.navigateByUrl(this.callbackUrl || "/table");
    //                this.callbackUrl = "";
    //            }
    //            return this.authenticated;
    //        })
    //        .catch(e => {
    //            this.authenticated = false;
    //            this.isAdmin = false;
    //            return Observable.of(false);
    //        });
    //} 
    AuthenticationService.prototype.tokenLogin = function () {
        var _this = this;
        return this.http.request(new http_1.Request({
            method: http_1.RequestMethod.Post,
            url: "api/token",
            body: { name: this.name, password: this.password }
        })).map(function (res) { return (res.json()); })
            .map(function (res) {
            localStorage.setItem('auth_token', res.token);
            var tokenPayload = jwt_decode_1.default(res.token);
            if (tokenPayload.roles.indexOf("Admin") > -1) {
                _this.isAdmin = true;
            }
            _this.tokenAuthenticated = true;
            _this._authNavStatusSource.next(true);
            _this.router.navigateByUrl(_this.callbackUrl || "/table");
            return true;
        })
            .catch(function (res) {
            throw new Error("Network Error");
        });
    };
    AuthenticationService.prototype.isTokenAuthenticated = function () {
        return this.tokenAuthenticated = this.auth_token != null;
    };
    // token logout
    AuthenticationService.prototype.tokenLogout = function () {
        localStorage.removeItem('auth_token');
        this.tokenAuthenticated = false;
        this.isAdmin = false;
        this._authNavStatusSource.next(false);
        this.router.navigateByUrl("/login");
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.tokenAuthenticated;
    };
    // cookie logout
    AuthenticationService.prototype.logout = function () {
        this.authenticated = false;
        this.isAdmin = false;
        this.repo.logout();
        window.location.replace("/login");
    };
    AuthenticationService.prototype.resetPassword = function () {
        var _this = this;
        this.authenticated = false;
        return this.repo.resetPassword(this.email, this.password, this.confirmpassword, this.code)
            .map(function (response) {
            if (response.ok) {
                _this.authenticated = false;
                _this.isAdmin = false;
                _this.password = null;
                _this.confirmpassword = null;
                _this.email = null;
                _this.code = null;
                _this.router.navigateByUrl("/passwordresetconfirm");
            }
            return _this.authenticated;
        })
            .catch(function (e) {
            _this.authenticated = false;
            _this.isAdmin = false;
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
                _this.isAdmin = false;
                _this.email = null;
                _this.router.navigateByUrl("/forgotpasswordconfirm");
            }
            return _this.authenticated;
        })
            .catch(function (e) {
            _this.authenticated = false;
            _this.isAdmin = false;
            return Observable_1.Observable.of(false);
        });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router, router_1.ActivatedRoute, http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map