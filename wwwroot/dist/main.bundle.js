webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverviewComponent = (function () {
    function OverviewComponent(repo) {
        this.repo = repo;
    }
    Object.defineProperty(OverviewComponent.prototype, "patients", {
        get: function () {
            return this.repo.patients;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "visits", {
        get: function () {
            return this.repo.visits;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "users", {
        get: function () {
            return this.repo.appUsers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "roles", {
        get: function () {
            return this.repo.appRoles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OverviewComponent.prototype, "accountRequests", {
        get: function () {
            return this.repo.appUserRequests;
        },
        enumerable: true,
        configurable: true
    });
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(230)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], OverviewComponent);

var _a;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleDetailComponent = (function () {
    function RoleDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = activeRoute.snapshot.params["id"];
        if (id) {
            this.roleName = id;
            this.repo.getUsersInRole(id);
        }
        else {
            router.navigateByUrl("/admin");
        }
    }
    Object.defineProperty(RoleDetailComponent.prototype, "users", {
        get: function () {
            return this.repo.roleUsers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleDetailComponent.prototype, "role", {
        get: function () {
            var _this = this;
            return this.repo.appRoles ? this.repo.appRoles.find(function (r) { return r.name == _this.roleName; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    return RoleDetailComponent;
}());
RoleDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "role-detail",
        template: __webpack_require__(231)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], RoleDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=roledetail.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolesTableComponent = (function () {
    function RolesTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.repo.getRoles();
    }
    Object.defineProperty(RolesTableComponent.prototype, "roles", {
        get: function () {
            return this.repo.appRoles;
        },
        enumerable: true,
        configurable: true
    });
    RolesTableComponent.prototype.selectRole = function (id) {
        //this.repo.getRole(id);
        this.repo.appRole = this.roles.find(function (r) { return r.id == id; });
        this.router.navigateByUrl("/admin/roledetail");
    };
    return RolesTableComponent;
}());
RolesTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "roles-table",
        template: __webpack_require__(232)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RolesTableComponent);

var _a, _b;
//# sourceMappingURL=rolestable.component.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "user",
        template: __webpack_require__(233)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailComponent = (function () {
    function UserDetailComponent(repo, router, activeRoute) {
        var _this = this;
        this.repo = repo;
        this.router = router;
        this.activeRoute = activeRoute;
        this.request = "";
        this.returnUrl = "";
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'];
        });
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.request = params['request'];
        });
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getUser(id);
            // if not from request get user roles from db
            if (!this.request) {
                this.repo.getRolesByUser(id);
            }
        }
        else {
            this.router.navigateByUrl("/table");
        }
    }
    Object.defineProperty(UserDetailComponent.prototype, "user", {
        get: function () {
            return this.repo.appUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserDetailComponent.prototype, "userRoles", {
        get: function () {
            var result = this.repo.userRoles ? this.repo.userRoles.join() : "";
            return result;
        },
        enumerable: true,
        configurable: true
    });
    UserDetailComponent.prototype.approveRequest = function (id) {
        var index = this.repo.appUserRequests.indexOf(id);
        if (index > -1) {
            this.repo.appUserRequests.slice(index, 1);
        }
        this.repo.toggleAccount(id, true);
        this.router.navigateByUrl("/admin/overview");
    };
    UserDetailComponent.prototype.rejectRequest = function (id) {
        // code to add user to reject list of users
        //this.repo.toggleAccount(id);
        this.router.navigateByUrl("/admin/overview");
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "user-detail",
        template: __webpack_require__(234)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], UserDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=userdetail.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserRequestComponent = (function () {
    function UserRequestComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.request = true;
        this.returnUrl = "/admin/usersrequests";
        this.repo.getAccountRequests();
    }
    Object.defineProperty(UserRequestComponent.prototype, "users", {
        get: function () {
            return this.repo.appUserRequests;
        },
        enumerable: true,
        configurable: true
    });
    return UserRequestComponent;
}());
UserRequestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "UserRequest",
        template: __webpack_require__(235)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserRequestComponent);

var _a, _b;
//# sourceMappingURL=userrequest.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleManagerComponent = (function () {
    function RoleManagerComponent(repo, router, activeRoute) {
        this.repo = repo;
        this.router = router;
        this.unassignedRoles = [];
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getRolesByUser(id);
            this.userId = id;
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(RoleManagerComponent.prototype, "roles", {
        get: function () {
            return this.repo.appRoles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleManagerComponent.prototype, "userRoles", {
        get: function () {
            var x = this.repo.userRoles;
            return x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleManagerComponent.prototype, "user", {
        get: function () {
            var _this = this;
            return this.repo.appUsers ? this.repo.appUsers.find(function (u) { return u.userDetailsID == _this.userId; }) : [];
        },
        enumerable: true,
        configurable: true
    });
    // toggle on/off button
    RoleManagerComponent.prototype.isAssigned = function (rolename) {
        if (this.userRoles.indexOf(rolename) != -1) {
            return true;
        }
        return false;
    };
    RoleManagerComponent.prototype.addToRole = function (id, rolename) {
        this.repo.addUserToRole(id, rolename);
        this.userRoles.push(rolename);
    };
    RoleManagerComponent.prototype.removeFromRole = function (id, rolename) {
        this.repo.removeUserFromRole(id, rolename);
        var index = this.userRoles.indexOf(rolename);
        if (index > -1) {
            this.userRoles.splice(index, 1);
        }
    };
    return RoleManagerComponent;
}());
RoleManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "rolemanager-table",
        template: __webpack_require__(236)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], RoleManagerComponent);

var _a, _b, _c;
//# sourceMappingURL=usersrolemanager.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersTableComponent = (function () {
    function UsersTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.request = false;
        this.returnUrl = "/admin/userslist";
        this.repo.getUsers();
    }
    Object.defineProperty(UsersTableComponent.prototype, "users", {
        get: function () {
            return this.repo.appUsers;
        },
        enumerable: true,
        configurable: true
    });
    UsersTableComponent.prototype.toggle = function (userId, status) {
        if (status) {
            this.setToggle(userId, 0);
        }
        else {
            this.setToggle(userId, 1);
        }
        this.repo.toggleAccount(userId, false);
    };
    // toggles enabled value in users array
    UsersTableComponent.prototype.setToggle = function (userId, status) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i].userDetailsID === userId) {
                this.users[i].enabled = status;
                return;
            }
        }
    };
    return UsersTableComponent;
}());
UsersTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "appUserAdmin-table",
        template: __webpack_require__(237)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UsersTableComponent);

var _a, _b;
//# sourceMappingURL=userstable.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_repository__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService, repo) {
        this.authService = authService;
        this.repo = repo;
        this.showError = false;
    }
    //login() {
    //    this.showError = false;
    //    this.authService.login().subscribe(result => {
    //        this.showError = !result;
    //        if (this.authService.authenticated) {
    //            this.repo.getPatients();
    //            this.repo.getVisits();
    //        }
    //    });
    //}
    AuthenticationComponent.prototype.tokenLogin = function () {
        var _this = this;
        this.showError = false;
        this.authService.tokenLogin().subscribe(function (result) {
            _this.showError = !result;
            if (_this.authService.tokenAuthenticated) {
                _this.repo.getPatients();
                _this.repo.getVisits();
            }
        });
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(239)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_repository__["a" /* Repository */]) === "function" && _b || Object])
], AuthenticationComponent);

var _a, _b;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        var tokenPayload = __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default()(token);
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
        var tokenPayload = __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default()(token);
        if (!this.authService.tokenAuthenticated || tokenPayload.roles.indexOf(expectedRole) == -1 || !this.isNotExpiredToken()) {
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    };
    AuthenticationGuard.prototype.isNotExpiredToken = function () {
        var token = sessionStorage.getItem('auth_token');
        var tokenExpirationTime = __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default()(token).exp;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AuthenticationGuard);

var _a, _b;
//# sourceMappingURL=authentication.guard.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
        this.showError = false;
    }
    ForgotPasswordComponent.prototype.forgotpassword = function () {
        var _this = this;
        this.showError = false;
        this.authService.forgotPassword().subscribe(function (result) {
            _this.showError = !result;
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(240)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], ForgotPasswordComponent);

var _a;
//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, route) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.showError = false;
        this.route.queryParams.subscribe(function (params) {
            _this.code = params['code'];
        });
    }
    ResetPasswordComponent.prototype.resetpassword = function () {
        var _this = this;
        this.showError = false;
        this.authService.code = this.code;
        this.authService.resetPassword().subscribe(function (result) {
            _this.showError = !result;
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(241)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], ResetPasswordComponent);

var _a, _b;
//# sourceMappingURL=resetpassword.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ValidationError; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ErrorHandlerService = (function () {
    function ErrorHandlerService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    ErrorHandlerService.prototype.handleError = function (error) {
        var _this = this;
        setTimeout(function () {
            if (error instanceof ValidationError) {
                _this.subject.next(error.errors);
            }
            else if (error instanceof Error) {
                _this.subject.next([error.message]);
            }
            else {
                _this.subject.next(["An error has occured"]);
            }
        });
    };
    Object.defineProperty(ErrorHandlerService.prototype, "errors", {
        get: function () {
            return this.subject;
        },
        enumerable: true,
        configurable: true
    });
    return ErrorHandlerService;
}());
ErrorHandlerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ErrorHandlerService);

var ValidationError = (function () {
    function ValidationError(errors) {
        this.errors = errors;
    }
    return ValidationError;
}());

//# sourceMappingURL=errorHandler.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_appuser_model__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUserCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppUserCreateComponent = (function () {
    function AppUserCreateComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_2__models_appuser_model__["a" /* AppUser */]();
        this.formSubmitted = false;
        // this.repo.getAppUser;
    }
    AppUserCreateComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.createUser(this.newUser);
            this.newUser = new __WEBPACK_IMPORTED_MODULE_2__models_appuser_model__["a" /* AppUser */]();
            form.reset();
            this.formSubmitted = false;
            this.router.navigateByUrl("/requestconfirm");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "user-create",
        template: __webpack_require__(245)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppUserCreateComponent);

var _a, _b;
//# sourceMappingURL=appUserCreate.Component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AuthenticationService } from "./authentication.service";
//import { Repository } from "../models/repository";
var ForgotPasswordConfirmComponent = (function () {
    function ForgotPasswordConfirmComponent() {
        this.message = "Email reset has been sent! Please check your inbox to reset your password.";
    }
    return ForgotPasswordConfirmComponent;
}());
ForgotPasswordConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(249)
    }),
    __metadata("design:paramtypes", [])
], ForgotPasswordConfirmComponent);

//# sourceMappingURL=forgotpasswordconfirm.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AuthenticationService } from "./authentication.service";
//import { Repository } from "../models/repository";
var PasswordResetConfirmComponent = (function () {
    function PasswordResetConfirmComponent() {
        this.message = "Your password has been successfully reset!";
    }
    return PasswordResetConfirmComponent;
}());
PasswordResetConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(250)
    }),
    __metadata("design:paramtypes", [])
], PasswordResetConfirmComponent);

//# sourceMappingURL=passwordresetconfirmation.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientComponent = (function () {
    function PatientComponent(repo, router, activeRoute) {
        var _this = this;
        this.repo = repo;
        this.router = router;
        this.patient = {};
        this.formSubmitted = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (this.id) {
            this.patient = this.repo.patients.filter(function (p) { return p.patientID == _this.id; })[0];
            this.isEdit = true;
        }
    }
    PatientComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            if (this.isEdit) {
                this.repo.replacePatient(this.patient);
            }
            else {
                this.repo.createPatient(this.patient);
            }
            this.formSubmitted = false;
            this.router.navigateByUrl("/table");
        }
    };
    PatientComponent.prototype.getValidationMessages = function (state, thingName) {
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
    return PatientComponent;
}());
PatientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "patient",
        template: __webpack_require__(251)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PatientComponent);

