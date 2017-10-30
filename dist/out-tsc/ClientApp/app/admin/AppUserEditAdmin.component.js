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
var AppUserEditAdminComponent = (function () {
    function AppUserEditAdminComponent(repo, router, activeRoute) {
        this.repo = repo;
        this.router = router;
        //newPatient: Patient = new Patient();
        this.formSubmitted = false;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getUser(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(AppUserEditAdminComponent.prototype, "user", {
        get: function () {
            return this.repo.appUser;
        },
        enumerable: true,
        configurable: true
    });
    AppUserEditAdminComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.replaceUser(this.user);
            this.formSubmitted = false;
            this.router.navigateByUrl("/admin/userslist");
        }
    };
    AppUserEditAdminComponent.prototype.getValidationMessages = function (state, thingName) {
        var thing = state.path || thingName;
        var messages = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push("Required");
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
    return AppUserEditAdminComponent;
}());
AppUserEditAdminComponent = __decorate([
    core_1.Component({
        selector: "user-edit",
        templateUrl: "AppUserEditAdmin.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router,
        router_1.ActivatedRoute])
], AppUserEditAdminComponent);
exports.AppUserEditAdminComponent = AppUserEditAdminComponent;
//# sourceMappingURL=AppUserEditAdmin.component.js.map