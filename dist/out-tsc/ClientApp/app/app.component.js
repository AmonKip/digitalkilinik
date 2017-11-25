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
var errorHandler_service_1 = require("./services/errorHandler.service");
var authentication_service_1 = require("./auth/authentication.service");
var AppComponent = (function () {
    function AppComponent(errorHandler, authService) {
        var _this = this;
        this.authService = authService;
        this.isLoggedIn = false;
        errorHandler.errors.subscribe(function (error) {
            _this.lastError = error;
        });
        //authService.login().subscribe(result => {
        //    this.isLoggedIn = result;
        //})
    }
    Object.defineProperty(AppComponent.prototype, "error", {
        get: function () {
            return this.lastError;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.clearError = function () {
        this.lastError = null;
    };
    Object.defineProperty(AppComponent.prototype, "loggedIn", {
        get: function () {
            return this.authService.tokenAuthenticated;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [errorHandler_service_1.ErrorHandlerService, authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map