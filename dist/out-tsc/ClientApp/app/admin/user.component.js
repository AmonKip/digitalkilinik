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
var UserComponent = (function () {
    function UserComponent(repo, router, activeRoute) {
        var _this = this;
        this.repo = repo;
        this.router = router;
        this.user = {};
        this.formSubmitted = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (this.id) {
            this.user = this.repo.appUsers.filter(function (u) { return u.userDetailsID == _this.id; })[0];
            this.isEdit = true;
        }
    }
    //get user(): AppUser {
    //    return this.repo.appUser;
    //}
    UserComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            if (this.isEdit) {
                this.repo.replaceUser(this.user);
            }
            else {
                this.repo.createUser(this.user);
            }
            this.formSubmitted = false;
            this.router.navigateByUrl("/admin/userslist");
        }
    };
    UserComponent.prototype.getValidationMessages = function (state, thingName) {
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
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: "user",
        templateUrl: "user.component.html"
    }),
    __metadata("design:paramtypes", [repository_1.Repository,
        router_1.Router,
        router_1.ActivatedRoute])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map