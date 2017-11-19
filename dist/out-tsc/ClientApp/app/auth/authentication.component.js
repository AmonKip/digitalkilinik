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
var authentication_service_1 = require("./authentication.service");
var repository_1 = require("../models/repository");
var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService, repo) {
        this.authService = authService;
        this.repo = repo;
        this.showError = false;
    }
    AuthenticationComponent.prototype.login = function () {
        var _this = this;
        this.showError = false;
        this.authService.login().subscribe(function (result) {
            _this.showError = !result;
            if (_this.authService.authenticated) {
                _this.repo.getPatients();
                _this.repo.getVisits();
            }
            if (_this.authService.isAdmin) {
                //this.repo.getUsers();
                //this.repo.getRoles();
            }
        });
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    core_1.Component({
        templateUrl: "authentication.component.html"
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, repository_1.Repository])
], AuthenticationComponent);
exports.AuthenticationComponent = AuthenticationComponent;
//# sourceMappingURL=authentication.component.js.map