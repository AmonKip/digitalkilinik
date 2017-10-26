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
var appuser_model_1 = require("../models/appuser.model");
var router_1 = require("@angular/router");
var AppUserCreateComponent = (function () {
    function AppUserCreateComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.newUser = new appuser_model_1.AppUser();
        this.formSubmitted = false;
        // this.repo.getAppUser;
    }
    AppUserCreateComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.createUser(this.newUser);
            this.newUser = new appuser_model_1.AppUser();
            form.reset();
            this.formSubmitted = false;
            this.router.navigateByUrl("/");
        }
    };
    AppUserCreateComponent.prototype.getValidationMessages = function (state, thingName) {
        var thing = state.path || thingName;
        var messages = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push("The field is required");
                        break;
                    case "minlength":
                        messages.push("A " + thing + " must be at least " + state.errors['minlegth'].requiredLength + " characters");
                        break;
                    case "pattern":
                        messages.push("The " + thing + " contains illegal characters");
                        break;
                }
            }
        }
        return messages;
    };
    return AppUserCreateComponent;
}());
AppUserCreateComponent = __decorate([
    core_1.Component({
        selector: "user-create",
        templateUrl: "appUserCreate.Component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router])
], AppUserCreateComponent);
exports.AppUserCreateComponent = AppUserCreateComponent;
//# sourceMappingURL=appUserCreate.Component.js.map