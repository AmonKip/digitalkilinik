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
var approle_model_1 = require("../models/approle.model");
var router_1 = require("@angular/router");
var CreateRoleComponent = (function () {
    function CreateRoleComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.newRole = new approle_model_1.AppRole();
        this.formSubmitted = false;
        // this.repo.getAppUser;
    }
    CreateRoleComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.addRole(this.newRole);
            this.newRole = new approle_model_1.AppRole();
            form.reset();
            this.formSubmitted = false;
            this.router.navigateByUrl("/admin/roleslist");
        }
    };
    CreateRoleComponent.prototype.getValidationMessages = function (state, thingName) {
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
    return CreateRoleComponent;
}());
CreateRoleComponent = __decorate([
    core_1.Component({
        selector: "rolesmanage-table",
        templateUrl: "createrole.Component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository, router_1.Router])
], CreateRoleComponent);
exports.CreateRoleComponent = CreateRoleComponent;
//# sourceMappingURL=createrole.component.js.map