var _a, _b, _c;
//# sourceMappingURL=patient.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PatientDetailComponent = (function () {
    function PatientDetailComponent(repo, router, activeRoute) {
        var _this = this;
        this.repo = repo;
        this.patient = {};
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (this.id) {
            this.patient = this.repo.patients.filter(function (p) { return p.patientID == _this.id; })[0];
        }
        else {
            router.navigateByUrl("/");
        }
    }
    PatientDetailComponent.prototype.ngOnInit = function () {
        //this.repo.getVisits().subscribe(visits => this.repo.visits == visits);
    };
    Object.defineProperty(PatientDetailComponent.prototype, "totalVisits", {
        get: function () {
            if (this.visits != null) {
                return this.visits.length;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientDetailComponent.prototype, "visits", {
        get: function () {
            var _this = this;
            return this.repo.visits.filter(function (p) { return p.patientID == _this.id; });
        },
        enumerable: true,
        configurable: true
    });
    return PatientDetailComponent;
}());
PatientDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "patient-detail",
        template: __webpack_require__(252)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PatientDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=patientDetail.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_authentication_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatientTableComponent = (function () {
    function PatientTableComponent(repo, router, authService, route) {
        this.repo = repo;
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.isCheckedIn = false;
        this.repo.getPatients();
        this.registeredPatients();
    }
    Object.defineProperty(PatientTableComponent.prototype, "patients", {
        get: function () {
            return this.filteredPatients;
        },
        set: function (value) {
            this.patients = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientTableComponent.prototype, "patientCount", {
        get: function () {
            return this.repo.patients ? this.repo.patients.length : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PatientTableComponent.prototype, "checkedInPatientsCount", {
        get: function () {
            return this.repo.patients.filter(function (p) { return p.current == 1; }).length;
        },
        enumerable: true,
        configurable: true
    });
    PatientTableComponent.prototype.selectPatient = function (id) {
        this.repo.getPatient(id);
        this.router.navigateByUrl("/detail");
    };
    PatientTableComponent.prototype.checkedInPatients = function () {
        this.isCheckedIn = true;
        this.filteredPatients = this.repo.patients.filter(function (p) { return p.current == 1; });
        return this.patients = this.filteredPatients;
    };
    PatientTableComponent.prototype.registeredPatients = function () {
        this.filteredPatients = this.repo.patients.filter(function (p) { return p.current == 0; });
        this.isCheckedIn = false;
    };
    PatientTableComponent.prototype.criteriaChange = function (value) {
        if (value != '[object Event]')
            this.listFilter = value;
    };
    return PatientTableComponent;
}());
PatientTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "patient-table",
        template: __webpack_require__(253)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], PatientTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=patientTable.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_visit_model__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_vitalSigns_model__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_doctorsOrder_model__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_assessment_model__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientVisitCreate; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PatientVisitCreate = (function () {
    function PatientVisitCreate(repo, router, activeRoute, fb) {
        this.repo = repo;
        this.router = router;
        this.fb = fb;
        this.newVisit = new __WEBPACK_IMPORTED_MODULE_2__models_visit_model__["a" /* Visit */]();
        this.newVitalSigns = new __WEBPACK_IMPORTED_MODULE_3__models_vitalSigns_model__["a" /* VitalSigns */]();
        this.newAssessment = new __WEBPACK_IMPORTED_MODULE_5__models_assessment_model__["a" /* Assessment */]();
        this.newDoctorsOrder = new __WEBPACK_IMPORTED_MODULE_4__models_doctorsOrder_model__["a" /* DoctorsOrder */]();
        this.visitFormSubmitted = false;
        this.vitalSignsFormSubmitted = false;
        this.assessmentFormSubmitted = false;
        this.ordersFormSubmitted = false;
        //  state variables for displaying saved or create component
        this.isVisitSaved = false;
        this.isVitalSignsSaved = false;
        this.isAssessmentSaved = false;
        this.isAddOrdersChecked = false;
        this.isOrdersSaved = false;
        this.isHiddenOrder = true;
        this.formErrors = {
            orders: [
                { type: '', notes: '', patientId: this.patientId }
            ]
        };
        //-------------------------------------
        this.validationMessages = {
            orders: {
                type: {
                    required: 'Type is required.'
                },
                notes: {
                    required: 'Notes is required.'
                }
            }
        };
        var patientId = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (patientId) {
            this.newVisit.patientID = patientId;
            this.newVitalSigns.patientID = patientId;
            this.newAssessment.patientID = patientId;
            this.patient = this.repo.patients ? this.repo.patients.find(function (p) { return p.patientID == patientId; }) : null;
            this.patientId = patientId;
        }
        else {
            router.navigateByUrl("/table");
        }
    }
    PatientVisitCreate.prototype.ngOnInit = function () {
        this.buildForm();
    };
    /**
    * build the initial form
    */
    PatientVisitCreate.prototype.buildForm = function () {
        var _this = this;
        // build our form
        this.form = this.fb.group({
            orders: this.fb.array([
                this.createOrder()
            ])
        });
        // watch for changes and validate
        this.form.valueChanges.subscribe(function (data) { return _this.validateForm(); });
    };
    PatientVisitCreate.prototype.submitVisit = function (form) {
        var _this = this;
        this.visitFormSubmitted = true;
        if (form.valid) {
            this.repo.createVisit(this.newVisit)
                .subscribe(function (res) {
                _this.visit = res;
                _this.isVisitSaved = true;
            });
            this.newVisit = new __WEBPACK_IMPORTED_MODULE_2__models_visit_model__["a" /* Visit */]();
            form.reset();
            this.visitFormSubmitted = false;
            // this.router.navigateByUrl("/visitcreate");
        }
    };
    PatientVisitCreate.prototype.submitVitalSigns = function (form) {
        var _this = this;
        this.vitalSignsFormSubmitted = true;
        if (form.valid) {
            this.repo.createVitalSigns(this.newVitalSigns)
                .subscribe(function (res) {
                _this.vitalSigns = res;
                _this.isVitalSignsSaved = true;
            });
            this.newVitalSigns = new __WEBPACK_IMPORTED_MODULE_3__models_vitalSigns_model__["a" /* VitalSigns */]();
            form.reset();
            this.vitalSignsFormSubmitted = false;
            //this.router.navigateByUrl("/visitcreate/" + this.patientId);
        }
    };
    PatientVisitCreate.prototype.submitAssessment = function (form) {
        var _this = this;
        this.assessmentFormSubmitted = true;
        if (form.valid) {
            this.repo.createAssessment(this.newAssessment)
                .subscribe(function (res) {
                _this.assessment = res;
                _this.isAssessmentSaved = true;
            });
            this.newAssessment = new __WEBPACK_IMPORTED_MODULE_5__models_assessment_model__["a" /* Assessment */]();
            form.reset();
            this.assessmentFormSubmitted = false;
            // this.router.navigateByUrl("/table");
        }
    };
    PatientVisitCreate.prototype.submitOrders = function (form) {
        var _this = this;
        this.ordersFormSubmitted = true;
        if (this.form.valid) {
            var orders = this.form.get('orders').value;
            var jsonData = JSON.stringify(orders);
            this.repo.createOrders(jsonData)
                .subscribe(function (res) {
                _this.doctorsOrder = res;
                _this.isOrdersSaved = true;
                _this.ordersFormSubmitted = false;
            });
            // this.router.navigateByUrl("/table");
        }
    };
    PatientVisitCreate.prototype.getValidationMessages = function (state, thingName) {
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
    /**
     * validate the entire form
     */
    PatientVisitCreate.prototype.validateForm = function () {
        for (var field in this.formErrors) {
            // clear that input field errors
            this.formErrors[field] = '';
            // grab an input field by name
            var input = this.form.get(field);
            if (input.invalid && input.dirty) {
                // figure out the type of error
                // loop over the formErrors field names
                for (var error in input.errors) {
                    // assign that type of error message to a variable
                    this.formErrors[field] = this.validationMessages[field][error];
                }
            }
        }
        this.validateOrders();
    };
    //------------------------------------------------------------------
    /**
     * validate the addresses formarray
     */
    PatientVisitCreate.prototype.validateOrders = function () {
        // grab the addresses formarray
        var orders = this.form.get('orders');
        // clear the form errors
        this.formErrors.orders = [];
        // loop through however many formgroups are in the formarray
        var n = 1;
        while (n <= orders.length) {
            // add the clear errors back
            this.formErrors.orders.push({ type: '', notes: '', patientId: this.patientId });
            // grab the specific group (address)
            var order = orders.at(n - 1);
            // validate that specific group. loop through the groups controls
            for (var field in order.controls) {
                // get the formcontrol
                var input = order.get(field);
                // do the validation and save errors to formerrors if necessary 
                if (input.invalid && input.dirty) {
                    for (var error in input.errors) {
                        this.formErrors.orders[n - 1][field] = this.validationMessages.orders[field][error];
                    }
                }
            }
            n++;
        }
    };
    PatientVisitCreate.prototype.createOrder = function () {
        return this.fb.group({
            type: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* Validators */].required],
            notes: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* Validators */].required],
            patientId: [this.patientId]
        });
    };
    PatientVisitCreate.prototype.addAddOrder = function () {
        var orders = this.form.get('orders');
        orders.push(this.createOrder());
        //this.isHiddenOrder = true;
    };
    PatientVisitCreate.prototype.removeOrder = function (i) {
        var orders = this.form.get('orders');
        orders.removeAt(i);
    };
    //processForm() {
    //  console.log('processing', this.form.value);
    //}
    PatientVisitCreate.prototype.checkBoxSubmit = function (event) {
        this.isAddOrdersChecked = !this.isAddOrdersChecked;
    };
    PatientVisitCreate.prototype.isOrdersAvailable = function () {
        var orders = this.form.get('orders');
        var count = orders.length;
        if (count > 0)
            return true;
        return false;
    };
    return PatientVisitCreate;
}());
PatientVisitCreate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'visit-create',
        template: __webpack_require__(254)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], PatientVisitCreate);

var _a, _b, _c, _d;
//# sourceMappingURL=patientVisitCreate.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { AuthenticationService } from "./authentication.service";
//import { Repository } from "../models/repository";
var RequestConfirmComponent = (function () {
    function RequestConfirmComponent() {
        this.message = "Your account request has been successfully submitted. Your request will be reviewed for approval as soon as possible.";
    }
    return RequestConfirmComponent;
}());
RequestConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(255)
    }),
    __metadata("design:paramtypes", [])
], RequestConfirmComponent);

//# sourceMappingURL=requestconfirmation.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitDetailComponent = (function () {
    function VisitDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getVisit(id);
            this.repo.getPatientByVisitId(id);
            this.repo.getVitalSigns(id);
            this.repo.getAssessment(id);
            this.repo.getDoctorOrders(id);
            this.repo.getNurseByVisitId(id);
            this.repo.getDoctorByVisitId(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(VisitDetailComponent.prototype, "visit", {
        get: function () {
            return this.repo.visit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "patient", {
        get: function () {
            return this.repo.patient;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "vitalSigns", {
        get: function () {
            return this.repo.vitalSigns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "assessment", {
        get: function () {
            return this.repo.assessment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "orders", {
        get: function () {
            return this.repo.doctorOrders;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "nurse", {
        get: function () {
            return this.repo.nurse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisitDetailComponent.prototype, "doctor", {
        get: function () {
            return this.repo.doctor;
        },
        enumerable: true,
        configurable: true
    });
    return VisitDetailComponent;
}());
VisitDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "visit-detail",
        template: __webpack_require__(256)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], VisitDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=visitDetail.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_4_data_table__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitTableComponent = (function () {
    function VisitTableComponent(repo, router, route) {
        var _this = this;
        this.repo = repo;
        this.router = router;
        this.route = route;
        this.items = [];
        console.log("constructor VisitTable has been hit:" + this.route.snapshot);
        this.repo.getVisits()
            .subscribe(function (visits) {
            _this.visits = visits;
            _this.initializeTable(visits);
        });
    }
    /*     get visits(): Visit[] {
            return this.repo.visits;
        } */
    VisitTableComponent.prototype.selectVisit = function (id) {
        this.repo.getVisit(id);
        this.router.navigateByUrl("/visitdetail");
    };
    VisitTableComponent.prototype.initializeTable = function (visits) {
        var _this = this;
        this.tableResource = new __WEBPACK_IMPORTED_MODULE_3_angular_4_data_table__["b" /* DataTableResource */](visits);
        this.tableResource.query({ offset: 0 })
            .then(function (items) { return _this.items = items; });
        this.tableResource.count()
            .then(function (count) { return _this.itemCount = count; });
    };
    VisitTableComponent.prototype.reloadItems = function (params) {
        var _this = this;
        if (!this.tableResource)
            return;
        this.tableResource.query(params)
            .then(function (items) { return _this.items = items; });
    };
    return VisitTableComponent;
}());
VisitTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "visit-table",
        template: __webpack_require__(257)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], VisitTableComponent);

var _a, _b, _c;
//# sourceMappingURL=visitTable.component.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jwt_decode__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthenticationService = (function () {
    function AuthenticationService(repo, router, route, http) {
        this.repo = repo;
        this.router = router;
        this.route = route;
        this.http = http;
        // Observable navItem source
        this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](false);
        // Observable navItem stream
        this.authNavStatus$ = this._authNavStatusSource.asObservable();
        this.authenticated = false;
        this.isAdmin = false;
        this.tokenAuthenticated = false;
        this.tokenAuthenticated = !!sessionStorage.getItem('auth_token') && this.isNotExpiredToken();
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
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* Request */]({
            method: __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* RequestMethod */].Post,
            url: "api/token",
            body: { name: this.name, password: this.password }
        })).map(function (res) { return (res.json()); })
            .map(function (res) {
            sessionStorage.setItem('auth_token', res.token);
            var tokenPayload = __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default()(res.token);
            if (tokenPayload.roles.indexOf("Admin") > -1) {
                _this.isAdmin = true;
                sessionStorage.setItem('isAdmin', "true");
            }
            _this.tokenAuthenticated = true;
            _this._authNavStatusSource.next(true);
            _this.router.navigateByUrl(_this.callbackUrl || "/table");
            return true;
        })
            .catch(function (res) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
        });
    };
    AuthenticationService.prototype.isTokenAuthenticated = function () {
        return this.tokenAuthenticated;
    };
    // token logout
    AuthenticationService.prototype.tokenLogout = function () {
        sessionStorage.removeItem('auth_token');
        sessionStorage.removeItem('isAdmin');
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
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
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
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(false);
        });
    };
    AuthenticationService.prototype.isNotExpiredToken = function () {
        var token = sessionStorage.getItem('auth_token');
        var tokenExpirationTime = __WEBPACK_IMPORTED_MODULE_8_jwt_decode___default()(token).exp;
        var currentTime = Math.floor((new Date).getTime() / 1000);
        if (tokenExpirationTime > currentTime) {
            return true;
        }
        this.tokenAuthenticated = false;
        sessionStorage.removeItem('auth_token');
        return false;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* Http */]) === "function" && _d || Object])
], AuthenticationService);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(191);


var bootApplication = function () {
    //enableProdMode();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
};
if (true) {
    module["hot"].accept();
    module["hot"].dispose(function () {
        var oldRootElem = document.querySelector("app-root");
        var newRootElem = document.createElement("app-root");
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().destroy();
    });
}
if (document.readyState === "complete") {
    bootApplication();
}
else {
    document.addEventListener("DOMContentLoaded", bootApplication);
}
//# sourceMappingURL=boot.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overview_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userstable_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdetail_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__userrequest_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rolestable_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__roledetail_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__usersrolemanager_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__createrole_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { PatientAdminComponent } from "./patientAdmin.component";

//import { PatientDetailAdminComponent } from "./patientDetailAdmin.component";



//import { VisitDetailAdminComponent } from "./visitsDetailAdmin.component"
//import { VisitAdminComponent } from "./visitsAdmin.component"




var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_4__overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__userstable_component__["a" /* UsersTableComponent */], __WEBPACK_IMPORTED_MODULE_7__userdetail_component__["a" /* UserDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__userrequest_component__["a" /* UserRequestComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_10__rolestable_component__["a" /* RolesTableComponent */],
            __WEBPACK_IMPORTED_MODULE_11__roledetail_component__["a" /* RoleDetailComponent */], __WEBPACK_IMPORTED_MODULE_12__usersrolemanager_component__["a" /* RoleManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__createrole_component__["a" /* CreateRoleComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ErrorHandlerService } from "./services/errorHandler.service";

var AppComponent = (function () {
    //constructor(errorHandler: ErrorHandlerService, private authService: AuthenticationService) {
    //    errorHandler.errors.subscribe(error => {
    //      this.lastError = error;
    //      console.log(this.lastError);
    //    })
    //authService.login().subscribe(result => {
    //    this.isLoggedIn = result;
    //})
    //}
    function AppComponent(authService) {
        this.authService = authService;
        this.isLoggedIn = false;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(238),
        styles: [__webpack_require__(227)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_model_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__structure_patientTable_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__structure_categoryFilter_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__structure_patientDetail_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__structure_visitTable_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__structure_visitDetail_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__structure_employeeTable_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__structure_employeeDetail_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__structure_patient_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_module__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__structure_appUserCreate_Component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filter_patient_pipe__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_search_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_errorHandler_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_auth_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__layout_header_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__layout_footer_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng4_loading_spinner__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__models_resolver_model__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__structure_passwordresetconfirmation_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__structure_forgotpasswordconfirm_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__structure_requestconfirmation_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__structure_patientVisitCreate_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular_4_data_table__ = __webpack_require__(125);
/* unused harmony export handler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var eHandler = new __WEBPACK_IMPORTED_MODULE_19__services_errorHandler_service__["a" /* ErrorHandlerService */]();
function handler() {
    return eHandler;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__structure_patientTable_component__["a" /* PatientTableComponent */],
            __WEBPACK_IMPORTED_MODULE_9__structure_visitTable_component__["a" /* VisitTableComponent */], __WEBPACK_IMPORTED_MODULE_10__structure_visitDetail_component__["a" /* VisitDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__structure_categoryFilter_component__["a" /* CategoryFilterComponent */], __WEBPACK_IMPORTED_MODULE_8__structure_patientDetail_component__["a" /* PatientDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__structure_employeeTable_component__["a" /* EmployeeTableComponent */], __WEBPACK_IMPORTED_MODULE_12__structure_employeeDetail_component__["a" /* EmployeeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_16__structure_appUserCreate_Component__["a" /* AppUserCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_17__filter_patient_pipe__["a" /* PatientFilterPipe */], __WEBPACK_IMPORTED_MODULE_18__shared_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_13__structure_patient_component__["a" /* PatientComponent */],
            __WEBPACK_IMPORTED_MODULE_21__layout_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_22__layout_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_25__structure_passwordresetconfirmation_component__["a" /* PasswordResetConfirmComponent */],
            __WEBPACK_IMPORTED_MODULE_26__structure_forgotpasswordconfirm_component__["a" /* ForgotPasswordConfirmComponent */], __WEBPACK_IMPORTED_MODULE_27__structure_requestconfirmation_component__["a" /* RequestConfirmComponent */], __WEBPACK_IMPORTED_MODULE_28__structure_patientVisitCreate_component__["a" /* PatientVisitCreate */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__models_model_module__["a" /* ModelModule */],
            __WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* RoutingConfig */],
            __WEBPACK_IMPORTED_MODULE_15__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_20__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_23_ng4_loading_spinner__["a" /* Ng4LoadingSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_29_angular_4_data_table__["a" /* DataTableModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* ErrorHandler */], useFactory: handler },
            __WEBPACK_IMPORTED_MODULE_24__models_resolver_model__["a" /* PatientResolver */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//{ provide: ErrorHandlerService, useFactory: handler },
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structure_patientTable_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structure_patientDetail_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__structure_visitDetail_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__structure_visitTable_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__structure_patient_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_overview_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__structure_appUserCreate_Component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__admin_userstable_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_authentication_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_userdetail_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_userrequest_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_user_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_forgotpassword_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_resetpassword_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__admin_rolestable_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__admin_roledetail_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_usersrolemanager_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_createrole_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__structure_passwordresetconfirmation_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__structure_forgotpasswordconfirm_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__structure_requestconfirmation_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__structure_patientVisitCreate_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingConfig; });





