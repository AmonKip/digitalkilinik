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
//import { AuthenticationService } from "./authentication.service";
//import { Repository } from "../models/repository";
var ForgotPasswordConfirmComponent = (function () {
    function ForgotPasswordConfirmComponent() {
        this.message = "Email reset has been sent! Please check your inbox to reset your password.";
    }
    return ForgotPasswordConfirmComponent;
}());
ForgotPasswordConfirmComponent = __decorate([
    core_1.Component({
        templateUrl: "forgotpasswordconfirm.component.html"
    }),
    __metadata("design:paramtypes", [])
], ForgotPasswordConfirmComponent);
exports.ForgotPasswordConfirmComponent = ForgotPasswordConfirmComponent;
//# sourceMappingURL=forgotpasswordconfirm.component.js.map