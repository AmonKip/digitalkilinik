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
var router_1 = require("@angular/router");
var authentication_service_1 = require("./authentication.service");
var jwt_decode_1 = require("jwt-decode");
var AuthenticationGuard = (function () {
    function AuthenticationGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    //canActivateChild(route: ActivatedRouteSnapshot,
    //    state: RouterStateSnapshot): boolean {
    //    //if (this.authService.authenticated) {
    //    if (this.authService.tokenAuthenticated) {
    //        return true;
    //    } else {
    //       this.authService.callbackUrl = state.url.toString();
    //        this.router.navigateByUrl("/login");
    //        return false;
    //    }
    //}
    //canActivate(route: ActivatedRouteSnapshot,
    //    state: RouterStateSnapshot): boolean {
    //    if (this.authService.tokenAuthenticated) {
    //    //if (this.authService.authenticated) {
    //        return true;
    //    } else {
    //        this.authService.callbackUrl = state.url.toString();
    //        this.router.navigateByUrl("/login");
    //        return false;
    //    }
    //}
    AuthenticationGuard.prototype.canActivateChild = function (route) {
        // this will be passed from the route config
        // on the data property
        var adminRole = "Admin";
        var token = sessionStorage.getItem('auth_token');
        // decode the token to get its payload
        var tokenPayload = jwt_decode_1.default(token);
        if (!this.authService.tokenAuthenticated || tokenPayload.roles.indexOf(adminRole) == -1 || !this.isNotExpiredToken()) {
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    };
    AuthenticationGuard.prototype.canActivate = function (route) {
        // this will be passed from the route config
        // on the data property
        var expectedRole = route.data.expectedRole;
        var token = sessionStorage.getItem('auth_token');
        // decode the token to get its payload
        var tokenPayload = jwt_decode_1.default(token);
        if (!this.authService.tokenAuthenticated || tokenPayload.roles.indexOf(expectedRole) == -1 || !this.isNotExpiredToken()) {
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    };
    AuthenticationGuard.prototype.isNotExpiredToken = function () {
        var token = sessionStorage.getItem('auth_token');
        var tokenExpirationTime = jwt_decode_1.default(token).exp;
        var currentTime = Math.floor((new Date).getTime() / 1000);
        if (tokenExpirationTime > currentTime) {
            return true;
        }
        this.authService.tokenAuthenticated = false;
        return false;
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], AuthenticationGuard);
exports.AuthenticationGuard = AuthenticationGuard;
//# sourceMappingURL=authentication.guard.js.map