//import { PatientCreateComponent } from "./structure/patientCreate.component";










//import { AppUserCreateAdminComponent } from "./admin/appUserCreateAdmin.Component";










//import { PatientResolver } from "./models/resolver.model";
var routes = [
    { path: "login", component: __WEBPACK_IMPORTED_MODULE_11__auth_authentication_component__["a" /* AuthenticationComponent */] },
    { path: "passwordresetconfirm", component: __WEBPACK_IMPORTED_MODULE_21__structure_passwordresetconfirmation_component__["a" /* PasswordResetConfirmComponent */] },
    { path: "forgotpasswordconfirm", component: __WEBPACK_IMPORTED_MODULE_22__structure_forgotpasswordconfirm_component__["a" /* ForgotPasswordConfirmComponent */] },
    { path: "requestconfirm", component: __WEBPACK_IMPORTED_MODULE_23__structure_requestconfirmation_component__["a" /* RequestConfirmComponent */] },
    { path: "forgotpassword", component: __WEBPACK_IMPORTED_MODULE_15__auth_forgotpassword_component__["a" /* ForgotPasswordComponent */] },
    { path: "resetpassword", component: __WEBPACK_IMPORTED_MODULE_16__auth_resetpassword_component__["a" /* ResetPasswordComponent */] },
    { path: "admin", redirectTo: "/admin/overview", pathMatch: "full" },
    {
        path: "admin", component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_component__["a" /* AdminComponent */],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]],
        data: {
            expectedRole: 'Admin'
        },
        children: [
            { path: "overview", component: __WEBPACK_IMPORTED_MODULE_7__admin_overview_component__["a" /* OverviewComponent */] },
            { path: "roleslist", component: __WEBPACK_IMPORTED_MODULE_17__admin_rolestable_component__["a" /* RolesTableComponent */] },
            { path: "createrole", component: __WEBPACK_IMPORTED_MODULE_20__admin_createrole_component__["a" /* CreateRoleComponent */] },
            { path: "roledetail/:id", component: __WEBPACK_IMPORTED_MODULE_18__admin_roledetail_component__["a" /* RoleDetailComponent */] },
            { path: "rolemanager/:id", component: __WEBPACK_IMPORTED_MODULE_19__admin_usersrolemanager_component__["a" /* RoleManagerComponent */] },
            { path: "userdetails/:id", component: __WEBPACK_IMPORTED_MODULE_12__admin_userdetail_component__["a" /* UserDetailComponent */] },
            { path: "user", component: __WEBPACK_IMPORTED_MODULE_14__admin_user_component__["a" /* UserComponent */] },
            { path: "user/:id", component: __WEBPACK_IMPORTED_MODULE_14__admin_user_component__["a" /* UserComponent */] },
            { path: "userslist", component: __WEBPACK_IMPORTED_MODULE_9__admin_userstable_component__["a" /* UsersTableComponent */] },
            { path: "usersrequests", component: __WEBPACK_IMPORTED_MODULE_13__admin_userrequest_component__["a" /* UserRequestComponent */] },
            { path: "", component: __WEBPACK_IMPORTED_MODULE_7__admin_overview_component__["a" /* OverviewComponent */] },
            { path: "**", redirectTo: "/admin/overview" }
        ]
    },
    //{ path: "login", component: PatientTableComponent, canActivate: [AuthenticationGuard] },
    { path: "table", component: __WEBPACK_IMPORTED_MODULE_1__structure_patientTable_component__["a" /* PatientTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]], data: { expectedRole: 'Nurse' } },
    { path: "patient/:id", component: __WEBPACK_IMPORTED_MODULE_5__structure_patient_component__["a" /* PatientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]], data: { expectedRole: 'Nurse' } },
    { path: "patient", component: __WEBPACK_IMPORTED_MODULE_5__structure_patient_component__["a" /* PatientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]], data: { expectedRole: 'Nurse' } },
    { path: "visittable", component: __WEBPACK_IMPORTED_MODULE_4__structure_visitTable_component__["a" /* VisitTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]], data: { expectedRole: 'Nurse' } },
    { path: "visitcreate/:id", component: __WEBPACK_IMPORTED_MODULE_24__structure_patientVisitCreate_component__["a" /* PatientVisitCreate */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]], data: { expectedRole: 'Nurse' } },
    { path: "detail/:id", component: __WEBPACK_IMPORTED_MODULE_2__structure_patientDetail_component__["a" /* PatientDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]], data: { expectedRole: 'Nurse' } },
    { path: "visitdetail/:id", component: __WEBPACK_IMPORTED_MODULE_3__structure_visitDetail_component__["a" /* VisitDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__auth_authentication_guard__["a" /* AuthenticationGuard */]], data: { expectedRole: 'Nurse' } },
    { path: "accountcreate", component: __WEBPACK_IMPORTED_MODULE_8__structure_appUserCreate_Component__["a" /* AppUserCreateComponent */] },
    { path: "**", redirectTo: "/login" }
];
var RoutingConfig = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = (function () {
    function AdminAuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AdminAuthGuard.prototype.canActivateChild = function (route, state) {
        if (this.authService.authenticated && this.authService.isAdmin) {
            return true;
        }
        else {
            this.authService.callbackUrl = state.url.toString();
            this.router.navigateByUrl("/login");
            return false;
        }
    };
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.authenticated && this.authService.isAdmin) {
            return true;
        }
        else {
            this.authService.callbackUrl = state.url.toString();
            this.router.navigateByUrl("/login");
            return false;
        }
    };
    return AdminAuthGuard;
}());
AdminAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AdminAuthGuard);

var _a, _b;
//# sourceMappingURL=adminauthentication.guard.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authentication_guard__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adminauthentication_guard__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forgotpassword_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resetpassword_component__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__authentication_component__["a" /* AuthenticationComponent */], __WEBPACK_IMPORTED_MODULE_8__forgotpassword_component__["a" /* ForgotPasswordComponent */], __WEBPACK_IMPORTED_MODULE_9__resetpassword_component__["a" /* ResetPasswordComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_6__authentication_guard__["a" /* AuthenticationGuard */], __WEBPACK_IMPORTED_MODULE_7__adminauthentication_guard__["a" /* AdminAuthGuard */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__authentication_component__["a" /* AuthenticationComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PatientFilterPipe = (function () {
    function PatientFilterPipe() {
    }
    PatientFilterPipe.prototype.transform = function (value, filter) {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter(function (pat) {
            return pat.firstName != null && pat.firstName.toLocaleLowerCase().indexOf(filter) != -1
                || pat.lastName != null && pat.lastName.toLocaleLowerCase().indexOf(filter) != -1
                || pat.sublocation != null && pat.sublocation.toLocaleLowerCase().indexOf(filter) != -1;
        }) : value;
    };
    return PatientFilterPipe;
}());
PatientFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'patientFilter'
    })
], PatientFilterPipe);

//# sourceMappingURL=patient.pipe.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.today = Date.now();
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'layout-footer',
        template: __webpack_require__(242)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    // isLoggedIn: boolean = false;
    function HeaderComponent(authService) {
        this.authService = authService;
        // this.name = this.authService.name;
        // this.isAdmin = this.authService.isAdmin;
        this.isAdmin = !!sessionStorage.getItem("isAdmin");
        var token = sessionStorage.getItem('auth_token');
        if (token) {
            this.name = __WEBPACK_IMPORTED_MODULE_1_jwt_decode___default()(token).sub;
        }
        //this.isLoggedIn = authService.authenticated;
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'layout-header',
        template: __webpack_require__(243)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRole; });
var AppRole = (function () {
    function AppRole(id, name) {
        this.id = id;
        this.name = name;
    }
    return AppRole;
}());

//# sourceMappingURL=approle.model.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUser; });
var AppUser = (function () {
    function AppUser(userDetailsID, title, email, password, confirmPassword, firstName, lastName, idNumber, username, phoneNumber, gender, enabled, reason, biography, imageUrl) {
        this.userDetailsID = userDetailsID;
        this.title = title;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = idNumber;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.enabled = enabled;
        this.reason = reason;
        this.biography = biography;
        this.imageUrl = imageUrl;
    }
    return AppUser;
}());

//# sourceMappingURL=appuser.model.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Assessment; });
var Assessment = (function () {
    function Assessment(assessmentId, notes, visitId, patientID, userDetailsID, date) {
        this.assessmentId = assessmentId;
        this.notes = notes;
        this.visitId = visitId;
        this.patientID = patientID;
        this.userDetailsID = userDetailsID;
        this.date = date;
    }
    return Assessment;
}());

//# sourceMappingURL=assessment.model.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
var Filter = (function () {
    function Filter() {
    }
    Filter.prototype.reset = function () {
        this.category = this.search = null;
    };
    return Filter;
}());

//# sourceMappingURL=configClasses.repository.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsOrder; });
var DoctorsOrder = (function () {
    function DoctorsOrder(orderId, visitId, date, orderType, notes) {
        this.orderId = orderId;
        this.visitId = visitId;
        this.date = date;
        this.orderType = orderType;
        this.notes = notes;
    }
    return DoctorsOrder;
}());

//# sourceMappingURL=doctorsOrder.model.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ModelModule = (function () {
    function ModelModule() {
    }
    return ModelModule;
}());
ModelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]]
    })
], ModelModule);

//# sourceMappingURL=model.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__repository__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatientResolver = (function () {
    function PatientResolver(repo) {
        this.repo = repo;
    }
    /// not used yet
    PatientResolver.prototype.resolve = function (route, state) {
        return this.repo.getAllPatients().length == 0 ? this.repo.getAllPatients() : null;
    };
    return PatientResolver;
}());
PatientResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__repository__["a" /* Repository */]) === "function" && _a || Object])
], PatientResolver);

var _a;
//# sourceMappingURL=resolver.model.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visit; });
var Visit = (function () {
    function Visit(visitId, date, complaint, background, patientID, current) {
        this.visitId = visitId;
        this.date = date;
        this.complaint = complaint;
        this.background = background;
        this.patientID = patientID;
        this.current = current;
    }
    return Visit;
}());

//# sourceMappingURL=visit.model.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VitalSigns; });
var VitalSigns = (function () {
    function VitalSigns(vitalSignsId, temperature, pulse, respiration, bloodPressure, oxygenSaturation, visitId, userDetailsID, patientID, date) {
        this.vitalSignsId = vitalSignsId;
        this.temperature = temperature;
        this.pulse = pulse;
        this.respiration = respiration;
        this.bloodPressure = bloodPressure;
        this.oxygenSaturation = oxygenSaturation;
        this.visitId = visitId;
        this.userDetailsID = userDetailsID;
        this.patientID = patientID;
        this.date = date;
    }
    return VitalSigns;
}());

//# sourceMappingURL=vitalSigns.model.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    SearchComponent.prototype.getEachChar = function (value) {
        this.change.emit(value);
    };
    SearchComponent.prototype.clearFilter = function () {
        this.listFilter = null;
        this.change.emit(null);
    };
    SearchComponent.prototype.getPasteData = function (value) {
        var pastedVal = value.clipboardData.getData('text/plain');
        this.change.emit(pastedVal);
        value.preventDefault();
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(),
    __metadata("design:type", String)
], SearchComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === "function" && _a || Object)
], SearchComponent.prototype, "change", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'search-list',
        template: __webpack_require__(244)
    })
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryFilterComponent = (function () {
    // public kiptendenCategory = "Kiptenden";
    function CategoryFilterComponent(repo) {
        this.repo = repo;
    }
    CategoryFilterComponent.prototype.setCategory = function (category) {
        this.repo.filter.category = category;
        this.repo.getPatients();
    };
    return CategoryFilterComponent;
}());
CategoryFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "category-filter",
        template: __webpack_require__(246)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object])
], CategoryFilterComponent);

