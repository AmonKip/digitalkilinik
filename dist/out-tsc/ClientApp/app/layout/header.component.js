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
var jwt_decode_1 = require("jwt-decode");
var authentication_service_1 = require("../auth/authentication.service");
var HeaderComponent = (function () {
    // isLoggedIn: boolean = false;
    function HeaderComponent(authService) {
        this.authService = authService;
        // this.name = this.authService.name;
        // this.isAdmin = this.authService.isAdmin;
        this.isAdmin = !!sessionStorage.getItem("isAdmin");
        var token = sessionStorage.getItem('auth_token');
        if (token) {
            this.name = jwt_decode_1.default(token).sub;
        }
        //this.isLoggedIn = authService.authenticated;
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'layout-header',
        templateUrl: './header.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map