var _a;
//# sourceMappingURL=categoryFilter.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(repo, router, activeRoute) {
        this.repo = repo;
        var id = Number.parseInt(activeRoute.snapshot.params["id"]);
        if (id) {
            this.repo.getEmployee(id);
        }
        else {
            router.navigateByUrl("/");
        }
    }
    Object.defineProperty(EmployeeDetailComponent.prototype, "employee", {
        get: function () {
            return this.repo.employee;
        },
        enumerable: true,
        configurable: true
    });
    return EmployeeDetailComponent;
}());
EmployeeDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "employee-detail",
        template: __webpack_require__(247)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], EmployeeDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=employeeDetail.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeTableComponent = (function () {
    function EmployeeTableComponent(repo, router) {
        this.repo = repo;
        this.router = router;
    }
    Object.defineProperty(EmployeeTableComponent.prototype, "employees", {
        get: function () {
            return this.repo.employees;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeTableComponent.prototype.selectEmployee = function (id) {
        this.repo.getEmployee(id);
        this.router.navigateByUrl("/employeedetail");
    };
    return EmployeeTableComponent;
}());
EmployeeTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "employee-table",
        template: __webpack_require__(248)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], EmployeeTableComponent);

var _a, _b;
//# sourceMappingURL=employeeTable.component.js.map

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(84)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <a class=\"navbar-brand text-white\">Digital Kilinik Admin</a>\r\n    </div>\r\n    <!--<div class=\"col text-right\">\r\n      <button class=\"btn btn-sm btn-warning\"\r\n              (click)=\"authService.logout()\">\r\n        Log Out\r\n      </button>\r\n    </div>-->\r\n  </div>\r\n</div>\r\n<div class=\"row no-gutters\">\r\n<div class=\"col-3\">\r\n    <div class=\"list-group\">\r\n      <button type=\"button\" class=\"btn btn-block btn-outline-info\" routerLink=\"/admin/overview\"\r\n              routerLinkActive=\"active\">\r\n        <i class=\"fa fa-home mr-2\"></i> Home\r\n      </button>\r\n      <!--<button class=\"btn btn-block btn-outline-info \" routerLink=\"/admin/patientslist\"\r\n              routerLinkActive=\"active\">\r\n        <i class=\"fa fa-hospital-o mr-2\"></i> Patients\r\n      </button>\r\n      <button class=\"btn btn-block btn-outline-info \" routerLink=\"/admin/visitslist\"\r\n              routerLinkActive=\"active\">\r\n        <i class=\"fa fa-list mr-2\"></i> Visits\r\n      </button>-->\r\n      <button class=\"btn btn-block btn-outline-info \" routerLink=\"/admin/userslist\"\r\n              routerLinkActive=\"active\">\r\n        <i class=\"fa fa-user-md mr-2\"></i> Users\r\n      </button>\r\n      <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin/usersrequests\"\r\n              routerLinkActive=\"active\">\r\n        <i class=\"fa fa-briefcase mr-2\"></i>  Requests\r\n      </button>\r\n      <button class=\"btn btn-block btn-outline-info\" routerLink=\"/admin/roleslist\"\r\n              routerLinkActive=\"active\">\r\n        <i class=\"fa fa-wrench mr-2\"></i> Roles\r\n      </button>\r\n    </div>\r\n</div>\r\n      <div class=\"col p-2\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n\r\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  input.ng-dirty.ng-invalid {\r\n    border: 2px solid #ff0000\r\n  }\r\n\r\n  input.ng-dirty.ng-valid {\r\n    border: 2px solid #6bc502\r\n  }\r\n</style>\r\n\r\n<div class=\"card create bor\">\r\n  <div class=\"card-body btn btn-info mb-3\">\r\n    <i class=\"fa fa-user-plus\"></i> Add new Role\r\n  </div>\r\n  <div class=\"cardbody ml-3 mr-3\">\r\n    <div class=\"form1\">\r\n      <form novalidate #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\">\r\n        <div class=\"bg-danger p-a-1 mb-1\"\r\n             *ngIf=\"formSubmitted && form.invalid\">\r\n          There are problems with the form\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newRole.name\" name=\"name\"\r\n                 #name=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || name.dirty) && name.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(name)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"mb-2 row justify-content-center align-items-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary mr-3\">Submit</button>\r\n          \r\n        </div>\r\n      </form>\r\n      <!--<button class=\"btn btn-primary\" routerLink=\"/admin/userslist\">Cancel</button>-->\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item justify-content-between\">\r\n    Total patients: <span class=\"badge badge-success badge-pill\">{{patients?.length || 0}}</span>\r\n  </li>\r\n  <li class=\"list-group-item justify-content-between\">\r\n    Total visits: <span class=\"badge badge-success badge-pill\"> {{visits?.length || 0}}</span>\r\n  </li>\r\n  <li class=\"list-group-item justify-content-between\">\r\n    Total users: <span class=\"badge badge-success badge-pill\">{{users?.length || 0}}</span>\r\n  </li>\r\n  <li class=\"list-group-item justify-content-between\">\r\n    Total account requests: <span class=\"badge badge-success badge-pill\">{{accountRequests?.length || 0}}</span>\r\n  </li>\r\n  <li class=\"list-group-item justify-content-between\">\r\n    Total roles:<span class=\"badge badge-success badge-pill\">{{roles?.length || 0}}</span>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"table table-striped table-sm table-bordered\">\r\n  <tr><th colspan=\"2\" class=\"bg-info\">Role Details</th></tr>\r\n  <tr><th>Role ID</th><td>{{ role?.id || 'Loading..' }}</td></tr>\r\n  <tr><th>Role Name</th><td>{{role?.name || 'Loading..'}}</td></tr>\r\n</table>\r\n\r\n<table class=\"table table-striped table-sm table-bordered\">\r\n  <tr><th colspan=\"3\" class=\"bg-info\">Users In Role</th></tr>\r\n  <tr *ngIf=\"users?.length > 0\"><th>First Name</th><th>Last Name</th><th>Action</th></tr>\r\n  <tr *ngFor=\"let user of users\">\r\n    <td>{{user.firstName}}</td>\r\n    <td> {{user.lastName}} </td>\r\n    <td>\r\n    <button class=\"btn btn-sm btn-warning\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Manage User Role\" [routerLink]=\"['/admin/rolemanager', user.userDetailsID]\"><i class=\"fa fa-edit\"></i></button>\r\n    </td>\r\n</tr>\r\n<tr *ngIf=\"users?.length == 0\"><td colspan=\"3\">There are no users in this role</td></tr>\r\n</table>\r\n<div class=\"text-center\">\r\n  <button class=\"btn btn-primary\" routerLink=\"/admin/roleslist\"><i class=\"fa fa-backward\"></i> Back</button>\r\n  <button class=\"btn btn-primary\" routerLink=\"/admin/roleslist\"><i class=\"fa fa-plus\"></i> Add Users To Role</button>\r\n</div> \r\n\r\n<style>\r\n  .actionbtn {\r\n    background-color: Transparent;\r\n    background-repeat: no-repeat;\r\n    border: none;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    margin-right: 0px !important;\r\n    padding: 2px;\r\n  }\r\n\r\n  .editButton {\r\n    color: #ffc805;\r\n  }\r\n\r\n  .deleteButton {\r\n    color: red;\r\n  }\r\n\r\n  .detailsButton {\r\n    color: #0571ff;\r\n  }\r\n\r\n  .enabledButton {\r\n    color: #07bc40;\r\n  }\r\n\r\n  .disabledButton {\r\n    color: #66645b;\r\n  }\r\n</style>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn btn-primary btn-sm mb-2\" routerLink=\"/admin/createrole\"><i class=\"fa fa-plus\"></i> Add Role</div>\r\n<table class=\"table table-sm table-striped table-bordered\">\r\n  <tr><th colspan=\"2\" class=\"bg-info\">Roles</th></tr>\r\n  <tr>\r\n    <th>Name</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  <tr *ngFor=\"let role of roles\">\r\n    <td>{{role.name || 'Loading Data...'}}</td>\r\n    <td>\r\n\r\n      <button class=\"btn btn-primary btn-sm\" data-toggle=\"tooltip\" data-placement=\"bottom\"  [routerLink]=\"['/admin/roledetail', role.name]\" title=\"Details\">\r\n        <i class=\"fa fa-address-card-o\"></i>\r\n      </button>\r\n      <button class=\"btn btn-sm btn-warning\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n      <button class=\"btn btn-sm btn-danger\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\"><i class=\"fa fa-trash\"></i></button>\r\n    </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<div class=\"p-1 mb-2\" style=\"width:100%\" *ngIf=\"isEdit\">\r\n  <p>Edit User</p>\r\n  <hr />\r\n</div>\r\n<div class=\"p-1 mb-2\" style=\"width:100%\" *ngIf=\"!isEdit\">\r\n  <p>Add User</p>\r\n  <hr />\r\n</div>\r\n\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\">\r\n  <div class=\"bg-danger p-a-1 mb-1\"\r\n       *ngIf=\"formSubmitted && form.invalid\">\r\n    There are problems with the form\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <input class=\"form-control input-group-sm\" [(ngModel)]=\"user.title\" name=\"title\"\r\n           #title=\"ngModel\" required type=\"text\" id=\"title\" />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || firstName.dirty) && title.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(title)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>First Name</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.firstName\" name=\"firstName\"\r\n           #firstName=\"ngModel\" required />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || firstName.dirty) && firstName.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(firstName)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Last Name</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.lastName\" name=\"lastName\"\r\n           #lastName=\"ngModel\" required />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || lastName.dirty) && lastName.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(lastName)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Email</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\"\r\n           #email=\"ngModel\" required />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || email.dirty) && email.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(email)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Username</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\"\r\n           #username=\"ngModel\" required />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || username.dirty) && username.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(username)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>National ID No.</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.idNumber\" name=\"idNumber\"\r\n           #idNumber=\"ngModel\" />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || idNumber.dirty) && idNumber.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(idNumber)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Phone</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.phoneNumber\" name=\"phoneNumber\"\r\n           #phoneNumber=\"ngModel\" />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || phoneNumber.dirty) && phoneNumber.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(phoneNumber)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Gender</label>\r\n    <select class=\"form-control\" [(ngModel)]=\"user.gender\" name=\"gender\"\r\n            #gender=\"ngModel\" required>\r\n      <option>Male</option>\r\n      <option>Female</option>\r\n    </select>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Reason</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.reason\" name=\"reason\"\r\n           #reason=\"ngModel\" required />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || reason.dirty) && reason.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(reason)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label>Biography</label>\r\n    <input class=\"form-control\" [(ngModel)]=\"user.biography\" name=\"biography\"\r\n           #biography=\"ngModel\" required />\r\n    <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || biography.dirty) && biography.invalid\">\r\n      <li *ngFor=\"let error of getValidationMessages(biography)\">\r\n        {{error}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input class=\"form-control\" [(ngModel)]=\"user.enabled\" name=\"enabled\"\r\n           type=\"hidden\"/>\r\n  </div>\r\n\r\n\r\n  <div class=\"mb-2 row justify-content-center align-items-center\">\r\n    <button type=\"submit\" class=\"btn btn-primary  mr-3\">Submit</button>\r\n    \r\n  </div>\r\n</form>\r\n<!--<button class=\"btn btn-primary\" routerLink=\"/admin/userslist\">Cancel</button>-->\r\n"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <tr><th colspan=\"2\" class=\"bg-info\">User Details</th></tr>\r\n  <tr><th>Title</th><td>{{ user?.title || 'No Data' }}</td></tr>\r\n  <tr><th>First Name</th><td>{{ user?.firstName || 'No Data' }}</td></tr>\r\n  <tr><th>Last Name</th><td>{{ user?.lastName || 'No Data' }}</td></tr>\r\n  <tr><th>Gender</th><td>{{ user?.gender || 'No Data' }}</td></tr>\r\n  <tr><th>ID Number</th><td>{{user?.idNumber || 'No Data'}}</td></tr>\r\n  <tr><th>Email</th><td>{{user?.email  || 'No Data'}}</td></tr>\r\n  <tr><th>Username</th><td>{{ user?.username || 'No Data' }}</td></tr>\r\n  <tr><th>Reason</th><td>{{ user?.reason || 'No Data' }}</td></tr>\r\n  <tr><th>Phone</th><td>{{ user?.phoneNumber || 'No Data' }}</td></tr>\r\n  <tr><th>Biography</th><td>{{ user?.biography || 'No Data' }}</td></tr>\r\n  <tr *ngIf=\"!request\"><th class=\"btn-link\" [routerLink]=\"['/admin/rolemanager', user?.userDetailsID]\">Roles</th><td>{{ userRoles || 'None' }}</td></tr>\r\n</table>\r\n<div class=\"text-center\">\r\n  <button class=\"btn btn-primary\" [routerLink]=\"[returnUrl]\"><i class=\"fa fa-backward\"></i> Back</button>\r\n  <button *ngIf=\"request\" class=\"btn btn-success\" (click)=\"approveRequest(user.userDetailsID)\"><i class=\"fa fa-thumbs-up\"></i> Approve</button>\r\n  <button *ngIf=\"request\" class=\"btn btn-danger\" (click)=\"rejectRequest(user.userDetailsID)\"><i class=\"fa fa-thumbs-down\"></i> Reject</button>\r\n</div>"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn btn-success\" style=\"width: 100%\">\r\n  User Requests\r\n</div>\r\n<div *ngIf=\"users?.length > 0; else nousers\">\r\n  <table class=\"table table-sm table-striped table-bordered\">\r\n\r\n    <tr>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th>Username</th>\r\n      <th>Action</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let user of users\">\r\n      <td>{{user.firstName || 'Loading Data...'}}</td>\r\n      <td>{{user.lastName || 'Loading Data...'}}</td>\r\n      <td>{{user.username || 'Loading Data...'}}</td>\r\n      <td>\r\n        <button class=\"btn btn-primary btn-sm\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Details\"\r\n                [routerLink]=\"['/admin/userdetails', user?.userDetailsID]\" [queryParams]=\"{returnUrl: returnUrl, request: true}\">\r\n          <i class=\"fa fa-address-card-o\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-warning\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit\"><i class=\"fa fa-pencil\"></i></button>\r\n        <button class=\"btn btn-sm btn-danger\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\"><i class=\"fa fa-trash\"></i></button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<ng-template #nousers>\r\n  <p>There are no user requests</p>\r\n</ng-template>\r\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"table table-sm table-striped table-bordered\">\r\n  <tr><th colspan=\"2\" class=\"bg-info\">Manage Roles For: {{user.firstName}} {{user.lastName}}</th></tr>\r\n  <tr>\r\n    <th>Role</th>\r\n    <th>Action</th>\r\n  </tr>\r\n  <tr *ngFor=\"let role of roles\">\r\n    <td>{{role.name || 'Loading Data...'}}</td>\r\n    <td *ngIf=\"isAssigned(role.name)\">\r\n      <button class=\"btn actionbtn enabledButton\"  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Disable\" (click)=\"removeFromRole(user.userDetailsID, role.name)\"><i class=\"fa fa-toggle-on\"></i></button>\r\n    </td>\r\n    <td *ngIf=\"!isAssigned(role.name)\">\r\n      <button class=\"btn actionbtn disabledButton\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Enable\" (click)=\"addToRole(user.userDetailsID, role.name)\"><i class=\"fa fa-toggle-on\"></i></button>\r\n    </td>\r\n  </tr>\r\n</table>\r\n<div class=\"text-center\">\r\n  <button class=\"btn btn-primary\" routerLink=\"/admin/roleslist\">Cancel</button>\r\n</div>\r\n\r\n  <style>\r\n    .actionbtn {\r\n      background-color: Transparent;\r\n      background-repeat: no-repeat;\r\n      border: none;\r\n      cursor: pointer;\r\n      overflow: hidden;\r\n      outline: none;\r\n      margin-right: 0px !important;\r\n      padding: 2px;\r\n    }\r\n\r\n    .editButton {\r\n      color: #ffc805;\r\n    }\r\n\r\n    .deleteButton {\r\n      color: red;\r\n    }\r\n\r\n    .detailsButton {\r\n      color: #0571ff;\r\n    }\r\n\r\n    .enabledButton {\r\n      color: #07bc40;\r\n    }\r\n\r\n    .disabledButton {\r\n      color: #66645b;\r\n    }\r\n  </style>\r\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn btn-success\" style=\"width: 100%\">\r\n  Users\r\n</div>\r\n<div class=\"btn btn-primary btn-sm mb-2 mt-2 customBtn\" routerLink =\"/admin/user\">\r\n  Add User\r\n</div>\r\n<table class=\"table table-sm table-striped table-bordered\">\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th>Username</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  <tr *ngFor=\"let user of users\">\r\n    <td>{{user.firstName || 'Loading Data...'}}</td>\r\n    <td>{{user.lastName || 'Loading Data...'}}</td>\r\n    <td>{{user.username || 'Loading Data...'}}</td>\r\n    <td>\r\n      <button class=\"btn btn-sm actionbtn detailsButton\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Details\"\r\n              [routerLink]=\"['/admin/userdetails', user.userDetailsID]\" [queryParams]=\"{returnUrl: returnUrl}\">\r\n        <i class=\"fa fa-address-card-o\"></i>\r\n      </button>\r\n      <button class=\"btn btn-sm actionbtn editButton\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit\"\r\n               [routerLink]=\"['/admin/user', user.userDetailsID]\">\r\n        <i class=\"fa fa-pencil editButton\"></i>\r\n      </button>\r\n      <button class=\"btn btn-sm actionbtn deleteButton\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Delete\"><i class=\"fa fa-trash\"></i></button>\r\n      <button *ngIf=\"user.enabled \" class=\"btn actionbtn enabledButton\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Disable\" (click)=\"toggle(user.userDetailsID, user.enabled)\">\r\n        <i class=\"fa fa-toggle-on\"></i>\r\n      </button>\r\n      <button *ngIf=\"!user.enabled\" class=\"btn actionbtn disabledButton\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Enable\" (click)=\"toggle(user.userDetailsID, user.enabled)\"><i  class=\"fa fa-toggle-on\"></i></button>\r\n    </td>\r\n  </tr>\r\n\r\n</table>\r\n\r\n<style>\r\n  .actionbtn {\r\n    background-color: Transparent;\r\n    background-repeat: no-repeat;\r\n    border: none;\r\n    cursor: pointer;\r\n    overflow: hidden;\r\n    outline: none;\r\n    margin-right: 0px !important;\r\n    padding: 2px;\r\n  }\r\n  .editButton {\r\n    color: #ffc805;\r\n  }\r\n  .deleteButton {\r\n    color: red;\r\n  }\r\n  .detailsButton {\r\n    color: #0571ff;\r\n  }\r\n  .enabledButton {\r\n    color: #07bc40;\r\n  }\r\n  .disabledButton {\r\n    color: #66645b;\r\n  }\r\n</style>\r\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container bodyContainer\">\r\n    <!--<div class=\"bg-danger text-white text-center p-2 m-2\" *ngIf=\"error != null\">\r\n      <h6 *ngFor=\"let e of error\">{{e}}</h6>\r\n      <button class=\"btn btn-warning\" (click)=\"clearError()\">OK</button>\r\n    </div>-->\r\n    <layout-header *ngIf=\"loggedIn\"></layout-header>\r\n    <div class=\"separator\">\r\n    </div>\r\n\r\n <div style=\"margin-bottom:15px\">\r\n      <app-spinner [loadingText]=\"'Please wait...'\"> </app-spinner>\r\n        <router-outlet></router-outlet>\r\n</div>\r\n    <!--<layout-footer></layout-footer>-->\r\n  </div>\r\n\r\n  <style>\r\n    .separator {\r\n      clear: both;\r\n    }\r\n\r\n    .bodyContainer {\r\n      background-color: aliceblue;\r\n      padding-bottom: 1px;\r\n    }\r\n  </style>\r\n"

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n  <a class=\"navbar-brand text-white\"> Login </a>\r\n</div>\r\n\r\n<div *ngIf=\"showError\" class=\"alert alert-danger\">\r\n  Invalid username or password\r\n</div>\r\n<div class=\"loginPortal\">\r\n  <form novalidate #authForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\" id=\"sizing-addon2\"><i class=\"fa fa-at\"></i></span>\r\n        <input #name=\"ngModel\" name=\"name\" class=\"form-control\"\r\n               [(ngModel)]=\"authService.name\" placeholder=\"username\" required />\r\n      </div>\r\n      <div *ngIf=\"name.invalid\" class=\"text-danger\">\r\n        Please enter your username\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\" id=\"sizing-addon2\"><i class=\"fa fa-key\"></i></span>\r\n        <input type=\"password\" #password=\"ngModel\" name=\"password\"\r\n               class=\"form-control\" [(ngModel)]=\"authService.password\" placeholder=\"password\" required />\r\n      </div>\r\n      <div *ngIf=\"password.invalid\" class=\"text-danger\">\r\n        Please enter your password\r\n      </div>\r\n    </div>\r\n    <div class=\"pt-2\">\r\n      <button class=\"btn btn-primary\" [disabled]=\"authForm.invalid\"\r\n              (click)=\"tokenLogin()\">\r\n          Login\r\n      </button>\r\n    </div>\r\n  </form>\r\n  <div class=\"\">\r\n    Don't have account?\r\n    <a routerLink=\"/accountcreate\">\r\n      Request account\r\n    </a>\r\n  </div>\r\n  <div class=\"mb-5\">\r\n    Forgot password?\r\n    <a routerLink=\"/forgotpassword\">\r\n      Reset password\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n  .loginPortal{\r\n    width: 50%;\r\n    margin: auto;\r\n    margin-top: 10%;\r\n  }\r\n  .submitBtn{\r\n    width: 30%;\r\n  }\r\n</style>"

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n  <a class=\"navbar-brand text-white\"> Password Recovery </a>\r\n</div>\r\n\r\n<div class=\"forgotPassword\">\r\n  <form novalidate #authForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\" id=\"sizing-addon2\">Email</span>\r\n        <input #email=\"ngModel\" name=\"email\" class=\"form-control\"\r\n               [(ngModel)]=\"authService.email\" placeholder=\"\" required />\r\n      </div>\r\n      <div *ngIf=\"email.invalid && email.dirty\" class=\"text-danger\">\r\n        Please enter your email\r\n      </div>\r\n    </div>\r\n    <div class=\"mb-2\">\r\n      <button class=\"btn btn-primary\" [disabled]=\"authForm.invalid\"\r\n              (click)=\"forgotpassword()\">\r\n        Submit\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<style>\r\n  .forgotPassword {\r\n    width: 50%;\r\n    margin: auto;\r\n    margin-top: 10%;\r\n  }\r\n</style>\r\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n  <a class=\"navbar-brand text-white\"> Password Management </a>\r\n</div>\r\n\r\n<div class=\"forgotPassword\">\r\n  <form novalidate #authForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\" id=\"sizing-addon2\" style=\"width:150px; text-align:left\">Email</span>\r\n        <input #email=\"ngModel\" name=\"email\" class=\"form-control\"\r\n               [(ngModel)]=\"authService.email\" placeholder=\"\" required type=\"email\"/>\r\n      </div>\r\n      <div *ngIf=\"email.invalid && email.dirty\" class=\"text-danger\">\r\n        Please enter your email\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\" id=\"sizing-addon2\" style=\"width:150px; text-align:left\">Password</span>\r\n        <input #password=\"ngModel\" name=\"password\" class=\"form-control\"\r\n               [(ngModel)]=\"authService.password\" placeholder=\"\" required type=\"password\"/>\r\n      </div>\r\n      <div *ngIf=\"password.invalid && password.dirty\" class=\"text-danger\">\r\n        Please enter password\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"input-group\">\r\n        <span class=\"input-group-addon\" id=\"sizing-addon2\" style=\"width:150px; text-align:left\">Confirm Password</span>\r\n        <input #confirmpassword=\"ngModel\" name=\"confirmpassword\" class=\"form-control\"\r\n               [(ngModel)]=\"authService.confirmpassword\" placeholder=\"\" required type=\"password\"/>\r\n      </div>\r\n      <div *ngIf=\"confirmpassword.invalid\" class=\"text-danger\">\r\n        Please enter confirm password\r\n      </div>\r\n    </div>\r\n    <!--<input type=\"hidden\" name=\"code\" [(ngModel)]=\"authService.code\" value=\"code\"/>-->\r\n    <div class=\"pt-2\">\r\n      <button class=\"btn btn-primary mb-5\" [disabled]=\"authForm.invalid\"\r\n              (click)=\"resetpassword()\">\r\n        Submit\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<style>\r\n  .forgotPassword {\r\n    width: 50%;\r\n    margin: auto;\r\n    margin-top: 10%;\r\n  }\r\n</style>\r\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"container footer\">\r\n    <a class=\"logo-font\" routerLink=\"/\">ePatientCare</a>\r\n    <span class=\"attribution\">\r\n      &copy; {{ today | date: 'yyyy' }}.\r\n      Kiptenden and Tulon Comunity Clinic Patient Management System. All Rights Reserved.\r\n    </span>\r\n  </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "<div id=\"navArea\" class=\"navArea row\">\r\n  <div>\r\n   <p class=\"btn mt-0.8 ml-2 mr-1 pb-1.1 logo\" routerLink=\"/table\"><i class=\"fa fa-medkit\" style=\"color:red\"></i> <i class=\"font-weight-bold\" style=\"color:red\">Digital</i><i>Kilinik</i></p>\r\n  </div>\r\n    <div class=\"\">\r\n      <a class=\"btn ml-1\"\r\n              routerLink=\"/table\" [routerLinkActive]=\"['active']\">\r\n        Patients\r\n      </a>\r\n    </div>\r\n    <div class=\"\" >\r\n      <a id=\"visit\"class=\"btn btn-default ml-2\"\r\n              routerLink=\"/visittable\" [routerLinkActive]=\"['active']\">\r\n        Visits\r\n      </a>\r\n    </div>\r\n  <div *ngIf=\"isAdmin\" class=\"\">\r\n    <a class=\"btn btn-default ml-2\"\r\n            routerLink=\"/admin\" [routerLinkActive]=\"['active']\">\r\n      Admin\r\n    </a>\r\n  </div>\r\n  <div class=\"col text-right mr-2\">\r\n      <a class=\"userwelcome\" routerLink=\"/login\">Welcome, {{name}}</a>\r\n      <a class=\"btn btn-default\"\r\n              (click)=\"authService.tokenLogout()\">\r\n        Log Out\r\n      </a>\r\n   </div>\r\n</div>\r\n\r\n<style>\r\n  .navArea {\r\n    background-color: #080c5e;\r\n    color: white;\r\n    height: 45px;\r\n    padding-bottom: 0;\r\n    padding-top: 5px;\r\n  }\r\n\r\n  .a{\r\n    text-decoration: none;\r\n    color: white;\r\n    \r\n  }\r\n  .btn{\r\n    padding: 7px 3px 7px 3px;\r\n    margin-top: 3px;\r\n  }\r\n\r\n  a:hover {\r\n    border: 1px solid;\r\n    outline-color: dodgerblue;\r\n    color: white;\r\n  }\r\n  .active {\r\n    border: 1px solid;\r\n    outline-color: dodgerblue;\r\n    color: white;\r\n  }\r\n  .logo:hover {\r\n    border: 1px solid;\r\n    outline-color: dodgerblue;\r\n    color: white;\r\n  }\r\n  .userwelcome {\r\n    color: dimgrey !important;\r\n    padding-top: 5px;\r\n\r\n  }\r\n  .userwelcome:hover {\r\n    text-decoration: underline !important;\r\n    border: none;\r\n    cursor: pointer;\r\n    color: deepskyblue !important;\r\n  }\r\n \r\n\r\n</style>\r\n\r\n\r\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = " <div class=\"form-inline\">\r\n  <div class=\"form-group\">\r\n    {{title}}\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"input-group ml-2 mb-2 mr-sm-2 mb-sm-0\">\r\n      <div class=\"input-group-addon\"><i class=\"fa fa-search\"></i></div>\r\n      <input class=\"input p-1\" placeholder=\"search\" (paste)=\"getPasteData($event)\" (keyup)=\"getEachChar($event.target.value)\" type=\"text\" [(ngModel)]=\"listFilter\" /><button class=\"btn btn-sm btnCut\" (click)=\"clearFilter()\" *ngIf=\"listFilter\"><i class=\"fa fa-cut\"></i></button>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div *ngIf='listFilter'>\r\n      <div class=\"p text-muted\">Filter by: {{listFilter}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<style>\r\n  .btnCut{\r\n    background-color : white;\r\n    margin: 1px;\r\n  }\r\n</style> "

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card create bor\">\r\n    <div class=\"card-body btn btn-info mb-3\">\r\n      <i class=\"fa fa-user-plus\"></i> Account Request\r\n    </div>\r\n    <div class=\"alert alert-warning m-3\">\r\n      <p>\r\n        This form is ONLY to be used to request a new account if you do not have one already. Please complete this form accurately and your request will be reviewed for approval\r\n        as soon as possible. Ensure to supply a working email since account instructions will be send there. If you have an existing account and have forgotten your password, please click <a routerLink=\"/forgotpassword\">here</a> to reset your account password.\r\n      </p>\r\n    </div>\r\n    <div class=\"cardbody ml-3 mr-3\">\r\n      <div class=\"form1\">\r\n        <form novalidate #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\">\r\n          <div class=\"bg-danger p-a-1 mb-1\"\r\n               *ngIf=\"formSubmitted && form.invalid\">\r\n            There are problems with the form\r\n          </div>\r\n\r\n          <div class=\"form-group \">\r\n            <label>Salutation</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"newUser.title\" name=\"title\">\r\n              <option>Mr.</option>\r\n              <option>Ms.</option>\r\n              <option>Mrs.</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>First Name</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.firstName\" name=\"firstName\"\r\n                   #firstName=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || firstName.dirty) && firstName.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(firstName)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Last Name</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.lastName\" name=\"lastName\"\r\n                   #lastName=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || lastName.dirty) && lastName.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(lastName)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.email\" name=\"email\"\r\n                   #email=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || email.dirty) && email.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(email)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.username\" name=\"username\"\r\n                   #username=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || username.dirty) && username.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(username)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <!--<div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.password\" name=\"password\"\r\n                   #password=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || password.dirty) && password.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(password)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Confirm Password</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.confirmPassword\" name=\"confirmPassword\"\r\n                   #confirmPassword=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || confirmPassword.dirty) && confirmPassword.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(confirmPassword)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>-->\r\n\r\n          <div class=\"form-group\">\r\n            <label>National ID No.</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.idNumber\" name=\"idNumber\"\r\n                   #idNumber=\"ngModel\" />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || idNumber.dirty) && idNumber.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(idNumber)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Phone</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.phoneNumber\" name=\"phoneNumber\"\r\n                   #phoneNumber=\"ngModel\" />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || phoneNumber.dirty) && phoneNumber.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(phoneNumber)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"form-group \">\r\n            <label>Gender</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"newUser.gender\" name=\"gender\" #gender=\"ngModel\" required>\r\n              <option>Male</option>\r\n              <option>Female</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Reason</label>\r\n            <textarea class=\"form-control\" [(ngModel)]=\"newUser.reason\" name=\"reason\"\r\n                   #reason=\"ngModel\" required></textarea>\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || reason.dirty) && reason.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(reason)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n\r\n          </div>\r\n\r\n          <!--<div class=\"form-group\">\r\n            <label>Image Url</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"newUser.confirmPassword\" name=\"confirmPassword\"\r\n                   #confirmPassword=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || confirmPassword.dirty) && confirmPassword.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(confirmPassword)\">\r\n                {{ }}\r\n              </li>\r\n            </ul>\r\n          </div>-->\r\n\r\n          <div class=\"mb-2 row justify-content-center align-items-center\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<style>\r\n  input.ng-dirty.ng-invalid {\r\n    border: 2px solid #ff0000\r\n  }\r\n\r\n  input.ng-dirty.ng-valid {\r\n    border: 2px solid #6bc502\r\n  }\r\n  .create {\r\n    margin: auto;\r\n  }\r\n</style>"

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports = "<div class=\"m-1\">\r\n  <button class=\"btn btn-primary\" (click) =\"setCategory('kiptenden')\">Kiptenden</button>\r\n  <button class=\"btn btn-primary\" (click)=\"setCategory('Tulon')\">Tulon</button>\r\n  <button class=\"btn btn-primary\" (click)=\"setCategory(null)\">All</button>\r\n</div>\r\n"

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped\">\r\n  <tr><th colspan=\"2\" class=\"bg-info\">Employee</th></tr>\r\n  <tr><th>Title</th><td>{{ employee?.title || 'No Data' }}</td></tr>\r\n  <tr><th>First Name</th><td>{{ employee?.firstName || 'No Data' }}</td></tr>\r\n  <tr><th>Last Name</th><td>{{ employee?.lastName || 'No Data' }}</td></tr>\r\n  <tr><th>ID Number</th><td>{{employee?.idNumber || 'No Data'}}</td></tr>\r\n  <tr><th>Email</th><td>{{employee?.email  || 'No Data'}}</td></tr>\r\n  <tr><th>Username</th><td>{{ employee?.username || 'No Data' }}</td></tr>\r\n  <tr><th>Phone</th><td>{{ employee?.phone || 'No Data' }}</td></tr>\r\n  <tr><th>Biography</th><td>{{ employee?.biography || 'No Data' }}</td></tr>\r\n</table>\r\n<div class=\"text-center\">\r\n  <button class=\"btn btn-primary\" routerLink=\"/employeetable\">Back</button>\r\n</div>"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "<div class=\"btn btn-success\" style=\"width: 100%\">\r\n  Employees\r\n</div>\r\n\r\n<table class=\"table table-sm table-striped\">\r\n  <tr>\r\n    <th>First Name</th>\r\n    <th>Last Name</th>\r\n    <th>Phone</th>\r\n    <th></th>\r\n  </tr>\r\n  <tr *ngFor=\"let employee of employees\">\r\n    <td>{{employee.firstName || 'Loading Data...'}}</td>\r\n    <td>{{employee.lastName || 'Loading Data...'}}</td>\r\n    <td>{{employee.phone || 'Loading Data...'}}</td>\r\n    <td>\r\n      <button class=\"btn btn-primary btn-sm\"\r\n              [routerLink]=\"['/employeedetail', employee.employeeID]\">\r\n        Details\r\n      </button>\r\n    </td>\r\n  </tr>\r\n\r\n</table>"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n  <a class=\"navbar-brand text-white\"> Email Sent Confirmation </a>\r\n</div>\r\n\r\n<div class=\"alert alert-success mt-3\">\r\n  <div class=\"card-body\">{{message}}</div>\r\n</div>\r\n<div class=\"btn btn-primary mt-4\" routerLink=\"/login\">\r\n  Login\r\n</div>"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n  <a class=\"navbar-brand text-white\"> Password Reset Confirmation </a>\r\n</div>\r\n\r\n<div class=\"alert alert-success mt-3\">\r\n  <div class=\"card-body\">{{message}}</div>\r\n</div>\r\n<div class=\"btn btn-primary mt-4\" routerLink=\"/login\">\r\n  Login\r\n</div>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\n  input.ng-dirty.ng-invalid {\r\n    border: 2px solid #ff0000\r\n  }\r\n\r\n  input.ng-dirty.ng-valid {\r\n    border: 2px solid #6bc502\r\n  }\r\n</style>\r\n\r\n<div class=\"card create\">\r\n  <div class=\"m-2\" *ngIf=\"isEdit\">\r\n    <h5> <i class=\"fa fa-edit\" style=\"color: #006abc\"></i> Edit Patient</h5>\r\n  </div>\r\n  <div class=\"m-2\" *ngIf=\"!isEdit\">\r\n    <h5> <i class=\"fa fa-user-plus\" style=\"color: #006abc\"></i> Add New Patient</h5>\r\n  </div>\r\n  <div class=\"cardbody ml-3 mr-3\">\r\n    <div class=\"form1\">\r\n      <form novalidate #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\">\r\n        <div class=\"bg-danger p-a-1 mb-1\"\r\n             *ngIf=\"formSubmitted && form.invalid\">\r\n          There are problems with the form\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>First Name</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.firstName\" name=\"fname\"\r\n                 #fname=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || fname.dirty) && fname.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(fname)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Last Name</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.lastName\" name=\"lname\"\r\n                 #lname=\"ngModel\" required />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || lname.dirty) && lname.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(lname)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Middle Name</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.middleName\" name=\"mname\"\r\n                 #mname=\"ngModel\" />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || mname.dirty) && mname.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(mname)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>DOB</label>\r\n          <input class=\"form-control\" [ngModel]=\"patient.dob | date:'yyyy-MM-dd'\" (ngModelChange)=\"patient.dob = $event\" type=\"date\"  name=\"dob\"\r\n                 #dob=\"ngModel\" required />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || dob.dirty) && dob.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(dob)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Place of Birth</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.placeOfBirth\" name=\"pob\"\r\n                 #pob=\"ngModel\" required />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || pob.dirty) && pob.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(pob)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Gender</label>\r\n          <select class=\"form-control\" [(ngModel)]=\"patient.gender\" name=\"gender\"\r\n                  #gender=\"ngModel\" required>\r\n            <option value=\"\"></option>\r\n            <option value=\"Male\">Male</option>\r\n            <option value=\"Female\">Female</option>\r\n          </select>\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || gender.dirty) && gender.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(gender)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Sublocation</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.sublocation\" name=\"sublocation\"\r\n                 #sublocation=\"ngModel\" required />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || sublocation.dirty) && sublocation.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(sublocation)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Phone</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.phone\" name=\"phone\"\r\n                 #phone=\"ngModel\" />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || phone.dirty) && phone.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(phone)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Email</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.email\" name=\"email\"\r\n                 #email=\"ngModel\" />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || email.dirty) && email.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(email)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\">\r\n          <label>ID Number</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"patient.idNumber\" name=\"idNumber\"\r\n                 #idNumber=\"ngModel\" />\r\n        </div>\r\n        <ul class=\"text-danger list-unstyled\" *ngIf=\"(formSubmitted || idNumber.dirty) && idNumber.invalid\">\r\n          <li *ngFor=\"let error of getValidationMessages(idNumber)\">\r\n            {{error}}\r\n          </li>\r\n        </ul>\r\n\r\n        <div class=\"mb-2 row justify-content-center align-items-center\">\r\n          <button type=\"button\" class=\"btn btn-primary mr-3\" routerLink=\"/table\"><i class=\"fa fa-backward\"></i> Back</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n        </div>\r\n      </form>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n<style>\r\n  .create {\r\n    margin: auto;\r\n  }\r\n</style>\r\n\r\n"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-sm\">\r\n  <tr><th colspan=\"2\" class=\"bg-info\">Patient Details</th></tr>\r\n  <tr><th>First Name</th><td>{{ patient?.firstName || 'No Data' }}</td></tr>\r\n  <tr><th>Last Name</th><td>{{ patient?.lastName || 'No Data' }}</td></tr>\r\n  <tr><th>Middle Name</th><td>{{ patient?.middleName || 'No Data' }}</td></tr>\r\n  <tr><th>Date of Birth</th><td>{{patient?.dob | date: 'mediumDate' || 'No Data'}}</td></tr>\r\n  <tr><th>Gender</th><td>{{patient?.gender || 'No Data'}}</td></tr>\r\n  <tr><th>Place of Birth</th><td>{{ patient?.placeOfBirth  || 'No Data'}}</td></tr>\r\n  <tr><th>Sublocation</th><td>{{ patient?.sublocation || 'No Data' }}</td></tr>\r\n  <tr><th>Phone</th><td>{{ patient?.phone || 'No Data' }}</td></tr>\r\n  <tr><th>Email</th><td>{{ patient?.email || 'No Data' }}</td></tr>\r\n  <tr><th>ID Number</th><td>{{ patient?.idNumber || 'No Data' }}</td></tr>\r\n</table>\r\n\r\n\r\n <div *ngIf =\"totalVisits > 0; else elseBlock\" class=\"card text-left\">\r\n <div class=\"card-header bg-info\">\r\n   <h6>Patient Visits</h6>\r\n </div>\r\n   <div class=\"card-block pb-0\">\r\n     <table class=\"table table-sm table-striped table-bordered\">\r\n       <tr>\r\n         <th></th>\r\n         <th>Date</th>\r\n         <th>Complain</th>\r\n         <th>Background</th>\r\n         <th></th>\r\n       </tr>\r\n       <tr *ngFor=\"let visit of visits; index as i\">\r\n         <td>{{i + 1}}</td>\r\n         <td>{{visit?.date | date: 'mediumDate' || 'No Data'}}</td>\r\n         <td>{{visit?.complaint || 'No Data'}}</td>\r\n         <td>{{visit?.background ||'No Data'}}</td>\r\n         <td>\r\n           <button class=\"btn btn-primary btn-sm\"\r\n                   [routerLink]=\"['/visitdetail', visit?.visitId]\">\r\n             Details\r\n           </button>\r\n         </td>\r\n       </tr>\r\n     </table>\r\n   </div>\r\n   <div class=\"card-footer bg-gray\">\r\n    {{totalVisits}} total visit(s)\r\n   </div>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <div class=\"card text-left\">\r\n    <div class=\"card-header bg-info\">\r\n      <h5>Patient Visits</h5>\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <p class=\"card-text\">No visits available for this patient.</p>\r\n    </div>\r\n    <div class=\"card-footer text-muted bg-info\">\r\n       {{totalVisits}} total visit(s)\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n<div class=\"text-center mt-3\">\r\n  <button class=\"btn btn-primary\" routerLink=\"/table\">Back</button>\r\n  <button class=\"btn btn-success\" routerLink=\"/table\" [disabled]=\"!totalVisits\"><i class=\"fa fa-file-pdf-o\"></i> Export</button>\r\n</div>\r\n\r\n<style>\r\n  .tbody{\r\n    margin: 0px !important;\r\n    padding: 0px !important;\r\n  }\r\n</style>\r\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"mt-2 mb-0\">\r\n  <h4 class=\"p-0\" *ngIf=\"!isCheckedIn\">Registerd Patients</h4>\r\n  <h4 class=\"p-0\" *ngIf=\"isCheckedIn\">Current Patients</h4>\r\n</div>\r\n  <div>\r\n    <search-list [title]='searchTitle' (change)=\"criteriaChange($event)\" class=\"m-2\"></search-list>\r\n    <div *ngIf=\"isCheckedIn\" class=\"btn btn-primary pull-right mb-3\" (click)=\"registeredPatients()\"> Registered Patients </div>\r\n    <div *ngIf=\"!isCheckedIn\" class=\"btn btn-primary pull-right\" (click)=\"checkedInPatients()\"><span class=\"badge badge-success badge-pill\">{{checkedInPatientsCount}}</span> Checked In Patients </div>\r\n    <button *ngIf=\"!isCheckedIn\" class=\"btn btn-primary mt-2\" routerLink=\"/patient\"><i class=\"fa fa-user-plus\"></i> Add Patient</button>\r\n  </div>\r\n  <table class=\"table table-sm table-striped table-bordered m-2 p-1\">\r\n    <tr>\r\n      <th></th>\r\n      <th>First Name</th>\r\n      <th>Last Name</th>\r\n      <th>DOB</th>\r\n      <th>Sublocation</th>\r\n      <th>Action</th>\r\n    </tr>\r\n    <tr *ngFor=\"let pat of patients | patientFilter: listFilter; index as i\">\r\n      <td>{{i + 1}}</td>\r\n      <td>{{pat?.firstName ||'Loading Data...'}}</td>\r\n      <td>{{pat?.lastName || 'Loading Data...'}}</td>\r\n      <td>{{pat?.dob | date: 'mediumDate' || 'Loading Data...'}}</td>\r\n      <td>{{pat?.sublocation || 'Loading Data...'}}</td>\r\n      <td>\r\n        <button class=\"btn btn-sm btn-primary\" [hidden]=\"isCheckedIn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Check In\" [routerLink]=\"['/visitcreate', pat?.patientID]\"><i class=\"fa fa-sign-in\"></i></button>\r\n        <button class=\"btn btn-primary btn-sm\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Details\"\r\n                [routerLink]=\"['/detail', pat?.patientID]\">\r\n          <i class=\"fa fa-address-card-o\"></i>\r\n        </button>\r\n        <button class=\"btn btn-sm btn-warning\" [hidden]=\"isCheckedIn\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Edit\"\r\n                [routerLink]=\"['/patient', pat?.patientID]\">\r\n        <i class=\"fa fa-pencil\"></i></button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "\r\n<style>\r\n  input.ng-dirty.ng-invalid {\r\n    border: 2px solid #ff0000\r\n  }\r\n\r\n  input.ng-dirty.ng-valid {\r\n    border: 2px solid #6bc502\r\n  }\r\n  select.ng-dirty.ng-invalid {\r\n    border: 2px solid #ff0000\r\n  }\r\n\r\n  select.ng-dirty.ng-valid {\r\n    border: 2px solid #6bc502\r\n  }\r\n  #editVisit{\r\n    visibility: visible;\r\n  }\r\n  textarea.ng-dirty.ng-invalid {\r\n    border: 2px solid #ff0000\r\n  }\r\n\r\n  textarea.ng-dirty.ng-valid {\r\n    border: 2px solid #6bc502\r\n  }\r\n\r\n  #editVisit {\r\n    visibility: visible;\r\n  }\r\n  #createVisit{\r\n    visibility:hidden;\r\n  }\r\n</style>\r\n<!--<div *ngIf=\"visit.visitId > 0\" class=\"alert alert-success\">\r\n    <p> Visit is there id is {{visit?.visitId}}</p>\r\n</div>-->\r\n\r\n<!-- Edit Visit-->\r\n\r\n\r\n<!--<div id=\"editVisit\">\r\n  <div class=\"card create bor\">\r\n    <div class=\"card-body btn btn-info mb-3\">\r\n      <i class=\"fa fa-user-plus\"></i> Edit Visit Record - {{patient.firstName}} {{patient?.lastName}}\r\n    </div>\r\n    <div class=\"cardbody ml-3 mr-3\">\r\n      <div class=\"form4\">\r\n        <form novalidate #form4=\"ngForm\" (ngSubmit)=\"submitVisit(form4)\">\r\n          <div class=\"alert alert-danger\"\r\n               *ngIf=\"visitFormSubmitted && form4.invalid\">\r\n            There are problems with the form\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Complaint</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"visit.complaint\" name=\"complaint\"\r\n                   #complaint=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(visitFormSubmitted || complaint.dirty) && complaint.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(complaint)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Background</label>\r\n            <input class=\"form-control\" [(ngModel)]=\"visit.background\" name=\"background\"\r\n                   #background=\"ngModel\" required />\r\n            <ul class=\"text-danger list-unstyled\" *ngIf=\"(visitFormSubmitted || background.dirty) && background.invalid\">\r\n              <li *ngFor=\"let error of getValidationMessages(background)\">\r\n                {{error}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"mb-2 row justify-content-center align-items-center\">\r\n            <button type=\"submit\" class=\"btn btn-primary mr-3\">Save</button>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<div *ngIf=\"isVisitSaved\" class=\"card mt-2\">\r\n  <div class=\"card card\">\r\n    <div class=\"card card-header bg-info text-center\" style=\"color:white\">\r\n      Background Info\r\n    </div>\r\n    <div class=\"card-body m-2\">\r\n      <table class=\"table table-striped table-sm table-bordered\">\r\n        <!--<tr><th colspan=\"2\" class=\"btn btn-info text-center\">Background Info</th></tr>-->\r\n        <tr><th style=\"width:50%\">Complaint</th><td>{{ visit?.complaint || 'No Data' }}</td></tr>\r\n        <tr><th style=\"width:50%\">Background</th><td>{{ visit?.background || 'No Data' }}</td></tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- New Visit-->\r\n\r\n\r\n<div *ngIf=\"!isVisitSaved\" class=\"card mt-4\">\r\n  <div class=\"card card-header text-center bg-info\" style=\"color:white\">\r\n               New Visit Record - {{patient?.firstName}} {{patient?.lastName}}\r\n  </div>\r\n  <div class=\"m-3 card-body\">\r\n      <form novalidate #form1=\"ngForm\" (ngSubmit)=\"submitVisit(form1)\">\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"visitFormSubmitted && form1.invalid\">\r\n          There are problems with the form\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Complaint</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newVisit.complaint\" name=\"complaint\"\r\n                 #complaint=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(visitFormSubmitted || complaint.dirty) && complaint.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(complaint)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Background</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newVisit.background\" name=\"background\"\r\n                 #background=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(visitFormSubmitted || background.dirty) && background.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(background)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"mb-2 row justify-content-center align-items-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary mr-3\">Save</button>\r\n\r\n        </div>\r\n      </form>\r\n  </div>\r\n</div>\r\n\r\n<!--Vital signs create section-->\r\n\r\n<div *ngIf=\"!isVitalSignsSaved && isVisitSaved\" class=\"card mt-4\">\r\n  <div class=\"card card-header bg-info text-center\" style=\"color:white\">\r\n     Enter Patient's Vital Signs  - {{patient?.firstName}} {{patient?.lastName}}\r\n  </div>\r\n  <div class=\"card-body m-3\">\r\n    <div class=\"form1\">\r\n      <form novalidate #form=\"ngForm\" (ngSubmit)=\"submitVitalSigns(form)\">\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"vitalSignsFormSubmitted && form.invalid\">\r\n          There are problems with the form\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Temperature</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newVitalSigns.temperature\" name=\"temperature\"\r\n                 #temperature=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(vitalSignsFormSubmitted || temperature.dirty) && temperature.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(temperature)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Pulse</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newVitalSigns.pulse\" name=\"pulse\"\r\n                 #pulse=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(vitalSignsFormSubmitted || pulse.dirty) && pulse.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(pulse)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Respiration</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newVitalSigns.respiration\" name=\"respiration\"\r\n                 #respiration=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(vitalSignsFormSubmitted || respiration.dirty) && respiration.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(respiration)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Blood Pressure</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newVitalSigns.bloodPressure\" name=\"bloodPressure\"\r\n                 #bloodPressure=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(vitalSignsFormSubmitted || bloodPressure.dirty) && bloodPressure.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(bloodPressure)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Oxygen Saturation</label>\r\n          <input class=\"form-control\" [(ngModel)]=\"newVitalSigns.oxygenSaturation\" name=\"oxygenSaturation\"\r\n                 #oxygenSaturation=\"ngModel\" required />\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(vitalSignsFormSubmitted || oxygenSaturation.dirty) && oxygenSaturation.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(oxygenSaturation)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"mb-2 row justify-content-center align-items-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary mr-3\">Save</button>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Vital sings details info -->\r\n\r\n<div *ngIf=\"isVitalSignsSaved\" class=\"card mt-2\">\r\n  <div class=\"card card\">\r\n    <div class=\"card card-header bg-info text-center\" style=\"color:white\">\r\n      Vital Signs  - {{patient?.firstName}} {{patient?.lastName}}\r\n    </div>\r\n    <div class=\"card-body m-2\">\r\n      <table class=\"table table-striped table-sm table-bordered\">\r\n        <!--<tr><th colspan=\"2\" class=\"btn btn-info text-center\">Background Info</th></tr>-->\r\n        <tr><th style=\"width:40%\">Temperature</th><td>{{ vitalSigns?.temperature || 'No Data' }}</td></tr>\r\n        <tr><th style=\"width:40%\">Pulse</th><td>{{ vitalSigns?.pulse || 'No Data' }}</td></tr>\r\n        <tr><th style=\"width:40%\">Respiration</th><td>{{ vitalSigns?.respiration || 'No Data' }}</td></tr>\r\n        <tr><th style=\"width:40%\">Blood Pressure</th><td>{{ vitalSigns?.bloodPressure || 'No Data' }}</td></tr>\r\n        <tr><th style=\"width:40%\">Oxygen Saturation</th><td>{{ vitalSigns?.oxygenSaturation || 'No Data' }}</td></tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Doctor's assessment details section -->\r\n\r\n<div *ngIf=\"isAssessmentSaved\" class=\"card mt-2\">\r\n  <div class=\"card card\">\r\n    <div class=\"card card-header bg-info text-center\" style=\"color:white; padding-top: 1px\">\r\n      <span>\r\n        <i class=\"fa fa-edit editBtn pull-right\"></i>\r\n      </span>\r\n      Doctor's Assessment  - {{patient?.firstName}} {{patient?.lastName}}\r\n    </div>\r\n    <div class=\"card-body m-2\">\r\n      <table class=\"table table-striped table-sm table-bordered\">\r\n        <!--<tr><th colspan=\"2\" class=\"btn btn-info text-center\">Background Info</th></tr>-->\r\n        <tr><th style=\"width:40%\">Notes</th><td>{{ assessment?.notes || 'No Data' }}</td></tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Doctor's assessment create section -->\r\n\r\n<div *ngIf=\"!isAssessmentSaved && isVitalSignsSaved\" class=\"card mt-5\">\r\n  <div class=\"card-header bg-info text-center\" style=\"color:white\">\r\n    Doctor's Assessment - {{patient?.firstName}} {{patient?.lastName}}\r\n  </div>\r\n  <div class=\"card-body m-3\">\r\n      <form novalidate #form3=\"ngForm\" (ngSubmit)=\"submitAssessment(form3)\">\r\n        <div class=\"alert alert-danger\"\r\n             *ngIf=\"assessmentFormSubmitted && form3.invalid\">\r\n          There are problems with the form\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Assessment Notes</label>\r\n          <textarea class=\"form-control\" [(ngModel)]=\"newAssessment.notes\" name=\"notes\"\r\n                 #notes=\"ngModel\" required></textarea>\r\n          <ul class=\"text-danger list-unstyled\" *ngIf=\"(assessmentFormSubmitted || notes.dirty) && notes.invalid\">\r\n            <li *ngFor=\"let error of getValidationMessages(notes)\">\r\n              {{error}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n\r\n        <div class=\"mb-2 row justify-content-center align-items-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary mr-3\">Save</button>\r\n\r\n        </div>\r\n      </form>\r\n  </div>\r\n</div>\r\n\r\n<!-- Add doctors orders-->\r\n<div class=\"form-check mt-3\" *ngIf=\"isAssessmentSaved\">\r\n  <label class=\"form-check-label\">\r\n    <input type=\"checkbox\" class=\"form-check-input\" (click)=\"checkBoxSubmit($event)\">\r\n    Check this box to add Pharmacy, Lab or Imaging Orders\r\n  </label>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!isOrdersSaved\" class=\"mt-4\" [style.display]=\"isAddOrdersChecked? 'inherit':'none'\">\r\n  <form (ngSubmit)=\"submitOrders()\" [formGroup]=\"form\">\r\n\r\n    <div class=\"form-group\" formArrayName=\"orders\">\r\n      <div *ngFor=\"let order of form.controls.orders.controls;let i=index;\">\r\n\r\n        <div class=\"card mb-3\">\r\n          <div class=\"card-header bg-info text-center\" style=\"color:white\">\r\n            Order #{{ i + 1 }}\r\n\r\n            <span (click)=\"removeOrder(i)\" class=\"pull-right btnClose\" style=\"color:red\">\r\n              x\r\n            </span>\r\n          </div>\r\n\r\n          <div class=\"card-block\" [formGroupName]=\"i\">\r\n            <div class=\"form-group\">\r\n              <label for=\"type\">Type</label>\r\n              <select class=\"form-control\" formControlName=\"type\" id=\"type\" required>\r\n                <option></option>\r\n                <option>Pharmacy</option>\r\n                <option>Lab</option>\r\n                <option>Imaging</option>\r\n              </select>\r\n              <span class=\"help-block\" *ngIf=\"formErrors.orders[i].type\" style=\"color:red\">\r\n                {{ formErrors.orders[i].type }}\r\n              </span>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label>Notes</label>\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"notes\" required>\r\n\r\n              <span class=\"help-block\" *ngIf=\"formErrors.orders[i].notes\" style=\"color:red\">\r\n                {{ formErrors.orders[i].notes }}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <!-- add order button -->\r\n    <div class=\"text-left orderAdd\">\r\n      <a (click)=\"addAddOrder()\">Add Order</a>\r\n    </div>\r\n\r\n    <div class=\"form-group text-center\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- Doctor's orders details-->\r\n<div *ngIf=\"isOrdersSaved\" class=\"card mt-2\">\r\n  <div class=\"card card\">\r\n    <div class=\"card card-header bg-info text-center\" style=\"color:white; padding-top: 1px\">\r\n      <span>\r\n        <i class=\"fa fa-edit editBtn pull-right\"></i>\r\n      </span>\r\n      Doctor's Orders  - {{patient?.firstName}} {{patient?.lastName}}\r\n    </div>\r\n    <div class=\"card-body m-2\">\r\n      <table class=\"table table-striped table-sm table-bordered\">\r\n        <tr *ngFor=\"let order of doctorsOrder\">\r\n          <td>{{ order?.orderType ||'No Data'}}</td>\r\n          <td>{{ order?.notes ||'No Data'}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--[style.display]=\"isOrdersAvailable()? 'inherit':'none'\"-->\r\n<style>\r\n  .create {\r\n    margin: auto;\r\n  }\r\n  .orderAdd{\r\n    text-decoration: underline;\r\n    cursor: pointer;\r\n    color: dodgerblue;\r\n  }\r\n  .btnClose{\r\n    cursor: pointer\r\n  }\r\n  .hideOrders{\r\n    display : none;\r\n  }\r\n  .editBtn {\r\n    color: #f0ad4e;\r\n    cursor: pointer;\r\n  }\r\n  /*.displayOrders{\r\n    display: block;\r\n  }*/\r\n</style>\r\n\r\n\r\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar bg-info mb-1\">\r\n  <a class=\"navbar-brand text-white\"> Account Request Confirmation </a>\r\n</div>\r\n\r\n<div class=\"alert alert-success mt-3\">\r\n  <div class=\"card-body\">{{message}}</div>\r\n</div>\r\n<div class=\"btn btn-primary mt-4\" routerLink=\"/login\">\r\n  Login\r\n</div>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = "\r\n  <table class=\"table table-striped table-sm table-bordered\">\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Visit</th></tr>\r\n    <!--<tr><th>ID</th><td>{{ visit?.visitId || 'No Data' }}</td></tr>-->\r\n    <tr><td>Date</td><td>{{visit?.date | date: 'mediumDate' || 'No Data'}}</td></tr>\r\n    <tr><td>Complaint</td><td>{{visit?.complaint || 'No Data'}}</td></tr>\r\n    <tr><td>Background</td><td>{{visit?.background || 'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Patient</th></tr>\r\n    <tr><td>First Name</td><td>{{patient?.firstName ||'No Data'}}</td></tr>\r\n    <tr><td>Last Name</td><td>{{patient?.lastName ||'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Nurse</th></tr>\r\n    <tr><td>First Name</td><td>{{ nurse?.firstName ||'No Data'}}</td></tr>\r\n    <tr><td>Last Name</td><td>{{ nurse?.lastName ||'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Vital Signs</th></tr>\r\n    <tr><td>Temperature</td><td>{{vitalSigns?.temperature ||'No Data'}}</td></tr>\r\n    <tr><td>Pulse</td><td>{{vitalSigns?.pulse ||'No Data'}}</td></tr>\r\n    <tr><td>Respiration</td><td>{{vitalSigns?.respiration ||'No Data'}}</td></tr>\r\n    <tr><td>Blood Pressure</td><td>{{vitalSigns?.bloodPressure ||'No Data'}}</td></tr>\r\n    <tr><td>Oxygen Saturation</td><td>{{vitalSigns?.oxygenSaturation ||'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Doctor</th></tr>\r\n    <tr><td>First Name</td><td>{{ doctor?.firstName ||'No Data'}}</td></tr>\r\n    <tr><td>Last Name</td><td>{{ doctor?.lastName ||'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Doctor's Assessment</th></tr>\r\n    <tr><td>Notes</td><td>{{assessment?.notes ||'No Data'}}</td></tr>\r\n    <tr><th colspan=\"2\" class=\"bg-info\">Doctor's Orders</th></tr>\r\n    <tr *ngIf=\"orders.length > 0\"><th>Order Type</th><th>Notes</th></tr>\r\n    <tr *ngFor =\"let order of orders\">\r\n         <td>{{ order?.orderType ||'No Data'}}</td>\r\n         <td>{{ order?.notes ||'No Data'}}</td>\r\n    </tr>\r\n    <tr *ngIf=\"orders.length == 0\"><td colspan=\"2\">There are no doctor's orders</td></tr>\r\n  </table>\r\n  <div class=\"text-center\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/visittable\"><i class=\"fa fa-backward\"></i> Back</button>\r\n  </div>\r\n\r\n  <style>\r\n    .table tr th{\r\n      width: 100px !important;\r\n    }\r\n    .bg-info {\r\n      background-color: #d8d8d8 !important;\r\n    }\r\n  </style>\r\n"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: auto; max-width: 1000px; margin-bottom: 50px;\">\r\n<data-table [items]=\"items\" [itemCount]=\"itemCount\" [pagination_limit]=\"true\" [pagination_range]=\"true\" \r\n   headerTitle=\"Visit Records\" [pagination_input]=\"false\" [pagination_numbers]=\"false\"  (reload)=\"reloadItems($event)\">\r\n\r\n  <data-table-column [property]=\"'date'\" [header]=\"'Date'\" [sortable]=\"true\" [resizable]=\"true\" [width]=\"120\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      {{item.date | date: 'mediumDate' || 'No Data'}}\r\n    </ng-template>\r\n  </data-table-column>\r\n\r\n  <data-table-column [property]=\"'complaint'\" [header]=\"'Complaint'\" [sortable]=\"true\" [resizable]=\"true\">\r\n  </data-table-column>\r\n\r\n  <data-table-column [property]=\"'background'\" [header]=\"'Background'\" [sortable]=\"true\" [resizable]=\"true\" [width]=\"400\">\r\n  </data-table-column>\r\n\r\n  <data-table-column [property]=\"'visitId'\" [width]=\"120\">\r\n    <ng-template #dataTableCell let-item=\"item\">\r\n      <a [routerLink]=\"['/visitdetail', item.visitId]\">Details</a>\r\n    </ng-template>\r\n  </data-table-column>\r\n\r\n</data-table>\r\n</div>\r\n<!-- <table class=\"table table-sm table-striped table-bordered\">\r\n  <tr>\r\n    <th>Date</th>\r\n    <th>Complaint</th>\r\n    <th>Background</th>\r\n    <th>Actions</th>\r\n  </tr>\r\n  <tr *ngFor=\"let visit of visits\">\r\n    <td>{{visit?.date | date: 'mediumDate' || 'No Data'}}</td>\r\n    <td>{{visit?.complaint || 'No Data'}}</td>\r\n    <td>{{visit?.background ||'No Data'}}</td>\r\n    <td>\r\n      <button class=\"btn btn-primary btn-sm\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Details\"\r\n              [routerLink]=\"['/visitdetail', visit?.visitId]\">\r\n        <i class=\"fa fa-address-card\"></i>\r\n      </button>\r\n    </td>\r\n  </tr>\r\n\r\n</table> -->\r\n<style>\r\n/*:host /deep/ .data-table-row {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n} */\r\n.override input-group-addon{\r\n  width: 90px;\r\n}\r\n.h4{\r\n  font-size: 0.75rem !important;\r\n}\r\n</style>\r\n"

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
module.exports = __webpack_require__(186);


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configClasses_repository__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_errorHandler_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__ = __webpack_require__(143);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Repository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import 'rxjs/add/operator/delay';




var patientsUrl = "api/patients";
var employeesUrl = "api/employees";
var visitsUrl = "api/visits";
var addRequestUrl = "api/addrequest";
var Repository = (function () {
    function Repository(http, spinnerService) {
        var _this = this;
        this.http = http;
        this.spinnerService = spinnerService;
        this.filterObject = new __WEBPACK_IMPORTED_MODULE_4__configClasses_repository__["a" /* Filter */]();
        this.getPatients();
        this.getVisits().subscribe(function (visits) { return _this.visits = visits; });
        //this.getCheckedInPatients();
    }
    Repository.prototype.getPatient = function (id) {
        var _this = this;
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/patients/" + id)
            .subscribe(function (response) { _this.patient = response; });
    };
    Repository.prototype.get_Patient = function () {
        return this.patient;
    };
    Repository.prototype.getEmployee = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/employees/" + id)
            .subscribe(function (response) { _this.employee = response; });
    };
    Repository.prototype.getPatients = function () {
        var _this = this;
        var url = patientsUrl;
        if (this.filter.category && this.filter.search) {
            url += "?category=" + this.filter.category + "&search=" + this.filter.search;
        }
        if (this.filter.category && !this.filter.search) {
            url += "?category=" + this.filter.category;
        }
        if (!this.filter.category && this.filter.search) {
            url += "?search=" + this.filter.search;
        }
        //this.spinnerService.show();
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, url)
            .subscribe(function (response) { _this.patients = response; });
    };
    Repository.prototype.getPatientByVisitId = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/patientbyVisitId/" + id)
            .subscribe(function (response) { _this.patient = response; });
    };
    Repository.prototype.getAllPatients = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(_this.patients);
        });
    };
    Repository.prototype.getEmployees = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, employeesUrl)
            .subscribe(function (response) { _this.employees = response; });
    };
    // get all visits
    Repository.prototype.getVisits = function () {
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, visitsUrl);
        //.subscribe(response => { this.visits = response; });
    };
    // get single visit by visit id
    Repository.prototype.getVisit = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/visits/" + id)
            .subscribe(function (response) { _this.visit = response; });
    };
    // get vital signs by visit id
    Repository.prototype.getVitalSigns = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/vitalsignsbyVisitId/" + id)
            .subscribe(function (response) { _this.vitalSigns = response; });
    };
    // get doctor's assessment notes by visit id
    Repository.prototype.getAssessment = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/assessmentbyVisitId/" + id)
            .subscribe(function (response) { _this.assessment = response; });
    };
    // get doctor's orders by visit id
    Repository.prototype.getDoctorOrders = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/ordersbyVisitId/" + id)
            .subscribe(function (response) { _this.doctorOrders = response; });
    };
    // get single user by id
    Repository.prototype.getUser = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/users/" + id)
            .subscribe(function (response) { _this.appUser = response; });
    };
    // get app users
    Repository.prototype.getUsers = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/users")
            .subscribe(function (response) { _this.appUsers = response; });
    };
    Repository.prototype.getNurseByVisitId = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/nurse/" + id)
            .subscribe(function (response) { _this.nurse = response; });
    };
    Repository.prototype.getDoctorByVisitId = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/doctor/" + id)
            .subscribe(function (response) { _this.doctor = response; });
    };
    // get all roles
    Repository.prototype.getRoles = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/roles")
            .subscribe(function (response) { _this.appRoles = response; });
    };
    // get roles by user
    Repository.prototype.getRolesByUser = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/rolesbyuser/" + id)
            .subscribe(function (response) { _this.userRoles = response; });
    };
    // get account requests
    Repository.prototype.getAccountRequests = function () {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/getrequests")
            .subscribe(function (response) { _this.appUserRequests = response; });
    };
    // creates patient
    Repository.prototype.createPatient = function (pat) {
        var _this = this;
        var data = {
            firstName: pat.firstName, lastName: pat.lastName, middleName: pat.middleName, dob: pat.dob,
            placeOfBirth: pat.placeOfBirth, sublocation: pat.sublocation, phone: pat.phone, email: pat.email,
            idNumber: pat.idNumber, gender: pat.gender
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, patientsUrl, data)
            .subscribe(function (response) {
            pat.patientID = response;
            _this.patients.push(pat);
        });
    };
    // create visit
    Repository.prototype.createVisit = function (visit) {
        var data = {
            complaint: visit.complaint, background: visit.background, patientID: visit.patientID
        };
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, "/api/addVisit", data);
        //.subscribe(response => {
        //visit.visitId = response;
        // this.visits = response;
        // })
    };
    // create vital signs
    Repository.prototype.createVitalSigns = function (signs) {
        var data = {
            temperature: signs.temperature, pulse: signs.pulse, respiration: signs.respiration,
            bloodPressure: signs.bloodPressure, oxygenSaturation: signs.oxygenSaturation,
            visitId: signs.visitId, userDetailsID: signs.userDetailsID, patientID: signs.patientID
        };
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, "/api/addVitalSigns", data);
        //.subscribe(response => {
        //visit.visitId = response;
        // this.vitalSigns = response;
        //})
    };
    // create assessment
    Repository.prototype.createAssessment = function (assessment) {
        var data = { notes: assessment.notes, patientID: assessment.patientID };
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, "/api/addAssessment", data);
        //  .subscribe(response => {
        //  this.assessment = response;
        // })
    };
    // create doctors orders
    Repository.prototype.createOrders = function (orders) {
        console.log(orders);
        return this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, "api/addDoctorOrders", orders);
    };
    // creates appUser
    Repository.prototype.createUser = function (user) {
        var _this = this;
        var data = {
            title: user.title, firstName: user.firstName, lastName: user.lastName, idNumber: user.idNumber, username: user.username, phoneNumber: user.phoneNumber, biography: user.biography,
            imageUrl: user.imageUrl, gender: user.gender, email: user.email, reason: user.reason
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, addRequestUrl, data)
            .subscribe(function (response) {
            user.email = response;
            _this.patients.push(user);
        });
    };
    // create employee
    Repository.prototype.createEmployee = function (emp) {
        var _this = this;
        var data = {
            title: emp.title, firstName: emp.firstName, lastName: emp.lastName, idNumber: emp.idNumber, email: emp.email, username: emp.username, phone: emp.phone, biography: emp.biography,
            imageUrl: emp.imageUrl
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, employeesUrl, data)
            .subscribe(function (response) {
            emp.employeeID = response;
            _this.employees.push(emp);
        });
    };
    // update method
    Repository.prototype.replacePatient = function (pat) {
        var _this = this;
        var data = {
            firstName: pat.firstName, lastName: pat.lastName, middleName: pat.middleName, dob: pat.dob,
            placeOfBirth: pat.placeOfBirth, sublocation: pat.sublocation, phone: pat.phone, email: pat.email,
            idNumber: pat.idNumber, gender: pat.gender
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Put, "api/patients/" + pat.patientID, data)
            .subscribe(function (response) { return _this.getPatients(); });
    };
    // after update, the patients/employees array is repopulated using another request to server  ---very inefficient  process
    //todo: dynamically update only the changed patient to avoid round trip to the server
    Repository.prototype.replaceUser = function (user) {
        var _this = this;
        var data = {
            title: user.title, firstName: user.firstName, lastName: user.lastName, idNumber: user.idNumber, email: user.email,
            username: user.username, phoneNumber: user.phoneNumber, reason: user.reason, biography: user.biography,
            imageUrl: user.imageUrl, gender: user.gender, enabled: user.enabled
        };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Put, "api/edituser/" + user.userDetailsID, data)
            .subscribe(function (response) { return _this.getUsers(); });
    };
    // delete patient by id
    Repository.prototype.deletePatient = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Delete, patientsUrl + "/" + id)
            .subscribe(function (response) { return _this.getPatients(); });
    };
    // delete employee by id
    Repository.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Delete, employeesUrl + "/" + id)
            .subscribe(function (response) { return _this.getEmployees(); });
    };
    // consolidated request method
    Repository.prototype.sendRequest = function (verb, url, data) {
        var authToken = sessionStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "Bearer " + authToken);
        var request = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Request */]({
            method: verb, url: url, body: data, headers: headers
        });
        return this.http.request(request)
            .map(function (response) {
            //this.spinnerService.hide();
            return response.headers.get("Content-Length") != "0"
                ? response.json() : null;
        })
            .catch(function (errorResponse) {
            //this.spinnerService.hide();
            if (errorResponse.status == 400) {
                var jsonData_1;
                try {
                    jsonData_1 = errorResponse.json();
                }
                catch (e) {
                    throw new Error("Network Error");
                }
                var messages = Object.getOwnPropertyNames(jsonData_1)
                    .map(function (p) { return jsonData_1[p]; });
                throw new __WEBPACK_IMPORTED_MODULE_5__services_errorHandler_service__["b" /* ValidationError */](messages);
            }
            throw new Error("Network Error");
        });
    };
    Repository.prototype.patientVisitsCount = function () {
        return this.singlePatientVisits.length;
    };
    Repository.prototype.getPatientVisits = function (id) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "api/patientvisits/" + id)
            .subscribe(function (response) { _this.singlePatientVisits = response; });
    };
    //getCheckedInPatients() {
    //  this.sendRequest(RequestMethod.Get, "api/checkedIn")
    //    .subscribe(response => this.checkedInPatients = response);
    //}
    // cookie login
    //login(name: string, password: string): Observable<Response> {
    //    return this.http.post("/api/account/login",
    //        { name: name, password: password });
    //}
    // jwt token login
    //tokenLogin(name: string, password: string): Observable<boolean> {
    //    return this.http.request(new Request({
    //        method: RequestMethod.Post,
    //        url: "api/token",
    //        body: { name: name, password: password }
    //    })).map(response => {
    //        let r = response.json();
    //        this.auth_token = r.token;
    //        console.log(this.auth_token);
    //        if (this.auth_token) {
    //            return true;
    //        }
    //        return false;
    //    });
    //}
    // email password reset 
    Repository.prototype.resetPassword = function (email, password, confirmpassword, code) {
        return this.http.post("/api/account/resetpassword", { email: email, password: password, confirmpassword: confirmpassword, code: code });
    };
    //logout
    Repository.prototype.logout = function () {
        this.http.post("/api/account/logout", null).subscribe(function (respone) { });
    };
    // send email 
    Repository.prototype.forgotPassword = function (email) {
        return this.http.post("/api/account/forgotpassword", { email: email });
    };
    Repository.prototype.hasAdminRole = function (email) {
        return this.http.post("/api/account/isadmin", { email: email });
    };
    // enable / disable user
    Repository.prototype.toggleAccount = function (id, fromrequest) {
        var _this = this;
        if (fromrequest === void 0) { fromrequest = false; }
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, "/api/account/toggle/" + id + "?fromrequest=" + fromrequest)
            .subscribe(function (response) { return _this.getUsers(); });
    };
    // get user roles
    Repository.prototype.getUsersInRole = function (rolename) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/usersrole/" + rolename)
            .subscribe(function (response) { _this.roleUsers = response; });
    };
    // add user to role
    Repository.prototype.addUserToRole = function (id, rolename) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/addtorole/" + id + "?rolename=" + rolename)
            .subscribe(function (response) { _this.roleUsers = response; });
    };
    // remove user from role
    Repository.prototype.removeUserFromRole = function (id, rolename) {
        var _this = this;
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Get, "/api/removefromrole/" + id + "?rolename=" + rolename)
            .subscribe(function (response) { _this.roleUsers = response; });
    };
    // add new role to roles table
    Repository.prototype.addRole = function (approle) {
        var _this = this;
        var data = { name: approle.name };
        this.sendRequest(__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* RequestMethod */].Post, "/api/addrole/", data)
            .subscribe(function (response) { return _this.appRoles = response; });
    };
    Object.defineProperty(Repository.prototype, "filter", {
        get: function () {
            return this.filterObject;
        },
        enumerable: true,
        configurable: true
    });
    return Repository;
}());
Repository = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng4_loading_spinner__["b" /* Ng4LoadingSpinnerService */]) === "function" && _b || Object])
], Repository);

var _a, _b;
//# sourceMappingURL=repository.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(repo, authService) {
        this.repo = repo;
        this.authService = authService;
        this.repo.getPatients();
        this.repo.getVisits();
        this.repo.getUsers();
        this.repo.getRoles();
        this.repo.getAccountRequests();
        //if (!this.repo.patients) {
        //    this.repo.getPatients();
        //}
        //if (!this.repo.visits) {
        //    this.repo.getVisits();
        //}
        //if (!this.repo.appUsers) {
        //    this.repo.getUsers();
        //}
        //if (!this.repo.appUserRequests) {
        //    this.repo.getAccountRequests();
        //}
        //if (!this.repo.appRoles) {
        //    this.repo.getRoles();
        //}
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        template: __webpack_require__(228)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_repository__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_approle_model__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRoleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateRoleComponent = (function () {
    function CreateRoleComponent(repo, router) {
        this.repo = repo;
        this.router = router;
        this.newRole = new __WEBPACK_IMPORTED_MODULE_2__models_approle_model__["a" /* AppRole */]();
        this.formSubmitted = false;
        // this.repo.getAppUser;
    }
    CreateRoleComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.repo.addRole(this.newRole);
            this.newRole = new __WEBPACK_IMPORTED_MODULE_2__models_approle_model__["a" /* AppRole */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: "rolesmanage-table",
        template: __webpack_require__(229)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_repository__["a" /* Repository */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CreateRoleComponent);

var _a, _b;
//# sourceMappingURL=createrole.component.js.map

/***/ })

},[593]);
//# sourceMappingURL=main.bundle.js.map